/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/br_cs-optimizations/404.html","8483487e5b8462268ba74f7305dc240c"],["/br_cs-optimizations/css/app.css","32bac5fd582dc2fdb1185118ae327529"],["/br_cs-optimizations/css/digits.css","9afc65cccb8dd4e6aa46a67a26eefe1f"],["/br_cs-optimizations/css/modals.css","abd2c87eeaae3ff15dbba3ba164c0687"],["/br_cs-optimizations/css/notification-messages.css","d9e3e192f9a1f2ca1202e4ee36b4c7c8"],["/br_cs-optimizations/css/reports.css","c367662ce5f8dac40a43b790d9f4efcd"],["/br_cs-optimizations/css/screen-small.css","9a212cdb8eff1957817de608257007b5"],["/br_cs-optimizations/css/smartcharts.css","7abed6df084ad8422da0067ff98caa8c"],["/br_cs-optimizations/css/work-in-progress.css","c3aa4d73ebf2bac685aa45a097c34309"],["/br_cs-optimizations/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_cs-optimizations/index.html","0e205931af15ff6e012dcf58d87aadfa"],["/br_cs-optimizations/js/0.3bfbc88f331357127090.js","997c50c5ecfc791f934b288bc451e414"],["/br_cs-optimizations/js/1.3bfbc88f331357127090.js","0314e1e8729259a2c56f62748e4d6a75"],["/br_cs-optimizations/js/10.3bfbc88f331357127090.js","e99c54d25b603337258f1bc664d006a4"],["/br_cs-optimizations/js/11.3bfbc88f331357127090.js","a98a1c7c35afbe71ec0ca1cf7692e262"],["/br_cs-optimizations/js/12.3bfbc88f331357127090.js","394b32a6926db5b3f54ce3f41984c525"],["/br_cs-optimizations/js/13.3bfbc88f331357127090.js","2592a08ee91a64bf2493271593d353b0"],["/br_cs-optimizations/js/14.3bfbc88f331357127090.js","dbcfe4f481601f15bab9a10e8508bbe9"],["/br_cs-optimizations/js/15.3bfbc88f331357127090.js","63920a17fef3c0605901ab385aaa05f9"],["/br_cs-optimizations/js/16.3bfbc88f331357127090.js","bb68dccf1eeb3b0491b6579f58e1f688"],["/br_cs-optimizations/js/17.3bfbc88f331357127090.js","c12580d54905f1d8d1c31e73899f21c2"],["/br_cs-optimizations/js/18.3bfbc88f331357127090.js","ca34990d803b5ac2c91c997cc96c8f84"],["/br_cs-optimizations/js/19.3bfbc88f331357127090.js","3d973c21b3d3bbc38d597df78332b412"],["/br_cs-optimizations/js/2.3bfbc88f331357127090.js","99d254043e13f953ca5004718192e834"],["/br_cs-optimizations/js/20.3bfbc88f331357127090.js","8240e6564928d479039a24a0761d55a6"],["/br_cs-optimizations/js/21.3bfbc88f331357127090.js","e74ea90839cab51563fba0ef277d40f9"],["/br_cs-optimizations/js/22.3bfbc88f331357127090.js","bcb86926dff6b638474e62538cf7b16f"],["/br_cs-optimizations/js/23.3bfbc88f331357127090.js","ee4fce0d3a6254bc31efc18f694da41d"],["/br_cs-optimizations/js/24.3bfbc88f331357127090.js","82404456e766285ff2c95f44967974ff"],["/br_cs-optimizations/js/25.3bfbc88f331357127090.js","5fe83b6d38cf094340a22d4e7909c3de"],["/br_cs-optimizations/js/26.3bfbc88f331357127090.js","a67e315e6448602dee09c7c4625345da"],["/br_cs-optimizations/js/27.3bfbc88f331357127090.js","806eb50e445bd944b1564b19ebd183c0"],["/br_cs-optimizations/js/28.3bfbc88f331357127090.js","5fb66c9832a9000d4520436a4fd9fa09"],["/br_cs-optimizations/js/29.3bfbc88f331357127090.js","759125648a69be1b694a8478be0ab85e"],["/br_cs-optimizations/js/3.3bfbc88f331357127090.js","e762986f9dd49c01880e1e541f4e748f"],["/br_cs-optimizations/js/30.3bfbc88f331357127090.js","79dae08b518a5dd21bcbb9ca266e9954"],["/br_cs-optimizations/js/31.3bfbc88f331357127090.js","a6e20a2f5f875973908891667a10c9c5"],["/br_cs-optimizations/js/32.3bfbc88f331357127090.js","01cf796853dd734febed91ec9fa3e613"],["/br_cs-optimizations/js/33.3bfbc88f331357127090.js","33ceef87cbddfc3a812ae041c935e115"],["/br_cs-optimizations/js/34.3bfbc88f331357127090.js","15b8d6a262d76e38e9180a99e8e50f9c"],["/br_cs-optimizations/js/35.3bfbc88f331357127090.js","d0e593f12f4a9a3c92df1f23c876bf60"],["/br_cs-optimizations/js/36.3bfbc88f331357127090.js","b9dddaeb746102a892ddf93079f05b69"],["/br_cs-optimizations/js/37.3bfbc88f331357127090.js","bc734e0bde5089faff3670a81fa48469"],["/br_cs-optimizations/js/38.3bfbc88f331357127090.js","dfe226fe54da250da0a85653c9cd3570"],["/br_cs-optimizations/js/39.3bfbc88f331357127090.js","477a3450ff47c12880f6f078db77f104"],["/br_cs-optimizations/js/4.3bfbc88f331357127090.js","00fd805e2506af8b27bdd8084ffe89fb"],["/br_cs-optimizations/js/40.3bfbc88f331357127090.js","4d74f4c1f16c5ca2a2d6e0548f362eeb"],["/br_cs-optimizations/js/404.3bfbc88f331357127090.js","d9bbc392f1ee6f38404d9122e2758171"],["/br_cs-optimizations/js/41.3bfbc88f331357127090.js","9d288c45af0bbc3d4073d8c5ea4c5e60"],["/br_cs-optimizations/js/42.3bfbc88f331357127090.js","bb2cc7043ff0ab79d1efc9bd9b1d83a7"],["/br_cs-optimizations/js/43.3bfbc88f331357127090.js","c3bfff374bca77d4509af02c229be5d5"],["/br_cs-optimizations/js/44.3bfbc88f331357127090.js","9762af288e9cb3ca9b5d702aef82c829"],["/br_cs-optimizations/js/45.3bfbc88f331357127090.js","c4d7c0db5afa4b39cd4c14e7824480f8"],["/br_cs-optimizations/js/46.3bfbc88f331357127090.js","d657395059482998585c9658fdf76be2"],["/br_cs-optimizations/js/47.3bfbc88f331357127090.js","2395ba4827e2c7fdcc354c3f52105396"],["/br_cs-optimizations/js/48.3bfbc88f331357127090.js","efad8b96d36853df966a391a52d64054"],["/br_cs-optimizations/js/49.3bfbc88f331357127090.js","1758767ee0aba8b686569d6554af6af6"],["/br_cs-optimizations/js/5.3bfbc88f331357127090.js","4409091d1c8daae8cee75f7fd83cc8d5"],["/br_cs-optimizations/js/50.3bfbc88f331357127090.js","55d094375911cdda4c57cf5e9099ffb1"],["/br_cs-optimizations/js/51.3bfbc88f331357127090.js","82f73b22b2ba7f4b055dad8d1fcf78df"],["/br_cs-optimizations/js/52.3bfbc88f331357127090.js","d9923b3234820ca531b55064b19f0f00"],["/br_cs-optimizations/js/53.3bfbc88f331357127090.js","49e39fd78695b3a13d588d2a7e3f4063"],["/br_cs-optimizations/js/54.3bfbc88f331357127090.js","adcbcb5dd5a8b42fd43d0f850172f5fa"],["/br_cs-optimizations/js/55.3bfbc88f331357127090.js","848872b39c86996c527a10c35577b077"],["/br_cs-optimizations/js/56.3bfbc88f331357127090.js","b3ecbb1f14fbc103965ec97e2f7b8b84"],["/br_cs-optimizations/js/57.3bfbc88f331357127090.js","30beda0c472bb433c1146b5240175adf"],["/br_cs-optimizations/js/58.3bfbc88f331357127090.js","88666ec6486b6b93bcaebbed73a6de8b"],["/br_cs-optimizations/js/59.3bfbc88f331357127090.js","e1f71195139dd9b0cf2a5d1795aa26c9"],["/br_cs-optimizations/js/6.3bfbc88f331357127090.js","8643316230202c732fadfa0e9a1137b0"],["/br_cs-optimizations/js/60.3bfbc88f331357127090.js","1a473a89e06bbb90ef2631f531845b20"],["/br_cs-optimizations/js/61.3bfbc88f331357127090.js","feb788b996046aad8ad73a6b41cf37e4"],["/br_cs-optimizations/js/62.3bfbc88f331357127090.js","669bc27cc52612ba8e676d122eb31612"],["/br_cs-optimizations/js/63.3bfbc88f331357127090.js","a1a34e39366a9157f29c1a67dc433132"],["/br_cs-optimizations/js/64.3bfbc88f331357127090.js","4b258940bf80139d91e7f638601fa455"],["/br_cs-optimizations/js/65.3bfbc88f331357127090.js","9853e198fa5975eb7c820b2bb8799e30"],["/br_cs-optimizations/js/66.3bfbc88f331357127090.js","5a8f6e9a0d80582b7789788a2574f454"],["/br_cs-optimizations/js/67.3bfbc88f331357127090.js","f8014233859ea325bf76383fc340b1dc"],["/br_cs-optimizations/js/68.3bfbc88f331357127090.js","4d2ca0a9d2799df53f59c8ea9ded6485"],["/br_cs-optimizations/js/69.3bfbc88f331357127090.js","809c5773c40156ce2932391d51bc6394"],["/br_cs-optimizations/js/7.3bfbc88f331357127090.js","535bcca59799b2b005ab5625caa8762a"],["/br_cs-optimizations/js/8.3bfbc88f331357127090.js","342a6fc2b83557fb28e829033a841e22"],["/br_cs-optimizations/js/9.3bfbc88f331357127090.js","3c067a7f91b59f961a8f496bdc9cb21b"],["/br_cs-optimizations/js/DenialOfServiceModal.3bfbc88f331357127090.js","8406d2cb01d72f9df0fb64e3aa23e23c"],["/br_cs-optimizations/js/MarketUnavailableModal.3bfbc88f331357127090.js","9996d7d8880aaafe16073fe4cde95092"],["/br_cs-optimizations/js/ServicesErrorModal.3bfbc88f331357127090.js","e2a154b268282bf72e7aae8d695fa304"],["/br_cs-optimizations/js/UnsupportedContractModal.3bfbc88f331357127090.js","dfe8a1d3591368a8decbeaac0e687614"],["/br_cs-optimizations/js/account-info.3bfbc88f331357127090.js","e66aa4c6223b77b25f37c5a46cefaeff"],["/br_cs-optimizations/js/contract.3bfbc88f331357127090.js","c29acc88ffa0e38876939b6053693942"],["/br_cs-optimizations/js/default~open_position~1833eefb.3bfbc88f331357127090.js","27da4c83d9f78cd69c713876f060077e"],["/br_cs-optimizations/js/digits.3bfbc88f331357127090.js","ba3b9399c463bdd544e8f8b3adb6633f"],["/br_cs-optimizations/js/info-box.3bfbc88f331357127090.js","4b0f8100ffe940d308fc016a87e0c33a"],["/br_cs-optimizations/js/main.3bfbc88f331357127090.js","3eab20c34947cdeb5e82fc16b96ab6ad"],["/br_cs-optimizations/js/modals.3bfbc88f331357127090.js","e024cf0d119c9d6a35cf500b767d5664"],["/br_cs-optimizations/js/notification-messages.3bfbc88f331357127090.js","72cce14ecbd0c15773796ac37ee811f2"],["/br_cs-optimizations/js/open_positions.3bfbc88f331357127090.js","5e6607cf220d449b97a8190d7be583b2"],["/br_cs-optimizations/js/profit_table.3bfbc88f331357127090.js","555825a42da1a063384bfb288c23279f"],["/br_cs-optimizations/js/push-notification.3bfbc88f331357127090.js","75aa4ce70a59ef50fa34b84d8481b465"],["/br_cs-optimizations/js/reports.3bfbc88f331357127090.js","cb0731ee1479c7731a83dee6ae5c1824"],["/br_cs-optimizations/js/screen-small.3bfbc88f331357127090.js","750c0b7a9d009a4e38b92e4479a01179"],["/br_cs-optimizations/js/settings-chart.3bfbc88f331357127090.js","f35d2f16d5492f17e29d342bc079df40"],["/br_cs-optimizations/js/settings-language.3bfbc88f331357127090.js","9a02d80669f1a8f7c5366748915e13b6"],["/br_cs-optimizations/js/settings-theme.3bfbc88f331357127090.js","540b8d0ef44b3d793117e1f7d87302c2"],["/br_cs-optimizations/js/smart_chart.3bfbc88f331357127090.js","287ac263552c82ba94f0a5c728395fb1"],["/br_cs-optimizations/js/smartcharts/chartiq-a0bb2d.smartcharts.js","2859b5a06eb9379a6f1065b51efa81cc"],["/br_cs-optimizations/js/smartcharts/de-po-e522d0.smartcharts.js","7f153fed6e754e5a79ba509ccf85a4d8"],["/br_cs-optimizations/js/smartcharts/es-po-61430e.smartcharts.js","905b4e1ee7aac1c8b66133646b36954e"],["/br_cs-optimizations/js/smartcharts/fr-po-1555a4.smartcharts.js","7cc9c589cadea98aa382c136476627bd"],["/br_cs-optimizations/js/smartcharts/html2canvas-c78ff1.smartcharts.js","0ae4bc6f8fe8997549df280580c85bb8"],["/br_cs-optimizations/js/smartcharts/id-po-3cdbc8.smartcharts.js","b91c4ac925120746c6544fc17d073c31"],["/br_cs-optimizations/js/smartcharts/it-po-edf79d.smartcharts.js","2aad8d954ae4ae0f031459903d8782dc"],["/br_cs-optimizations/js/smartcharts/nl-po-6d1e52.smartcharts.js","60827db65225ff31f00b53d263f4edfe"],["/br_cs-optimizations/js/smartcharts/pl-po-c7f985.smartcharts.js","ca2d20798ea5ef8d8c32b81a54fd703b"],["/br_cs-optimizations/js/smartcharts/pt-po-aaec6f.smartcharts.js","783407adcfa8b46016d2dc8b2be39a66"],["/br_cs-optimizations/js/smartcharts/ru-po-9f0c5d.smartcharts.js","18edfe06c994d4cde84cd293d504dd3e"],["/br_cs-optimizations/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/br_cs-optimizations/js/smartcharts/th-po-650f93.smartcharts.js","c784d0a255058385b73b59e504c81b33"],["/br_cs-optimizations/js/smartcharts/vendors~resize-observer-polyfill-f202e8.smartcharts.js","b52a4ce9f52de8dd42942dc15164c867"],["/br_cs-optimizations/js/smartcharts/vi-po-4c86cc.smartcharts.js","ee995e5408a03f53f5c880f6a251ce46"],["/br_cs-optimizations/js/smartcharts/zh_cn-po-ba46f0.smartcharts.js","9cda59ab320fd2969f3905d1f6e5e80c"],["/br_cs-optimizations/js/smartcharts/zh_tw-po-b78185.smartcharts.js","5a312bed6c388379da77ca71554631f8"],["/br_cs-optimizations/js/statement.3bfbc88f331357127090.js","9e18b1519a2f5543ade223be2ca74a24"],["/br_cs-optimizations/js/toggle-menu-drawer.3bfbc88f331357127090.js","85e6ea61ae7efcec2deab25ec8f56a0c"],["/br_cs-optimizations/js/two-month-picker.3bfbc88f331357127090.js","d7b50f2d4864439b0c291e689ce15895"],["/br_cs-optimizations/js/vendors~main.3bfbc88f331357127090.js","856497062e692d37fdd32f737618f3ed"],["/br_cs-optimizations/js/vendors~open_position~7c650be5.3bfbc88f331357127090.js","8838d065531f06bb4710befb13bea375"],["/br_cs-optimizations/js/vendors~smart_chart.3bfbc88f331357127090.js","bbc74d1553a14de6d0b9f98777023de5"],["/br_cs-optimizations/js/work-in-progress.3bfbc88f331357127090.js","b762efdba930cf584a6e1814d1d7d3bc"],["/br_cs-optimizations/manifest.json","7f85496eb368511e5797adc7c85b3997"],["/br_cs-optimizations/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_cs-optimizations/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_cs-optimizations/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_cs-optimizations/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_cs-optimizations/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_cs-optimizations/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_cs-optimizations/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_cs-optimizations/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_cs-optimizations/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/br_cs-optimizations/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/br_cs-optimizations/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/br_cs-optimizations/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/br_cs-optimizations/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/br_cs-optimizations/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/br_cs-optimizations/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/br_cs-optimizations/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/br_cs-optimizations/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/br_cs-optimizations/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/br_cs-optimizations/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/br_cs-optimizations/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/br_cs-optimizations/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/br_cs-optimizations/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/br_cs-optimizations/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_cs-optimizations/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_cs-optimizations/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
var cacheName = 'sw-precache-v3-app-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/br_cs-optimizations/';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







