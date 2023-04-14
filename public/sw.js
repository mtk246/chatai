importScripts('/workbox-v5.1.4/workbox-sw.js');

workbox.setConfig({
  debug: false,
});

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

workbox.routing.registerRoute(
  /^https?.*/,
  new workbox.strategies.NetworkFirst({
    cacheName: 'https-calls',
    networkTimeoutSeconds: 15,
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);
