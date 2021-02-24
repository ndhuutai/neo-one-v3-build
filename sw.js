/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/precache-manifest.b59c00d476ee732603db04abc6d99143.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "android-chrome-192x192.png",
    "revision": "2a136b50ccb62b3dd09ce12a032aa02b"
  },
  {
    "url": "android-chrome-256x256.png",
    "revision": "d38fa4f1f7f8015c1d25e17b2e1b8cc5"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "785b5c7d9e9de53bf1d63f5f6c8ec4fc"
  },
  {
    "url": "builder.worker.js",
    "revision": "f8ecbb61db0d7e7d7f3c879eb7d24304"
  },
  {
    "url": "editor.worker.js",
    "revision": "e1559c6ef5a6b5a6d999d8e8cd85b2f1"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "20e26c4d2f4ef467fbf154ce03ee27b9"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "7a679df39bdf8e6f2ac7b21160ae414d"
  },
  {
    "url": "fs.worker.js",
    "revision": "a618889a4addacf226d4364c0d2cad27"
  },
  {
    "url": "html.worker.js",
    "revision": "e346fa3cde7459abc0f6f7d74a2d60bc"
  },
  {
    "url": "json.worker.js",
    "revision": "5d09598801d2dbb614d78b2eb734179c"
  },
  {
    "url": "jsonRPCLocalProvider.worker.js",
    "revision": "c487aa90208d01a82e3e01a3c9f32966"
  },
  {
    "url": "manifest.json",
    "revision": "474bab26691877bbbad180ab13767870"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "588246b263ea71147c3f379d9ec5c541"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "8428216e7f4b7b1e451eaf9360b374ff"
  },
  {
    "url": "social.png",
    "revision": "b5705e1338324712c00b1bc9b7d9a57c"
  },
  {
    "url": "static/blog/2018/11/14/client-apis.png",
    "revision": "961c70e080a09dee55034cb42b26d38e"
  },
  {
    "url": "static/blog/2018/11/14/courses.png",
    "revision": "f6ce5f8a4c2e677a398082d8ff941570"
  },
  {
    "url": "static/blog/2018/11/14/developer-tools.png",
    "revision": "e89e59f5b4d5fca0fe7b521b6e8f7cc3"
  },
  {
    "url": "static/blog/2018/11/14/documentation.png",
    "revision": "4d31925ea4a8c154230f1b403be397b3"
  },
  {
    "url": "static/blog/2018/11/14/toolchain.png",
    "revision": "9282644298465926af181d09ab34bbc1"
  },
  {
    "url": "static/blog/2018/11/14/typescript-smart-contracts.png",
    "revision": "227b6bee011c977f7119b359ce5b485c"
  },
  {
    "url": "static/blog/2018/11/14/unit-tests.png",
    "revision": "0a03a7deaf3c35c3987dab7852f1d49b"
  },
  {
    "url": "static/fonts/Axiforma-Bold.woff",
    "revision": "9594db2ff92b1099fe032a8a187c81c4"
  },
  {
    "url": "static/fonts/Axiforma-Bold.woff2",
    "revision": "b0f0edd25081ec171eae81120a413b98"
  },
  {
    "url": "static/fonts/Axiforma-Book.woff",
    "revision": "6ffb302ad1948f8dcb9dbab54387275c"
  },
  {
    "url": "static/fonts/Axiforma-Book.woff2",
    "revision": "e6ee7450697294f28d5f9b80f59b9e85"
  },
  {
    "url": "static/fonts/Axiforma-Medium.woff",
    "revision": "b4cdec736ef6785e0c2caa392a886eb8"
  },
  {
    "url": "static/fonts/Axiforma-Medium.woff2",
    "revision": "44b8cda8a2bf778530bab7ceb048c190"
  },
  {
    "url": "static/fonts/Axiforma-Regular.woff",
    "revision": "b4afda971855a50bfaaf56e6cd6b1f85"
  },
  {
    "url": "static/fonts/Axiforma-Regular.woff2",
    "revision": "7ee7ff4252ecd5f015ffd4e00af629a4"
  },
  {
    "url": "static/fonts/Axiforma-SemiBold.woff",
    "revision": "7dfc715decb535c3de8b60cb29ad8905"
  },
  {
    "url": "static/fonts/Axiforma-SemiBold.woff2",
    "revision": "3e80fa388fe03f96d00fb27cd92cab76"
  },
  {
    "url": "static/fonts/Axiforma-Thin.woff",
    "revision": "4df7fbb9cf7289e95fa23a65d9c94a02"
  },
  {
    "url": "static/fonts/Axiforma-Thin.woff2",
    "revision": "50eee4d3e069f29955c85c499aa44639"
  },
  {
    "url": "transpiler.worker.js",
    "revision": "ebcc20327aef4c099076905d0c2e2647"
  },
  {
    "url": "ts.worker.js",
    "revision": "b2922f05d05b10fa233dc6858125832e"
  },
  {
    "url": "workers.0.0ce13e97.js",
    "revision": "99a3cc888282ba7b6d021ed7f45ab0b1"
  },
  {
    "url": "workers.0.0eeb259e.js",
    "revision": "b9d04c5e2e0abb9878fa9231eb0a152e"
  },
  {
    "url": "workers.0.118026ba.js",
    "revision": "193062e25a56f3755985b9e2e661769c"
  },
  {
    "url": "workers.0.977fea9f.js",
    "revision": "24fd0250a7cd14108435bb80df1b487a"
  },
  {
    "url": "workers.1.0ce8aa37.js",
    "revision": "74d3aa0879fdc42e35627bd3152396d9"
  },
  {
    "url": "workers.1.2fa0938c.js",
    "revision": "17e574a9f23a25df285b94667759f8db"
  },
  {
    "url": "workers.1.c9efa0af.js",
    "revision": "9c68e9aba2d0d06ca5ac258788e840f8"
  },
  {
    "url": "workers.1.f25a1856.js",
    "revision": "a62939eaf9c631f783ac3e2cca32ca1a"
  },
  {
    "url": "workers.13.0e95879a.js",
    "revision": "c94643d242db808af355992392d63550"
  },
  {
    "url": "workers.13.2e3009c6.js",
    "revision": "589d677b1cc149b821c3f235acef32ba"
  },
  {
    "url": "workers.13.48fd92de.js",
    "revision": "8b600f18098884a3f8ef7c187c16087e"
  },
  {
    "url": "workers.13.662fd971.js",
    "revision": "98adb2c358f4471861cdb3cf380f93cb"
  },
  {
    "url": "workers.13.ac28221f.js",
    "revision": "4ce3ee2529d6007b03bb9a6585b23a7c"
  },
  {
    "url": "workers.13.f7eeacb6.js",
    "revision": "70f80748a707cc6b0d3089eb0f6a42f8"
  },
  {
    "url": "workers.14.17467ff4.js",
    "revision": "073adf347013e44b03a0ec1b6d64af38"
  },
  {
    "url": "workers.14.21f6e92d.js",
    "revision": "54284b60adc18c6cf58cb71c919833cc"
  },
  {
    "url": "workers.14.31e91502.js",
    "revision": "2043c55e3e55781e8aaca357fb4b1dec"
  },
  {
    "url": "workers.14.3ac28ede.js",
    "revision": "0def0470788aa82d289da37934ab58ba"
  },
  {
    "url": "workers.14.44b8a0ca.js",
    "revision": "d04b68a8bacc87b4269df689f0e7804b"
  },
  {
    "url": "workers.14.7e4c92f4.js",
    "revision": "dd2244b14d1d0e7ee8dd57e0f5c3b704"
  },
  {
    "url": "workers.15.1b05538c.js",
    "revision": "52d610cae780c20e323e81cc5955c7dd"
  },
  {
    "url": "workers.15.3c2c685a.js",
    "revision": "44492e406707621b4bd102706f863c50"
  },
  {
    "url": "workers.15.ce976261.js",
    "revision": "4c89342ff1793dfe7d89d46b73fc6e99"
  },
  {
    "url": "workers.15.d1ccb0fd.js",
    "revision": "82c95d155c06b9651eace8b5607c33b1"
  },
  {
    "url": "workers.15.da79620d.js",
    "revision": "49d31ece391f0e1ebf2978f584593e74"
  },
  {
    "url": "workers.15.e24cf37d.js",
    "revision": "08f0f11029c097942fda3a3190e4967a"
  },
  {
    "url": "workers.16.2e4c947d.js",
    "revision": "e6185167f5a2636f2613d8d5d845d236"
  },
  {
    "url": "workers.16.3d77cda1.js",
    "revision": "94d4582ba549da116b9ad6c3c1d8b896"
  },
  {
    "url": "workers.16.670f7efb.js",
    "revision": "5b90b5f5464e573d78b71220a6570d73"
  },
  {
    "url": "workers.16.7b55903e.js",
    "revision": "a9647a482a5cca1984a5753bcf5dae1e"
  },
  {
    "url": "workers.17.0821ca7f.js",
    "revision": "af8ad2df439cecbd3d8937774f3c77bc"
  },
  {
    "url": "workers.17.31e2ae27.js",
    "revision": "e53c0793949f9aa40ad002150d783ee4"
  },
  {
    "url": "workers.17.9645c114.js",
    "revision": "8b56ff46f284f43229ee245257d3f78c"
  },
  {
    "url": "workers.17.a52e9083.js",
    "revision": "e3c5ea318dd5b1b545f45a3b68d8ff59"
  },
  {
    "url": "workers.18.12cec08d.js",
    "revision": "88b00cf43b6d230f8424fd4c60a1b84d"
  },
  {
    "url": "workers.18.22691315.js",
    "revision": "e07a23527c441b099f6da25460303395"
  },
  {
    "url": "workers.18.61c02fb7.js",
    "revision": "6b87981e6394725d0d3fbd3106b9627f"
  },
  {
    "url": "workers.18.8f9253eb.js",
    "revision": "df199f84d6d6137dfe90252b3a8eefa4"
  },
  {
    "url": "workers.18.e770c5a7.js",
    "revision": "e5f214d17c3ea52efb31d5a0f1c49048"
  },
  {
    "url": "workers.18.fc3d1a98.js",
    "revision": "dd7fa45197bf4a31e060960b7ddce36f"
  },
  {
    "url": "workers.19.13f1318f.js",
    "revision": "0ba17ce66dfe076e628182c3bb611ea8"
  },
  {
    "url": "workers.19.ad5645f3.js",
    "revision": "0696e669a4d80e7ed62fa07157212558"
  },
  {
    "url": "workers.19.b0efe30b.js",
    "revision": "e9efb087afa3f1dfd398afb56229bd40"
  },
  {
    "url": "workers.19.e79e07cd.js",
    "revision": "4fc0b5022eb730f164922ffca337f4ac"
  },
  {
    "url": "workers.2.08471ce8.js",
    "revision": "a1d17dc45b3174520a6c43016541b465"
  },
  {
    "url": "workers.2.2426b644.js",
    "revision": "8993fcf52dbad206f9aa446d43c7536c"
  },
  {
    "url": "workers.2.dd6c69c1.js",
    "revision": "54388ce4567a5b8d6bef2d153ae672bd"
  },
  {
    "url": "workers.2.e51961f7.js",
    "revision": "cb3ffdf43f4d295c268647220c32ba3f"
  },
  {
    "url": "workers.20.91944b0f.js",
    "revision": "201447dacee77ea08f5effe442540f0e"
  },
  {
    "url": "workers.20.91a157ca.js",
    "revision": "d991aaed1307e4188fc9021515be18ce"
  },
  {
    "url": "workers.20.c82f9e9f.js",
    "revision": "d9de9a4068af3bfbd584099d05fa9b89"
  },
  {
    "url": "workers.20.e70d0a46.js",
    "revision": "ecf0e5eee3f7b4c2ed2520f7324efde9"
  },
  {
    "url": "workers.21.00f54119.js",
    "revision": "e836659e68dd3c7c4f33e9a5f19daf2d"
  },
  {
    "url": "workers.21.4d4f8b10.js",
    "revision": "1c2b3c066de54c6f0de3857a5a98563c"
  },
  {
    "url": "workers.21.6f4f4c8c.js",
    "revision": "46e88c7fd42bd124dfae9a4720889588"
  },
  {
    "url": "workers.21.93faef28.js",
    "revision": "a19df4fa1eb2cf6af7d479dc93504cd5"
  },
  {
    "url": "workers.21.96cf5137.js",
    "revision": "b848942cb9a23f338046536b7d7ebc95"
  },
  {
    "url": "workers.21.b3997e3f.js",
    "revision": "e7635816990bd0585d1b2dd3a3b5a92e"
  },
  {
    "url": "workers.3.072a31ec.js",
    "revision": "15fedb2882af3fa1764a20ba2764d240"
  },
  {
    "url": "workers.3.5edfc4b7.js",
    "revision": "43ebd0fe97da3ad6ed7f95b951fd4d1e"
  },
  {
    "url": "workers.3.68fd310e.js",
    "revision": "bdcd6845aa02e40026f4d15578b26a10"
  },
  {
    "url": "workers.3.7dd411af.js",
    "revision": "bfa49ce4a4a225b810828bdb311913cf"
  },
  {
    "url": "workers.4.0ffc33a7.js",
    "revision": "80277863df2db5a95efc12bc09d82d21"
  },
  {
    "url": "workers.4.100e7d27.js",
    "revision": "6f349e719c6490408298646583f70c35"
  },
  {
    "url": "workers.4.c4d42bcc.js",
    "revision": "7babf907d0f35334319019d595d05284"
  },
  {
    "url": "workers.4.dac13558.js",
    "revision": "98dd2db0bafc077fcfe291a9eed6ac73"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/.*.jsdelivr.com/, new workbox.strategies.CacheFirst({ "cacheName":"jsdelivr","matchOptions":{"ignoreSearch":true}, plugins: [new workbox.expiration.Plugin({ maxEntries: 100000, purgeOnQuotaError: true }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');

workbox.googleAnalytics.initialize({});
