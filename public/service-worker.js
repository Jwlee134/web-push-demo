// https://joshuatz.com/posts/2021/strongly-typed-service-workers/
// @ts-check
/// <reference no-default-lib="false"/>
/// <reference lib="ES2015" />
/// <reference lib="webworker" />

// Using IIFE to provide closure to redefine `self`
(() => {
  // This is a little messy, but necessary to force type assertion
  // Same issue as in TS -> https://github.com/microsoft/TypeScript/issues/14877
  // prettier-ignore
  const self = /** @type {ServiceWorkerGlobalScope} */ (/** @type {unknown} */ (globalThis.self));
  self.addEventListener("push", (event) => {
    const title = event.data?.text() || "";

    event.waitUntil(self.registration.showNotification(title));
  });
})();
