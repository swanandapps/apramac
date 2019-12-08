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

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about.html",
    "revision": "6e1211367c71a740290299f8e45f001e"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "90be57fd0bb5c15b225a79938a68ec89"
  },
  {
    "url": "app.html",
    "revision": "9f138f43cedcc386d9ec4975b2bf324f"
  },
  {
    "url": "css/app~06837ae4.3c7a53cc.css",
    "revision": "4cf29e1358b098b147bfb673691bd3f9"
  },
  {
    "url": "css/app~1c3a2c3f.53b2011f.css",
    "revision": "29cd7e1d35b9d28cc03c12d08b78fd40"
  },
  {
    "url": "css/app~8e90613a.afebb088.css",
    "revision": "d6fb1c8fc7e1f7d26a75f6dfaca95ef3"
  },
  {
    "url": "css/app~9c5b28f6.0d6d6bdb.css",
    "revision": "7b8862670c790de149acbf3692a5fbed"
  },
  {
    "url": "css/app~d3e9661a.977c1c87.css",
    "revision": "7a34b0812a1f25689d2bc0e3861d6ba1"
  },
  {
    "url": "css/chunk-0049183f.ada9c04a.css",
    "revision": "18ae083abc7302d0969f298fa43e7201"
  },
  {
    "url": "css/chunk-073406ab.6a9dfcad.css",
    "revision": "de5ee171f4cbaaa4f0414dc65130de7f"
  },
  {
    "url": "css/chunk-233c4dac.91fe6aed.css",
    "revision": "5781c5329d23632d2702e088cb388957"
  },
  {
    "url": "css/chunk-2815d762.662cd074.css",
    "revision": "7f75075a3875a49e580a9dc5aaffc809"
  },
  {
    "url": "css/chunk-2a6a872e.0284e4a3.css",
    "revision": "42969bfca1753b6eb71db453d6adbb76"
  },
  {
    "url": "css/chunk-3f2c1263.620de998.css",
    "revision": "cc946b7cf3e692c454cda1594cc6ce3f"
  },
  {
    "url": "css/chunk-42434995.bd7e31b2.css",
    "revision": "e720d3907ea4cdfc1e5b7fcef5349f57"
  },
  {
    "url": "css/chunk-54aa64aa.3b95ef52.css",
    "revision": "369b4dddb35d593719999b28b538f3b2"
  },
  {
    "url": "css/chunk-5727c553.ebf4e72f.css",
    "revision": "d43b4083acec5b89b4501e60edea5de6"
  },
  {
    "url": "css/chunk-5d742170.c2f9dde4.css",
    "revision": "5ab771b5954d3a44079dcf5dc3284f1e"
  },
  {
    "url": "css/chunk-6cbc69f8.6e6fec5e.css",
    "revision": "beea1f0fa2fd4a85421fa76315a3b289"
  },
  {
    "url": "css/chunk-78862c42.ee1e4899.css",
    "revision": "1504c478459b04b57cb07fbefafea31e"
  },
  {
    "url": "css/chunk-a531148e.ff0eb51d.css",
    "revision": "735ffdbb42bfdb7d2d9b90e1443e4acf"
  },
  {
    "url": "css/chunk-bd016da6.32d5ea84.css",
    "revision": "7202eac7d7134a2480ea625c7d0f06dd"
  },
  {
    "url": "css/chunk-ea7d34e8.0055261f.css",
    "revision": "f9c9403e9592cec7913f93ba0c9be9b1"
  },
  {
    "url": "css/chunk-fe099464.265325af.css",
    "revision": "03b813faf6a4f12d61a138a299fa1bcf"
  },
  {
    "url": "favicon.ico",
    "revision": "4a62b3a628976a943c2dd4622ceb5974"
  },
  {
    "url": "Home.html",
    "revision": "2696d4557aa3b4e6c55d453399ed123c"
  },
  {
    "url": "img/_A8A9782.216b0f1b.jpg",
    "revision": "216b0f1b58f67c40df4be80e07e0d7a4"
  },
  {
    "url": "img/_A8A9782.fc95e652.jpg",
    "revision": "fc95e652f42cdb9be79b781e39355bc1"
  },
  {
    "url": "img/_A8A9840.30bdb77c.jpg",
    "revision": "30bdb77c88643e9d241d2b50ad69c5e3"
  },
  {
    "url": "img/_A8A9840.581307f7.jpg",
    "revision": "581307f76bc3f66c726160489a5941df"
  },
  {
    "url": "img/_A8A99222.b3e59802.jpg",
    "revision": "b3e59802b0b916626f10667e6f90a9ad"
  },
  {
    "url": "img/01.3cda6e42.jpg",
    "revision": "3cda6e42937b7596fb74c2583297dc01"
  },
  {
    "url": "img/02.aa3f27ac.jpg",
    "revision": "aa3f27ac67f6ecb6b327bb50b47f0906"
  },
  {
    "url": "img/03.288b8013.jpg",
    "revision": "288b80136710f85f99050b284e42935d"
  },
  {
    "url": "img/1.95fbec11.jpg",
    "revision": "95fbec11795f8f867e82daf1cc8f81e8"
  },
  {
    "url": "img/1.a5c42e4c.jpg",
    "revision": "a5c42e4cf04233a9dd1e0593b59ee724"
  },
  {
    "url": "img/1.b16c9b9b.jpg",
    "revision": "b16c9b9b06964306dabc2a8c6c59746c"
  },
  {
    "url": "img/14.cdaead47.jpg",
    "revision": "cdaead47b8342e9963ef1cb227305cca"
  },
  {
    "url": "img/14.f1dbc9d5.jpg",
    "revision": "f1dbc9d534bb5e8eed1f1c2da8790ba3"
  },
  {
    "url": "img/16.4b9945f1.jpg",
    "revision": "4b9945f1346bc8835a41beb7a89cf84e"
  },
  {
    "url": "img/16.b913d833.jpg",
    "revision": "b913d83392e92ac083537fe556abbcef"
  },
  {
    "url": "img/19.77ca4541.jpg",
    "revision": "77ca45417e2348b349d11927ba82a026"
  },
  {
    "url": "img/19.a79643fe.jpg",
    "revision": "a79643fef3ec9a7313d15c522ee699ed"
  },
  {
    "url": "img/2.89814dba.jpg",
    "revision": "89814dba90462604d365c8a523844334"
  },
  {
    "url": "img/2.a96129d1.jpg",
    "revision": "a96129d1b6b81a09fc5abc4affe61627"
  },
  {
    "url": "img/20.3d21710c.jpg",
    "revision": "3d21710c613add7b90c4d50991235f80"
  },
  {
    "url": "img/20.41764a0b.jpg",
    "revision": "41764a0bf266019ca57ca6e8bd8e99e7"
  },
  {
    "url": "img/20.e9146ff9.jpg",
    "revision": "e9146ff928c74cdadb0f675f0c19be63"
  },
  {
    "url": "img/3.84e179c4.jpg",
    "revision": "84e179c4b9f5ac59a34d8ef87bcaee7b"
  },
  {
    "url": "img/3.f3251b35.jpg",
    "revision": "f3251b35482793371b6f4ec28f63a168"
  },
  {
    "url": "img/aedit-forAboutUs.337599f8.jpg",
    "revision": "337599f86566d5c39a9afb4d01fc55d2"
  },
  {
    "url": "img/ANK537_8803a.a5aba36d.jpg",
    "revision": "a5aba36dcfd5a22645ea2edf090b9768"
  },
  {
    "url": "img/ANK537_8814a.0c508c49.jpg",
    "revision": "0c508c4938e93845e0c29e48d964d722"
  },
  {
    "url": "img/ANK537_8820a.183b241a.jpg",
    "revision": "183b241a693cd7238053e5f743a27213"
  },
  {
    "url": "img/Balconyoptions-Model.95f79f4a.jpg",
    "revision": "95f79f4a00f11b314a0a9768d4ec98aa"
  },
  {
    "url": "img/bedit-forEvents.5001e8b8.jpg",
    "revision": "5001e8b8d9887e0492db114bbe771d14"
  },
  {
    "url": "img/bg-tag2.f61e9f09.jpg",
    "revision": "f61e9f09614f1cb4820f7f5eadb7fb9c"
  },
  {
    "url": "img/bg-tag4.c781f6ed.jpg",
    "revision": "c781f6ed4b903596f78d47bbd45fd1b5"
  },
  {
    "url": "img/collage1.8c472679.jpg",
    "revision": "8c4726790c9653e950f1f5992b257664"
  },
  {
    "url": "img/desktopcover01.d5b974e1.jpg",
    "revision": "d5b974e1d8f82b03059a1a9249fbb5fd"
  },
  {
    "url": "img/icons/android-icon-144x144.png",
    "revision": "25ada5f96d47bd54eb63d426ac1afc8d"
  },
  {
    "url": "img/icons/android-icon-192x192.png",
    "revision": "20f08af8f4f7ce3f6ce700dcec4fcaf2"
  },
  {
    "url": "img/icons/android-icon-36x36.png",
    "revision": "304891884f026d8f4bfd1f5fea4ddc7f"
  },
  {
    "url": "img/icons/android-icon-48x48.png",
    "revision": "348393c01da518cfcf7b41900be3beab"
  },
  {
    "url": "img/icons/android-icon-72x72.png",
    "revision": "16d1a28f4e8f9b42a4d199ac30b00350"
  },
  {
    "url": "img/icons/android-icon-96x96.png",
    "revision": "a3eaf916c4f6c50b6ade34686e836421"
  },
  {
    "url": "img/icons/apple-icon-114x114.png",
    "revision": "cf0808126029c609d3386772f838dfd3"
  },
  {
    "url": "img/icons/apple-icon-120x120.png",
    "revision": "3711e299aa7c979678eb30cce9d02af4"
  },
  {
    "url": "img/icons/apple-icon-144x144.png",
    "revision": "25ada5f96d47bd54eb63d426ac1afc8d"
  },
  {
    "url": "img/icons/apple-icon-152x152.png",
    "revision": "ab1e1a41a103767cc459982a3fd6fe9e"
  },
  {
    "url": "img/icons/apple-icon-180x180.png",
    "revision": "8b512b165f8a6b60bc8c18b3256e52e9"
  },
  {
    "url": "img/icons/apple-icon-57x57.png",
    "revision": "92af7c079f1a60817d0fe42032a383eb"
  },
  {
    "url": "img/icons/apple-icon-60x60.png",
    "revision": "153dd067b808b51b9977ac719d4c0ff5"
  },
  {
    "url": "img/icons/apple-icon-72x72.png",
    "revision": "16d1a28f4e8f9b42a4d199ac30b00350"
  },
  {
    "url": "img/icons/apple-icon-76x76.png",
    "revision": "186df065687cc11a19cae7218a539b70"
  },
  {
    "url": "img/icons/apple-icon-precomposed.png",
    "revision": "a562695c54550220fc8a23edf83c3491"
  },
  {
    "url": "img/icons/apple-icon.png",
    "revision": "a562695c54550220fc8a23edf83c3491"
  },
  {
    "url": "img/icons/favicon-16x16.png",
    "revision": "122ee303d70baa87c15f763e0db25bef"
  },
  {
    "url": "img/icons/favicon-32x32.png",
    "revision": "1948265a2c5bb02cb6b2491656d78c77"
  },
  {
    "url": "img/icons/favicon-96x96.png",
    "revision": "a3eaf916c4f6c50b6ade34686e836421"
  },
  {
    "url": "img/icons/favicon.ico",
    "revision": "9bc1a6593f4e26a66e41dd7e0a02d4bb"
  },
  {
    "url": "img/icons/ms-icon-144x144.png",
    "revision": "25ada5f96d47bd54eb63d426ac1afc8d"
  },
  {
    "url": "img/icons/ms-icon-150x150.png",
    "revision": "ced21eb07535e7b7c73748fdf7213403"
  },
  {
    "url": "img/icons/ms-icon-310x310.png",
    "revision": "17f14936de45b679ef7f6d91f548c455"
  },
  {
    "url": "img/icons/ms-icon-70x70.png",
    "revision": "eb329909250a976d0754a3109accda5a"
  },
  {
    "url": "img/IMG_0335_edit_bw.1b980d2a.jpg",
    "revision": "1b980d2ad39626e58a1f0e033791dc3c"
  },
  {
    "url": "img/Interiorlayout01.4c89983f.jpg",
    "revision": "4c89983fd768f36a50a53ec6e7e08c57"
  },
  {
    "url": "img/kedit-forServices.ed65a57d.jpg",
    "revision": "ed65a57dbf6f29514f982faa8cdb912d"
  },
  {
    "url": "img/LOGOforWebsite.ffe08742.jpg",
    "revision": "ffe08742ec1e2694a46b68dccad4e38e"
  },
  {
    "url": "img/oedit-forArt-Created.e4143836.jpg",
    "revision": "e41438360e9b95c5a3e99b40c6ce0347"
  },
  {
    "url": "img/Productpage2ndimagesquare.7664f0a0.jpg",
    "revision": "7664f0a0fc770658f998b8a64a27bc10"
  },
  {
    "url": "img/q-edit2.b4304428.jpg",
    "revision": "b430442808f20ededd349eb06091b05d"
  },
  {
    "url": "img/Slider01-small.05938381.jpg",
    "revision": "059383819ef3b7b17921f289a9ca368a"
  },
  {
    "url": "img/Slider01.242ad675.jpg",
    "revision": "242ad675dbf87b7f1d5ee2e4f67d4586"
  },
  {
    "url": "img/Slider02-small.67e2be9c.jpg",
    "revision": "67e2be9c91448b6965fc1391041fb286"
  },
  {
    "url": "img/Slider02.68189878.jpg",
    "revision": "68189878ebdf08251b4f8992aa72744d"
  },
  {
    "url": "img/Slider03-small.d3e82ed2.jpg",
    "revision": "d3e82ed28d24b74d592b8b67a0439566"
  },
  {
    "url": "img/Slider03.443fa643.jpg",
    "revision": "443fa6439175ea16865eb116667e4edd"
  },
  {
    "url": "img/u.9636ee97.jpg",
    "revision": "9636ee975ae0762bda56e372256a1132"
  },
  {
    "url": "img/uedit-forHomePage.5f8bf93c.jpg",
    "revision": "5f8bf93cd97f19499eabc17a5bd62698"
  },
  {
    "url": "img/v.8963c1e8.jpg",
    "revision": "8963c1e8ecc485bab30ac3b3cf1c407a"
  },
  {
    "url": "img/v.a54d8ad9.jpg",
    "revision": "a54d8ad9855e47c6c222f3b2797bb5c3"
  },
  {
    "url": "img/w.f71efd94.jpg",
    "revision": "f71efd94a3d52e93a1d716284c7e42e8"
  },
  {
    "url": "img/w.f9a72aa7.jpg",
    "revision": "f9a72aa732087e142d8a96ac5e071c6d"
  },
  {
    "url": "img/x.581b88c4.jpg",
    "revision": "581b88c4360acf46ca4819451bae89c0"
  },
  {
    "url": "img/x.75282afb.jpg",
    "revision": "75282afba87ecaeb8cfb4b04c2c466ef"
  },
  {
    "url": "img/xedit-forContact.ec642c4d.jpg",
    "revision": "ec642c4d3eb40b9a0460e07a2577b946"
  },
  {
    "url": "img/yedit-forArt-Curated.5db3a19b.jpg",
    "revision": "5db3a19bc124be777f21fcc2190f3e6c"
  },
  {
    "url": "index.html",
    "revision": "caf693fe832bb3d22e0d7e83e06db346"
  },
  {
    "url": "js/app~06837ae4.e1dee663.js",
    "revision": "6f26b54dfb22ef4a61d90f2db357354c"
  },
  {
    "url": "js/app~1c3a2c3f.17a9b8dc.js",
    "revision": "0f4d86460878a754931f9ba6657f7c63"
  },
  {
    "url": "js/app~87de5440.84c99b1f.js",
    "revision": "dee0d306fc061f9ecef0ab8c743f5e71"
  },
  {
    "url": "js/app~8e90613a.5d3526c9.js",
    "revision": "39e06018285a6b270948710f49eed53a"
  },
  {
    "url": "js/app~9c5b28f6.e5df217a.js",
    "revision": "5acdc75f505e0cb5755421510d241a1b"
  },
  {
    "url": "js/app~b429c638.0d34851f.js",
    "revision": "5604a0045eca77982ad70fa42b57dc1f"
  },
  {
    "url": "js/app~b5906859.86da234b.js",
    "revision": "0e3d653f41ca99003984c9bf4bc56fae"
  },
  {
    "url": "js/app~d0ae3f07.97713a13.js",
    "revision": "af2c1afddeb4f2aa71c969bd9a7f7bc8"
  },
  {
    "url": "js/app~d2305125.624396c0.js",
    "revision": "a33d58e8e03bce55cf8f52071abe2bce"
  },
  {
    "url": "js/app~d3e9661a.f9fe4a66.js",
    "revision": "da88eede6ad17ce143b22f36a232f466"
  },
  {
    "url": "js/app~d63aa588.2a4c153c.js",
    "revision": "2aee1e9680ff2d1cabb484861108adfa"
  },
  {
    "url": "js/app~db300d2f.d188d9b0.js",
    "revision": "fd3e31ffa8b943f05838b8cf57947c67"
  },
  {
    "url": "js/chunk-0049183f.4f45955c.js",
    "revision": "3e4b4fed2bc3988c05de149c7b516517"
  },
  {
    "url": "js/chunk-073406ab.cfb2c16d.js",
    "revision": "06f46e808e1dd9794ac79be7fb89835a"
  },
  {
    "url": "js/chunk-21b0fb35.80a4ec3c.js",
    "revision": "cecc6bcd1432a925473e3630774a6d71"
  },
  {
    "url": "js/chunk-233c4dac.3f66f329.js",
    "revision": "6ef90d5b80f0be3a1e3ae85f303adb65"
  },
  {
    "url": "js/chunk-23d2ae5c.1ee443bc.js",
    "revision": "1868796ba602f3008f4857a7be355b62"
  },
  {
    "url": "js/chunk-2815d762.8bff519d.js",
    "revision": "f3099202ce7872dacf5538faf70081ef"
  },
  {
    "url": "js/chunk-2a6a872e.7354f7b4.js",
    "revision": "3857031e4ccbe3359af3ed825c618287"
  },
  {
    "url": "js/chunk-2d0aa5b8.253a8884.js",
    "revision": "2e3c6c362d2ce68aa010a2367d70dde4"
  },
  {
    "url": "js/chunk-2d0b5f77.1b624b5a.js",
    "revision": "5ca03d819a8ac60aef42781ccc6bc75b"
  },
  {
    "url": "js/chunk-2d230e57.beecf60e.js",
    "revision": "009d4ae5cf2a75207b2f9b4867685f12"
  },
  {
    "url": "js/chunk-2d6ecf57.8792e910.js",
    "revision": "693bc9910b3a8359ac330d3a7457c1d9"
  },
  {
    "url": "js/chunk-3f2c1263.be55426d.js",
    "revision": "b55c0ad67613c00f56b481445ad04e45"
  },
  {
    "url": "js/chunk-42434995.fa66e550.js",
    "revision": "183fb5dbd1aa451b5b014127dd4b9b4d"
  },
  {
    "url": "js/chunk-54aa64aa.b69fb6b7.js",
    "revision": "f173b19fa22ef830dd62ad1bd443c241"
  },
  {
    "url": "js/chunk-5727c553.473d2c43.js",
    "revision": "8f8becf120c5aa4733c0f88e4de01f9e"
  },
  {
    "url": "js/chunk-5d742170.ff17f35c.js",
    "revision": "2f9a80c4a52feec6f2f02e9ccc9fe5b3"
  },
  {
    "url": "js/chunk-6cbc69f8.196612b5.js",
    "revision": "4c57ae9cba0b6ce0da505374e5a7a25c"
  },
  {
    "url": "js/chunk-78862c42.9ff67df4.js",
    "revision": "73c06aa2d759caaafa62a744154fc42b"
  },
  {
    "url": "js/chunk-a531148e.ed7a650b.js",
    "revision": "5e4f74112172a790747d2cf0a968ebdc"
  },
  {
    "url": "js/chunk-bd016da6.5be9866a.js",
    "revision": "9e05051acc2148f1086b498783c9a2b4"
  },
  {
    "url": "js/chunk-ea7d34e8.761e4db6.js",
    "revision": "f26bf9eb5bcfcdec576a8c457665597f"
  },
  {
    "url": "js/chunk-fe099464.2fc4759b.js",
    "revision": "1f5c667a9a3bf05d67923ef5dfda2990"
  },
  {
    "url": "robots.txt",
    "revision": "b6216d61c03e6ce0c9aea6ca7808f7ca"
  },
  {
    "url": "services.html",
    "revision": "fb7a0eafeabb9a8afca1284d64f9be9f"
  },
  {
    "url": "store.html",
    "revision": "4102c3301bb29a312d21f641e19fbd14"
  },
  {
    "url": "sw2.js",
    "revision": "0342ed5fdb4fad74ed80f6f4f0937837"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
