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
        //self.skipWaiting();
    }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [{
        "url": "app.html",
        "revision": "1454ad9e1fa43b6bfcc896c8b0049a68"
    },
    {
        "url": "css/about.29f48e54.css",
        "revision": "481c2886e2165948ea3417656ec13a1c"
    },
    {
        "url": "css/app.9981ee18.css",
        "revision": "91f64c9f4d7c6594aa7aab43a620f221"
    },
    {
        "url": "css/chunk-vendors.63e3ad7f.css",
        "revision": "b617e8fc11e0d499456e35148cb1c4c9"
    },
    {
        "url": "Design.html",
        "revision": "67de4ec57ed9b8053c99e78ec888fe8e"
    },
    {
        "url": "Home.html",
        "revision": "6a95c29559348efe0a65f10cca204bec"
    },
    {
        "url": "img/_A8A9782.d489aeab.jpg",
        "revision": "d489aeaba3e717099f739e45451cd721"
    },
    {
        "url": "img/_A8A9840.912b3c6c.jpg",
        "revision": "912b3c6c6d399df5460e428312e8c533"
    },
    {
        "url": "img/_A8A9922.fd8fd5c3.jpg",
        "revision": "fd8fd5c342d41997329e47931157794f"
    },
    {
        "url": "img/01.acce7470.jpg",
        "revision": "acce7470b52b5628e15b3cd2d77c2ba9"
    },
    {
        "url": "img/02.81e8acb4.jpg",
        "revision": "81e8acb432d90c07ab1dfc0382be0af8"
    },
    {
        "url": "img/03.376cefa9.jpg",
        "revision": "376cefa9e435a4365e887509dd965bd6"
    },
    {
        "url": "img/1.0901c79e.jpg",
        "revision": "0901c79e33620c46768e49b1a6e96e5c"
    },
    {
        "url": "img/1.95fbec11.jpg",
        "revision": "95fbec11795f8f867e82daf1cc8f81e8"
    },
    {
        "url": "img/14.985c658f.jpg",
        "revision": "985c658f9a572e611d685159cfa6235f"
    },
    {
        "url": "img/16.157e191f.jpg",
        "revision": "157e191f87967467f033711f3d99490d"
    },
    {
        "url": "img/19.a722ba97.jpg",
        "revision": "a722ba9798c9f118a001b2c2cfa1e43d"
    },
    {
        "url": "img/2.04a6ee12.jpg",
        "revision": "04a6ee12ece29634f1f145e822703d28"
    },
    {
        "url": "img/2.a933f099.jpg",
        "revision": "a933f0991dd595d89a2020d7236d92e5"
    },
    {
        "url": "img/20.e9146ff9.jpg",
        "revision": "e9146ff928c74cdadb0f675f0c19be63"
    },
    {
        "url": "img/3.9c1d9e90.jpg",
        "revision": "9c1d9e90d17615e60d812109bc4c4f13"
    },
    {
        "url": "img/3.9fe1a366.jpg",
        "revision": "9fe1a3662d46550696780060487c5f1c"
    },
    {
        "url": "img/a edit - for About Us.11173a97.jpg",
        "revision": "11173a977b381a398125e5352ea7c6c6"
    },
    {
        "url": "img/ANK537_8803a.39856c40.jpg",
        "revision": "39856c4014fbe7d73f09edfaaa5a8e5b"
    },
    {
        "url": "img/ANK537_8814a.0f715ec5.jpg",
        "revision": "0f715ec5a977592a3d7b266a533efba8"
    },
    {
        "url": "img/ANK537_8820a.6e795315.jpg",
        "revision": "6e795315359ea70a097e5506087be572"
    },
    {
        "url": "img/b edit - for Events.6e486167.jpg",
        "revision": "6e486167ea30b9cb4389215008f1eb69"
    },
    {
        "url": "img/Balcony options-Model.ff1527d8.jpg",
        "revision": "ff1527d881e6431690ce1bbf15b1b1de"
    },
    {
        "url": "img/bg-tag4.441b8128.jpg",
        "revision": "441b8128a9470c588d7da89251045589"
    },
    {
        "url": "img/checkmark.779b9dc3.gif",
        "revision": "779b9dc3928c2dbc304bcf6702bef6df"
    },
    {
        "url": "img/collage1.a69f12d5.jpg",
        "revision": "a69f12d5ab2715140646c4a7136ee4a0"
    },
    {
        "url": "img/desktop cover01.e921d7b4.jpg",
        "revision": "e921d7b4e0469de82947168e6dffc0e3"
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
        "url": "img/icons/browserconfig.xml",
        "revision": "653d077300a12f09a69caeea7a8947f8"
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
        "url": "img/icons/manifest.json",
        "revision": "b58fcfa7628c9205cb11a1b2c3e8f99a"
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
        "url": "img/IMG_0335_edit_bw.66addee4.jpg",
        "revision": "66addee428f058ceda11769449cdab6e"
    },
    {
        "url": "img/Interior layout 01.74432784.jpg",
        "revision": "7443278448133384a3f143f45ed6131a"
    },
    {
        "url": "img/k edit - for Services.87ff34fd.jpg",
        "revision": "87ff34fd21221f9b4a93d64245c668fa"
    },
    {
        "url": "img/l-edit.b81e0e40.jpg",
        "revision": "b81e0e40bdb8418eb0b05c673adda794"
    },
    {
        "url": "img/LOGO for Website.0b32e669.png",
        "revision": "0b32e669a503580c10df15507e88fbb4"
    },
    {
        "url": "img/logo1.149c7602.jpg",
        "revision": "149c76025a46889e0b5d162dbce8ab87"
    },
    {
        "url": "img/o edit - for Art - Created.50778a17.jpg",
        "revision": "50778a179b55ec625801366c702a1f72"
    },
    {
        "url": "img/Product page 2nd image square.37a574b6.jpg",
        "revision": "37a574b6b1a76482a092002108a4233d"
    },
    {
        "url": "img/q-edit2.c30a2bc1.jpg",
        "revision": "c30a2bc1c9caa3251251a0545d6b7e01"
    },
    {
        "url": "img/Slider 01.0977cb50.jpg",
        "revision": "0977cb50ce003ad865c38d8f8fee7f10"
    },
    {
        "url": "img/Slider 02-small-1.2765751f.jpg",
        "revision": "2765751f078425a8a87a4ff9c3ceeaba"
    },
    {
        "url": "img/Slider 02.a760dece.jpg",
        "revision": "a760deced2b211c394cbc8c2d803f20a"
    },
    {
        "url": "img/Slider 03-small.f75697fe.jpg",
        "revision": "f75697fe279ece6edab1d0e7366e451e"
    },
    {
        "url": "img/Slider 03.6ebafe0c.jpg",
        "revision": "6ebafe0c4e0399490e3ff1df6521515d"
    },
    {
        "url": "img/Slider01-small.69d26d18.jpg",
        "revision": "69d26d18ac412fc4b9ae4c6330b9b3e3"
    },
    {
        "url": "img/u.7d17aeb4.jpg",
        "revision": "7d17aeb4bbfaa15211e32ee51670ee72"
    },
    {
        "url": "img/v.f7651270.jpg",
        "revision": "f7651270d1e92d8b231ae5e9adad1efe"
    },
    {
        "url": "img/w.58c18653.jpg",
        "revision": "58c1865364de14335dc0b0a2ead5eeab"
    },
    {
        "url": "img/x edit - for Contact.2d47f1ae.jpg",
        "revision": "2d47f1ae73fd792f245cefecef013783"
    },
    {
        "url": "img/x.7721dff2.jpg",
        "revision": "7721dff23633234ca65f542c53d1bb65"
    },
    {
        "url": "img/y edit - for Art - Curated.0cd6dac1.jpg",
        "revision": "0cd6dac1619b75ea73ce279726548709"
    },
    {
        "url": "index.html",
        "revision": "f19c6a72acd85b39569781f0dd292dad"
    },
    {
        "url": "js/about.9cab05dd.js",
        "revision": "293d29db109b01bc77218124dc96cf6f"
    },
    {
        "url": "js/app.ea83e9db.js",
        "revision": "ac734d1b3bafe0f08a750721c314c90f"
    },
    {
        "url": "js/chunk-vendors.913441c6.js",
        "revision": "621ed4a773a65023cb234612e2f57af7"
    },
    {
        "url": "manifest.json",
        "revision": "33861ffa4dae776366818def4e1c4211"
    },
    {
        "url": "robots.txt",
        "revision": "b6216d61c03e6ce0c9aea6ca7808f7ca"
    },
    {
        "url": "services.html",
        "revision": "ab5603614b22fb2945f0946023e3ae81"
    },
    {
        "url": "store.html",
        "revision": "afdfc42b8f1b5fe24b343b69aec8f8b3"
    },
    {
        "url": "sw.js",
        "revision": "ac6eb44ba3bbf2708d17cef0a265743d"
    }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});