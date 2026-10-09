/* global self, caches, fetch, Response */
// 全站 Service Worker：HTML 文档采用 network-first 策略，
// 确保 Pages CMS 发布后访客无需强刷即可看到最新页面；
// 断网时回退到最近一次缓存的文档。
// CSS/JS 等带哈希文件名的资源不在此拦截。
//
// 卸载方式见 README：用“自毁脚本”替换本文件并移除 Layout 中的注册代码。

const CACHE_NAME = "earthonline-doc-v1";

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
      await self.clients.claim();
    })()
  );
});

function isDocumentRequest(request) {
  if (request.method !== "GET") return false;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return false;
  return (
    request.mode === "navigate" ||
    request.destination === "document" ||
    (request.headers.get("accept") || "").includes("text/html")
  );
}

self.addEventListener("fetch", event => {
  const { request } = event;
  if (!isDocumentRequest(request)) return;

  event.respondWith(
    (async () => {
      try {
        const response = await fetch(request);
        if (response.status === 200 && response.type === "basic") {
          const cache = await caches.open(CACHE_NAME);
          cache.put(request, response.clone());
        }
        return response;
      } catch {
        return (
          (await caches.match(request, { ignoreSearch: true })) ||
          Response.error()
        );
      }
    })()
  );
});
