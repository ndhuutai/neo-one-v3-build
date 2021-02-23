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
  "/precache-manifest.0850b50498f3a372d3995d5bbef07dfe.js"
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
    "revision": "11a912dbfd3f643461ef1d28eb5141db"
  },
  {
    "url": "editor.worker.js",
    "revision": "1ca5a094b5d82864cf4dd59d44d6b2b8"
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
    "revision": "11a9dbe2513bbe3d746ddd553474e40b"
  },
  {
    "url": "html.worker.js",
    "revision": "6e9eeb67cb28e8abb098760f0816f8be"
  },
  {
    "url": "json.worker.js",
    "revision": "2344b0a87f03217351878471fba10e4d"
  },
  {
    "url": "jsonRPCLocalProvider.worker.js",
    "revision": "6946d21f892f19b2c34046e2049d4bd6"
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
    "revision": "fb742465d14ad1ad9a1152ce06d4a7de"
  },
  {
    "url": "ts.worker.js",
    "revision": "6695a829972ecaa056a163203e3f7b85"
  },
  {
    "url": "workers.0.118026ba.js",
    "revision": "193062e25a56f3755985b9e2e661769c"
  },
  {
    "url": "workers.0.736f7d8f.js",
    "revision": "cffe02f982ef1a76ba7de5de2024e51a"
  },
  {
    "url": "workers.0.a3e57947.js",
    "revision": "32f112812ff2783e492690fe2ece59ba"
  },
  {
    "url": "workers.0.af215173.js",
    "revision": "78e6ef2d485a3148bc28e13419829859"
  },
  {
    "url": "workers.0.af7edd36.js",
    "revision": "c5754c477abdd097bb8095a8f156ec1d"
  },
  {
    "url": "workers.0.f28d74fe.js",
    "revision": "a7192cdb622a824d5d07f77023591fd8"
  },
  {
    "url": "workers.1.0621ce7b.js",
    "revision": "f8c39d337c4ac8c6bb70735c58b425c0"
  },
  {
    "url": "workers.1.0ce8aa37.js",
    "revision": "74d3aa0879fdc42e35627bd3152396d9"
  },
  {
    "url": "workers.1.9630717e.js",
    "revision": "8152887fc00e6ab4fbda542d4f89f92c"
  },
  {
    "url": "workers.1.99b228a9.js",
    "revision": "e3dcea859c9323b650246b5425a08022"
  },
  {
    "url": "workers.1.a62601d6.js",
    "revision": "985199f9d938362b6890f914e3c36e58"
  },
  {
    "url": "workers.1.b2623bc0.js",
    "revision": "1edb02ffdc6ff65f7d900111edb44ea9"
  },
  {
    "url": "workers.13.247bd4e2.js",
    "revision": "9f955427f6009d35fae7332f790301d7"
  },
  {
    "url": "workers.13.31a206d2.js",
    "revision": "3ea7cf4e76eb7bdb0ab7da08162a45bf"
  },
  {
    "url": "workers.13.4f57e96a.js",
    "revision": "dac92301df3d21dc2dfd3ddad4a48530"
  },
  {
    "url": "workers.13.f16d7179.js",
    "revision": "1c49ef1a58b26d080fa778025dfa394b"
  },
  {
    "url": "workers.13.f7eeacb6.js",
    "revision": "70f80748a707cc6b0d3089eb0f6a42f8"
  },
  {
    "url": "workers.13.fa1f2541.js",
    "revision": "b5c8d895980d87dca63ef88fe0ecc26d"
  },
  {
    "url": "workers.14.21f6e92d.js",
    "revision": "54284b60adc18c6cf58cb71c919833cc"
  },
  {
    "url": "workers.14.55d6c1f2.js",
    "revision": "1c63cec19a313d2b32954efcb6cc78df"
  },
  {
    "url": "workers.14.8b346132.js",
    "revision": "59a982999b94b40a05e69435263daebb"
  },
  {
    "url": "workers.14.9d400f51.js",
    "revision": "454753d178264e7c7ca2bf56c12322c0"
  },
  {
    "url": "workers.14.de639e3a.js",
    "revision": "71d6932adedab3719a3a503d6626060c"
  },
  {
    "url": "workers.14.e62f3b75.js",
    "revision": "dabe687449125095b86d9d6dc6eef5a9"
  },
  {
    "url": "workers.15.29295c5c.js",
    "revision": "95dc5957e14458cb36da102a7f835ffd"
  },
  {
    "url": "workers.15.2a02a1b5.js",
    "revision": "a6746fd2e16bec0416cc7bebb8261da2"
  },
  {
    "url": "workers.15.68d5bfc7.js",
    "revision": "52cac354344a8949ec586ed8584e9e23"
  },
  {
    "url": "workers.15.c74a9dce.js",
    "revision": "8e67003b366b6603e0e9e4ca26924993"
  },
  {
    "url": "workers.15.d1ccb0fd.js",
    "revision": "82c95d155c06b9651eace8b5607c33b1"
  },
  {
    "url": "workers.15.f39e3a5f.js",
    "revision": "70e5af850bee80e855234c8e605220c9"
  },
  {
    "url": "workers.16.276826a8.js",
    "revision": "c2740bdc5b00f662a00b5faa102d5fc0"
  },
  {
    "url": "workers.16.406baa86.js",
    "revision": "e160aa23a7363c3150a28bc6a5b44a3d"
  },
  {
    "url": "workers.16.42743b84.js",
    "revision": "87796d486c9f6eab09acc00954e66924"
  },
  {
    "url": "workers.16.670f7efb.js",
    "revision": "5b90b5f5464e573d78b71220a6570d73"
  },
  {
    "url": "workers.16.891a24a7.js",
    "revision": "1d1161bcff53f9655673f30a491623ac"
  },
  {
    "url": "workers.16.ba1182f7.js",
    "revision": "922a7fcd550eb035185c45637501d4d9"
  },
  {
    "url": "workers.17.31485989.js",
    "revision": "35db314959fdd09db921c7cd30a211b6"
  },
  {
    "url": "workers.17.808d2562.js",
    "revision": "b4e33e0f59c39ed1c4143dbf32b316ad"
  },
  {
    "url": "workers.17.909d5183.js",
    "revision": "561c6a7643344c4a764ee0c15dd78999"
  },
  {
    "url": "workers.17.93799f0c.js",
    "revision": "1d5693a8310445b1e680b7dc20a2c15b"
  },
  {
    "url": "workers.17.96108b4d.js",
    "revision": "0c4f289473c3a190dd318267f10b09d0"
  },
  {
    "url": "workers.17.9645c114.js",
    "revision": "8b56ff46f284f43229ee245257d3f78c"
  },
  {
    "url": "workers.17.b1f0384e.js",
    "revision": "5bd841addca02cbbd14426074f3794b4"
  },
  {
    "url": "workers.18.12cec08d.js",
    "revision": "88b00cf43b6d230f8424fd4c60a1b84d"
  },
  {
    "url": "workers.18.15089e87.js",
    "revision": "8b33693f6e6bc29bf75d96b5dbd93199"
  },
  {
    "url": "workers.18.603f82c4.js",
    "revision": "bcce792a15fb875f0f8b53b5784e24fe"
  },
  {
    "url": "workers.18.6216c359.js",
    "revision": "1a90021a3444493583b78246387212a1"
  },
  {
    "url": "workers.18.adbd5eb2.js",
    "revision": "71c2a21f0ee5c6789f5ecdbb5e213ac0"
  },
  {
    "url": "workers.18.d09f014c.js",
    "revision": "d31d4f4f29a2e87f8531684339d6f57a"
  },
  {
    "url": "workers.19.2f6b9615.js",
    "revision": "fa9d0c178a13d3c6a522022fdfac7d12"
  },
  {
    "url": "workers.19.387a0307.js",
    "revision": "3999fad19303c37cffc606420c85509e"
  },
  {
    "url": "workers.19.44410a19.js",
    "revision": "ccb178c46a84dfaa117472eacc461912"
  },
  {
    "url": "workers.19.4e2ec372.js",
    "revision": "f2a1a62d29458ea1783f0697ac0ebfbe"
  },
  {
    "url": "workers.19.982480de.js",
    "revision": "01ce92f556d6ff672fd5aebd8bd8df59"
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
    "url": "workers.2.10ff76e8.js",
    "revision": "0226875db44cbf7c1d3995fd7380a4af"
  },
  {
    "url": "workers.2.1ad6c52f.js",
    "revision": "3fda45d539b7da49f2a6492c73494b74"
  },
  {
    "url": "workers.2.338fd3f3.js",
    "revision": "0f542a3f7ea1b1b2e3157d39333c8c58"
  },
  {
    "url": "workers.2.83782585.js",
    "revision": "2e35ca9faed63f87f6a2283c31674af1"
  },
  {
    "url": "workers.2.fcc77743.js",
    "revision": "e7184226f2038c210ab0844856ebc7bc"
  },
  {
    "url": "workers.20.11283db7.js",
    "revision": "9ed6edc16936fcc0d115917ef4557b0f"
  },
  {
    "url": "workers.20.214c01f5.js",
    "revision": "6ec4d2d3e2c99db59b99428582aa6489"
  },
  {
    "url": "workers.20.5f0c7f8a.js",
    "revision": "7c16a51068a270d7d985937ec6cd8ec0"
  },
  {
    "url": "workers.20.c9b09830.js",
    "revision": "e565d7000169174b0654c2f81b64ba7c"
  },
  {
    "url": "workers.20.caad78ee.js",
    "revision": "f1d97a7c46ed173703721b9082f08180"
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
    "url": "workers.21.132a0dc7.js",
    "revision": "1e18240eae19c58e5eca2ef6bb0c0d4a"
  },
  {
    "url": "workers.21.6ca71785.js",
    "revision": "27598bec263de0d45120b1327886d4e6"
  },
  {
    "url": "workers.21.d08f16e8.js",
    "revision": "42be87a68b7c5e4a9e2e976620409653"
  },
  {
    "url": "workers.21.d768dd2a.js",
    "revision": "0771afb2ac68a93a24576d9bf062da37"
  },
  {
    "url": "workers.21.f1d05b2f.js",
    "revision": "cf6b9715e60d3eeeb9a8a6f1f6768a64"
  },
  {
    "url": "workers.3.36117856.js",
    "revision": "0d11d35bdba964e6ed74b71e4eeab3e1"
  },
  {
    "url": "workers.3.5edfc4b7.js",
    "revision": "43ebd0fe97da3ad6ed7f95b951fd4d1e"
  },
  {
    "url": "workers.3.a7ed71d5.js",
    "revision": "cd443e13229870105ad4ca572810aab3"
  },
  {
    "url": "workers.3.b467a7f3.js",
    "revision": "f2eeeecebeb920374007d13560f007a5"
  },
  {
    "url": "workers.3.cb9a0052.js",
    "revision": "1530cf19665d2af4e370bca20aa422ea"
  },
  {
    "url": "workers.3.f0141d94.js",
    "revision": "2023e2b37e075b437549f0656747e4e5"
  },
  {
    "url": "workers.4.100e7d27.js",
    "revision": "6f349e719c6490408298646583f70c35"
  },
  {
    "url": "workers.4.17796e2e.js",
    "revision": "40debd538752c9a58547d407ddbe7b96"
  },
  {
    "url": "workers.4.1909cbe4.js",
    "revision": "25174a5ccbaebada8e15d38ae9d70e2a"
  },
  {
    "url": "workers.4.71f5610b.js",
    "revision": "6e0d702e10291218edb1f0bd7c4b41cb"
  },
  {
    "url": "workers.4.77f6c7c7.js",
    "revision": "a3c6c73a73fedf41c91880dc8e9e8b9e"
  },
  {
    "url": "workers.4.c5c180bf.js",
    "revision": "35435cc5006acf9ada4b27179db603be"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/.*.jsdelivr.com/, new workbox.strategies.CacheFirst({ "cacheName":"jsdelivr","matchOptions":{"ignoreSearch":true}, plugins: [new workbox.expiration.Plugin({ maxEntries: 100000, purgeOnQuotaError: true }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');

workbox.googleAnalytics.initialize({});
