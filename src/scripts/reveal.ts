// 用途：滚动入场（scroll reveal）——元素进入视口时错峰淡入上移。
// 编辑：调整入场选择器、阈值或延迟时修改本文件；样式与隐藏门控在 motion.css。
//
// 渐进增强设计：
// - 仅当 <html data-reveal="on"> 存在时才生效（由 Layout head 内联脚本在
//   支持 IntersectionObserver 且未开启“减少动态效果”时设置）。
// - 文章/页面正文的文字段落不隐藏，只增强小标题与图片，保证可读性。
// - 以 IntersectionObserver 为主；另加一层 rAF 节流的滚动安全网，
//   防止 PageDown、拖动滚动条等大幅跳跃时个别元素错过回调而永久隐藏。
// - astro:page-load 在首次加载和每次客户端导航后都会触发，故跨页后新
//   文档中的元素会被重新观察；window 级监听器在重绑前先移除旧的，避免堆积。

let pending = new Set<HTMLElement>();
let observer: IntersectionObserver | null = null;
let fallbackFrame = 0;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// 同步门控标记。<html> 属性在 Astro 客户端转场换页后会被重置，而 head 里的
// is:inline 门控脚本不会在跨页后重跑，因此每次 after-swap 都要重新设置一次；
// 否则站内跳转后 data-reveal 丢失，元素会一直停留在初始隐藏态。
function syncRevealFlag() {
  const root = document.documentElement;
  if (!prefersReducedMotion() && "IntersectionObserver" in window) {
    root.setAttribute("data-reveal", "on");
  } else {
    root.removeAttribute("data-reveal");
  }
}

function markProseElements() {
  document.querySelectorAll<HTMLElement>(".app-prose").forEach(prose => {
    const targets = prose.querySelectorAll<HTMLElement>("h2, h3, figure, img");
    targets.forEach((el, index) => {
      if (el.dataset.revealBound === "1") return;
      el.dataset.reveal = "";
      el.dataset.revealBound = "1";
      el.style.setProperty("--reveal-delay", `${Math.min(index * 60, 300)}ms`);
    });
  });
}

// 安全网：用几何位置兜底，元素顶部进入视口下沿上方即显现，
// 不依赖 IntersectionObserver 的相交回调，大幅跳跃滚动也不会漏。
function checkPendingByRect() {
  if (pending.size === 0) {
    teardownFallback();
    return;
  }
  const vh = window.innerHeight;
  for (const el of pending) {
    const top = el.getBoundingClientRect().top;
    if (top < vh - 8) {
      el.classList.add("is-visible");
      pending.delete(el);
      if (observer) observer.unobserve(el);
    }
  }
  if (pending.size === 0) teardownFallback();
}

function onScrollOrResize() {
  if (fallbackFrame) return;
  fallbackFrame = window.requestAnimationFrame(() => {
    fallbackFrame = 0;
    checkPendingByRect();
  });
}

function teardownFallback() {
  if (fallbackFrame) {
    window.cancelAnimationFrame(fallbackFrame);
    fallbackFrame = 0;
  }
  // 用同一引用移除，避免客户端多次换页后监听器堆积。
  window.removeEventListener("scroll", onScrollOrResize);
  window.removeEventListener("resize", onScrollOrResize);
}

function initReveal() {
  syncRevealFlag();

  // 每次进入新页面先清掉上一页遗留的监听与观察器。
  teardownFallback();
  if (observer) observer.disconnect();
  pending = new Set<HTMLElement>();

  if (document.documentElement.dataset.reveal !== "on") {
    // 降级环境：确保一切直接可见。
    document
      .querySelectorAll<HTMLElement>("[data-reveal]")
      .forEach(el => el.classList.add("is-visible"));
    return;
  }

  // 正文增强元素在此刻打标，随后和组件中预置 data-reveal 的元素一起观察。
  markProseElements();

  const items = Array.from(
    document.querySelectorAll<HTMLElement>("[data-reveal]")
  );

  items.forEach(el => {
    if (el.classList.contains("is-visible")) return;
    pending.add(el);
  });

  if (pending.size === 0) return;

  if ("IntersectionObserver" in window) {
    observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          pending.delete(entry.target as HTMLElement);
          observer?.unobserve(entry.target);
        }
        if (pending.size === 0) teardownFallback();
      },
      { threshold: 0.05, rootMargin: "0px 0px -4% 0px" }
    );
    pending.forEach(el => observer!.observe(el));
  }

  // 安全网监听；初始化先判定一次首屏元素。
  window.addEventListener("scroll", onScrollOrResize, { passive: true });
  window.addEventListener("resize", onScrollOrResize);
  checkPendingByRect();
}

// after-swap 在换页后、page-load 前触发，尽早恢复门控标记；
// page-load 负责（重新）打标正文元素并建立观察器。
document.addEventListener("astro:after-swap", syncRevealFlag);
document.addEventListener("astro:page-load", initReveal);
