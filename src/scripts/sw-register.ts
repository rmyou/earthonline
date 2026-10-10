// 用途：生产环境注册 network-first Service Worker（public/sw.js）。
// 编辑：本地开发（dev/preview 构建外）不注册；调整注册地址或条件时改这里。
//
// 走 Vite 处理的 module 脚本，因此可直接用 import.meta.env；
// BASE_URL 为不带尾斜杠的 /earthonline，需补斜杠后拼接 sw.js。
if (import.meta.env.PROD && "serviceWorker" in navigator) {
  const swUrl = `${import.meta.env.BASE_URL.replace(/\/?$/, "/")}sw.js`;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register(swUrl);
  });
}
