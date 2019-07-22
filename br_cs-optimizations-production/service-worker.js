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

var precacheConfig = [["/br_cs-optimizations-production/404.html","8483487e5b8462268ba74f7305dc240c"],["/br_cs-optimizations-production/css/app.css","dfd89ec6641d78e479730decd2e20ebb"],["/br_cs-optimizations-production/css/digits.css","9afc65cccb8dd4e6aa46a67a26eefe1f"],["/br_cs-optimizations-production/css/modals.css","abd2c87eeaae3ff15dbba3ba164c0687"],["/br_cs-optimizations-production/css/notification-messages.css","d9e3e192f9a1f2ca1202e4ee36b4c7c8"],["/br_cs-optimizations-production/css/reports.css","c367662ce5f8dac40a43b790d9f4efcd"],["/br_cs-optimizations-production/css/screen-small.css","9a212cdb8eff1957817de608257007b5"],["/br_cs-optimizations-production/css/smartcharts.css","7abed6df084ad8422da0067ff98caa8c"],["/br_cs-optimizations-production/css/work-in-progress.css","c3aa4d73ebf2bac685aa45a097c34309"],["/br_cs-optimizations-production/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_cs-optimizations-production/index.html","ce7ee8b0b91142ab156d2bde413dcfa8"],["/br_cs-optimizations-production/js/0.055ba1da5198c4d00fa3.js","ffc4c205537d59518b0cbbdb4ef2c473"],["/br_cs-optimizations-production/js/1.055ba1da5198c4d00fa3.js","7e92f7feb8cc3c29c56b97075115552a"],["/br_cs-optimizations-production/js/10.055ba1da5198c4d00fa3.js","3c752f267483deaa794960d51638c03c"],["/br_cs-optimizations-production/js/11.055ba1da5198c4d00fa3.js","e80c641c67cc2e5f689d54ae12c7ef1f"],["/br_cs-optimizations-production/js/12.055ba1da5198c4d00fa3.js","7f3e79305e51e986d97332d836ac6e92"],["/br_cs-optimizations-production/js/13.055ba1da5198c4d00fa3.js","eea1b98d45ebaeb8152c28ec122c3df3"],["/br_cs-optimizations-production/js/14.055ba1da5198c4d00fa3.js","3bcd65539ea747b9185cacdc5656ae30"],["/br_cs-optimizations-production/js/15.055ba1da5198c4d00fa3.js","23e57050513dcf909fa382e1712c6ed3"],["/br_cs-optimizations-production/js/16.055ba1da5198c4d00fa3.js","18ba44afc0b19c13782db5da4d4eda36"],["/br_cs-optimizations-production/js/17.055ba1da5198c4d00fa3.js","9ad9cf8c153c1d1314990a9eae6af318"],["/br_cs-optimizations-production/js/18.055ba1da5198c4d00fa3.js","75309919a3d2e3ec5cfaea3b0c6ea27a"],["/br_cs-optimizations-production/js/19.055ba1da5198c4d00fa3.js","094dcd6090442b7ccd66a71e909c1e3e"],["/br_cs-optimizations-production/js/2.055ba1da5198c4d00fa3.js","784cd62603dfbac3784438113a167486"],["/br_cs-optimizations-production/js/20.055ba1da5198c4d00fa3.js","05abe3f8724054f7fd30ff0140019058"],["/br_cs-optimizations-production/js/21.055ba1da5198c4d00fa3.js","655a0957031031422b29ef2357050a5d"],["/br_cs-optimizations-production/js/22.055ba1da5198c4d00fa3.js","f0f2037a070637ae6e51d46b1652446b"],["/br_cs-optimizations-production/js/23.055ba1da5198c4d00fa3.js","93ef1be77fc3fc591c491322f96d6705"],["/br_cs-optimizations-production/js/24.055ba1da5198c4d00fa3.js","0ce5c51d815217b0a9f7841837444621"],["/br_cs-optimizations-production/js/25.055ba1da5198c4d00fa3.js","6f64e1940104e9ea34f3b812a27fedaa"],["/br_cs-optimizations-production/js/26.055ba1da5198c4d00fa3.js","53afca2a83728130a8a84285edc3b4a5"],["/br_cs-optimizations-production/js/27.055ba1da5198c4d00fa3.js","f216d60532e97679d02a9f926a4293ad"],["/br_cs-optimizations-production/js/28.055ba1da5198c4d00fa3.js","bd6a496bc51973c4211fd56092a537be"],["/br_cs-optimizations-production/js/29.055ba1da5198c4d00fa3.js","430c3b0df446b8cd9ace5d9345e86b29"],["/br_cs-optimizations-production/js/3.055ba1da5198c4d00fa3.js","62fb2daa1876fe2162d26ba93e0ad738"],["/br_cs-optimizations-production/js/30.055ba1da5198c4d00fa3.js","a09980d0b75f659c70908de416c43285"],["/br_cs-optimizations-production/js/31.055ba1da5198c4d00fa3.js","4bf124972848d9dbb064c395096c32a5"],["/br_cs-optimizations-production/js/32.055ba1da5198c4d00fa3.js","37598d74467d8bfa198fb421c657c0a7"],["/br_cs-optimizations-production/js/33.055ba1da5198c4d00fa3.js","edee77eb9be42ca2c906ee1795b9f172"],["/br_cs-optimizations-production/js/34.055ba1da5198c4d00fa3.js","55eb9f4713a6f6c9124815cce1ea2225"],["/br_cs-optimizations-production/js/35.055ba1da5198c4d00fa3.js","58ee85451bf62cf071596b1efeffd90b"],["/br_cs-optimizations-production/js/36.055ba1da5198c4d00fa3.js","dbee18c9663f2c3ac6b18249d4993564"],["/br_cs-optimizations-production/js/37.055ba1da5198c4d00fa3.js","2fabda7b58c768dedc9f713063b60bf8"],["/br_cs-optimizations-production/js/38.055ba1da5198c4d00fa3.js","de58f215acebea277815c64171a736af"],["/br_cs-optimizations-production/js/39.055ba1da5198c4d00fa3.js","1d9811ff905c67d73672f24d5ed93213"],["/br_cs-optimizations-production/js/4.055ba1da5198c4d00fa3.js","666c105c5678d48c17014a461cbfcca8"],["/br_cs-optimizations-production/js/40.055ba1da5198c4d00fa3.js","ad0d06a09c495e572f3b5a530b4d054d"],["/br_cs-optimizations-production/js/404.055ba1da5198c4d00fa3.js","68c59139d7162cbb6d38b2229c298bdc"],["/br_cs-optimizations-production/js/41.055ba1da5198c4d00fa3.js","2e3ab105120272a935adde291bf9b32a"],["/br_cs-optimizations-production/js/42.055ba1da5198c4d00fa3.js","6938529dc298d64371fcdceff413ecb5"],["/br_cs-optimizations-production/js/43.055ba1da5198c4d00fa3.js","a62454d7d9bbaa1c53aa48d01f65f342"],["/br_cs-optimizations-production/js/44.055ba1da5198c4d00fa3.js","b6ad9eb6da82ac0dd5f8d1a6edebe8d6"],["/br_cs-optimizations-production/js/45.055ba1da5198c4d00fa3.js","a2075ecc502dbb976f8e73b118ff0e19"],["/br_cs-optimizations-production/js/46.055ba1da5198c4d00fa3.js","e1230a30cff3dc8a10dacc549ed1720d"],["/br_cs-optimizations-production/js/47.055ba1da5198c4d00fa3.js","1bb7b90856a0574a6a7a8417791d3856"],["/br_cs-optimizations-production/js/48.055ba1da5198c4d00fa3.js","d8142d2982fa1d1a0d14d6d4340fda0a"],["/br_cs-optimizations-production/js/49.055ba1da5198c4d00fa3.js","64dbb0a875f63dd88a027fb9c7ff8bcc"],["/br_cs-optimizations-production/js/5.055ba1da5198c4d00fa3.js","9d6483f52984d1cdb3695b97421333ec"],["/br_cs-optimizations-production/js/50.055ba1da5198c4d00fa3.js","26ecd4d4b41202169a9dd4314acb913c"],["/br_cs-optimizations-production/js/51.055ba1da5198c4d00fa3.js","809753d210f98d7bcb4f03b65a4c64af"],["/br_cs-optimizations-production/js/52.055ba1da5198c4d00fa3.js","1c058847616470babde3a165c5ec3cb8"],["/br_cs-optimizations-production/js/53.055ba1da5198c4d00fa3.js","02a345fd15774f95dc1ecc2ee1d5a460"],["/br_cs-optimizations-production/js/54.055ba1da5198c4d00fa3.js","50d97c497642350b96940657c1ecc3e0"],["/br_cs-optimizations-production/js/55.055ba1da5198c4d00fa3.js","74b63c78fa7065c0a6ed416ab844137c"],["/br_cs-optimizations-production/js/56.055ba1da5198c4d00fa3.js","cb929cbf6aaccdf68ba5c05dd5940b3f"],["/br_cs-optimizations-production/js/57.055ba1da5198c4d00fa3.js","c8ad3acd69afab6261c2f709bef770d6"],["/br_cs-optimizations-production/js/58.055ba1da5198c4d00fa3.js","0990dd5510ecb189697f7be5cf708cbb"],["/br_cs-optimizations-production/js/59.055ba1da5198c4d00fa3.js","e5dc7066d438ada3f342efea0c1db2c9"],["/br_cs-optimizations-production/js/6.055ba1da5198c4d00fa3.js","90550dc55395d0ce8ad9f08ff2a44ea2"],["/br_cs-optimizations-production/js/60.055ba1da5198c4d00fa3.js","cca9d12433336aafacef8d8c8e4a047b"],["/br_cs-optimizations-production/js/61.055ba1da5198c4d00fa3.js","a65647ca0b12cf1fdfa26f4c16d52cb9"],["/br_cs-optimizations-production/js/62.055ba1da5198c4d00fa3.js","47340d27cfd13f76173d63faf4e5c27f"],["/br_cs-optimizations-production/js/63.055ba1da5198c4d00fa3.js","3c2db20e82b3faaeb958050acee52593"],["/br_cs-optimizations-production/js/64.055ba1da5198c4d00fa3.js","a125723475e20222c1add1ab1af099ea"],["/br_cs-optimizations-production/js/65.055ba1da5198c4d00fa3.js","7b95556e486e3d3c46a5080c81bed8f6"],["/br_cs-optimizations-production/js/66.055ba1da5198c4d00fa3.js","59ae085e63d957867b8644cce6dd1981"],["/br_cs-optimizations-production/js/67.055ba1da5198c4d00fa3.js","3a52cfb15123fae9b09729c06086da34"],["/br_cs-optimizations-production/js/68.055ba1da5198c4d00fa3.js","1e52449d71d7637e3ddd17d0e0813ba4"],["/br_cs-optimizations-production/js/69.055ba1da5198c4d00fa3.js","89005ddac43f4c1be198d0cf159c5470"],["/br_cs-optimizations-production/js/7.055ba1da5198c4d00fa3.js","e47ec7a7897a5f3b305ae325d4ab4868"],["/br_cs-optimizations-production/js/8.055ba1da5198c4d00fa3.js","c3e8d03ac80b20e90f84f097be7a7aac"],["/br_cs-optimizations-production/js/9.055ba1da5198c4d00fa3.js","79df2cc1ca8dd2606b638f86883e6623"],["/br_cs-optimizations-production/js/DenialOfServiceModal.055ba1da5198c4d00fa3.js","cd7ca0bd7366ef3ca167b7f983a0bc0c"],["/br_cs-optimizations-production/js/MarketUnavailableModal.055ba1da5198c4d00fa3.js","ef902ff9ff7b9e3a53be63df6799096d"],["/br_cs-optimizations-production/js/ServicesErrorModal.055ba1da5198c4d00fa3.js","b35f60502c8882de9a7c7e3fbced69af"],["/br_cs-optimizations-production/js/UnsupportedContractModal.055ba1da5198c4d00fa3.js","706852b6476d79d230d7cf9a4a993750"],["/br_cs-optimizations-production/js/account-info.055ba1da5198c4d00fa3.js","8f42bf7b20c19f25edfefb98c38a03a4"],["/br_cs-optimizations-production/js/contract.055ba1da5198c4d00fa3.js","c78bc9a457e6cbc28a079bde15f224a1"],["/br_cs-optimizations-production/js/default~open_position~1833eefb.055ba1da5198c4d00fa3.js","e71d8b396d00b9a4ff4bcaca8a294650"],["/br_cs-optimizations-production/js/digits.055ba1da5198c4d00fa3.js","6f70c1b578fc975493b5580db020b42b"],["/br_cs-optimizations-production/js/info-box.055ba1da5198c4d00fa3.js","336784e8d476c39702c866037a0dc12f"],["/br_cs-optimizations-production/js/main.055ba1da5198c4d00fa3.js","19aca31487dec1068a6a2481c8c7d12e"],["/br_cs-optimizations-production/js/modals.055ba1da5198c4d00fa3.js","837fcd518942c45a6bb125445c929ce9"],["/br_cs-optimizations-production/js/notification-messages.055ba1da5198c4d00fa3.js","75bb5d7cfb10398467de7e90e4dcf94d"],["/br_cs-optimizations-production/js/open_positions.055ba1da5198c4d00fa3.js","8679b7447568b893c10a2e547cf96068"],["/br_cs-optimizations-production/js/profit_table.055ba1da5198c4d00fa3.js","1220cc0d30cc9191b6c66cd8aa6abd77"],["/br_cs-optimizations-production/js/push-notification.055ba1da5198c4d00fa3.js","bc8eb4b550a56cd7eeb3f503cfbff524"],["/br_cs-optimizations-production/js/reports.055ba1da5198c4d00fa3.js","0a1a3bb01857859acbaabbe89cd0188a"],["/br_cs-optimizations-production/js/screen-small.055ba1da5198c4d00fa3.js","b184311e83f9c953527cde06414b9e0a"],["/br_cs-optimizations-production/js/settings-chart.055ba1da5198c4d00fa3.js","aa215f4fee0e224accf29153f0a11b12"],["/br_cs-optimizations-production/js/settings-language.055ba1da5198c4d00fa3.js","5eca83677ab4e9a48353043b227c1a2a"],["/br_cs-optimizations-production/js/settings-theme.055ba1da5198c4d00fa3.js","a9e69febbab7276785569e27e01e60b4"],["/br_cs-optimizations-production/js/smart_chart.055ba1da5198c4d00fa3.js","ccc85a5a2b4002546a3fdf040dd52cb8"],["/br_cs-optimizations-production/js/smartcharts/chartiq-a0bb2d.smartcharts.js","2859b5a06eb9379a6f1065b51efa81cc"],["/br_cs-optimizations-production/js/smartcharts/de-po-e522d0.smartcharts.js","7f153fed6e754e5a79ba509ccf85a4d8"],["/br_cs-optimizations-production/js/smartcharts/es-po-61430e.smartcharts.js","905b4e1ee7aac1c8b66133646b36954e"],["/br_cs-optimizations-production/js/smartcharts/fr-po-1555a4.smartcharts.js","7cc9c589cadea98aa382c136476627bd"],["/br_cs-optimizations-production/js/smartcharts/html2canvas-c78ff1.smartcharts.js","0ae4bc6f8fe8997549df280580c85bb8"],["/br_cs-optimizations-production/js/smartcharts/id-po-3cdbc8.smartcharts.js","b91c4ac925120746c6544fc17d073c31"],["/br_cs-optimizations-production/js/smartcharts/it-po-edf79d.smartcharts.js","2aad8d954ae4ae0f031459903d8782dc"],["/br_cs-optimizations-production/js/smartcharts/nl-po-6d1e52.smartcharts.js","60827db65225ff31f00b53d263f4edfe"],["/br_cs-optimizations-production/js/smartcharts/pl-po-c7f985.smartcharts.js","ca2d20798ea5ef8d8c32b81a54fd703b"],["/br_cs-optimizations-production/js/smartcharts/pt-po-aaec6f.smartcharts.js","783407adcfa8b46016d2dc8b2be39a66"],["/br_cs-optimizations-production/js/smartcharts/ru-po-9f0c5d.smartcharts.js","18edfe06c994d4cde84cd293d504dd3e"],["/br_cs-optimizations-production/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/br_cs-optimizations-production/js/smartcharts/th-po-650f93.smartcharts.js","c784d0a255058385b73b59e504c81b33"],["/br_cs-optimizations-production/js/smartcharts/vendors~resize-observer-polyfill-f202e8.smartcharts.js","b52a4ce9f52de8dd42942dc15164c867"],["/br_cs-optimizations-production/js/smartcharts/vi-po-4c86cc.smartcharts.js","ee995e5408a03f53f5c880f6a251ce46"],["/br_cs-optimizations-production/js/smartcharts/zh_cn-po-ba46f0.smartcharts.js","9cda59ab320fd2969f3905d1f6e5e80c"],["/br_cs-optimizations-production/js/smartcharts/zh_tw-po-b78185.smartcharts.js","5a312bed6c388379da77ca71554631f8"],["/br_cs-optimizations-production/js/statement.055ba1da5198c4d00fa3.js","ed540913866054b017e5844cd415706f"],["/br_cs-optimizations-production/js/toggle-menu-drawer.055ba1da5198c4d00fa3.js","c27166c4f95ec0802eeb4ba02b720140"],["/br_cs-optimizations-production/js/two-month-picker.055ba1da5198c4d00fa3.js","f49b73fb55034103967d68fe135d4fae"],["/br_cs-optimizations-production/js/vendors~main.055ba1da5198c4d00fa3.js","a45fe5751d4666ca30bb16182da90d90"],["/br_cs-optimizations-production/js/vendors~open_position~7c650be5.055ba1da5198c4d00fa3.js","73438261e032a5a48a532055d07c17a8"],["/br_cs-optimizations-production/js/vendors~smart_chart.055ba1da5198c4d00fa3.js","0dc6c7bc9ab5fd44c30521e342d31b57"],["/br_cs-optimizations-production/js/work-in-progress.055ba1da5198c4d00fa3.js","c5ee4f2caf73cb8076638cc755cc6445"],["/br_cs-optimizations-production/manifest.json","dd386f7a2a47e7f74ede4bdd6c249bbf"],["/br_cs-optimizations-production/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_cs-optimizations-production/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_cs-optimizations-production/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_cs-optimizations-production/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_cs-optimizations-production/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_cs-optimizations-production/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_cs-optimizations-production/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_cs-optimizations-production/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_cs-optimizations-production/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_cs-optimizations-production/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/br_cs-optimizations-production/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/br_cs-optimizations-production/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/br_cs-optimizations-production/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/br_cs-optimizations-production/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/br_cs-optimizations-production/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/br_cs-optimizations-production/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/br_cs-optimizations-production/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/br_cs-optimizations-production/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/br_cs-optimizations-production/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/br_cs-optimizations-production/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/br_cs-optimizations-production/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/br_cs-optimizations-production/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/br_cs-optimizations-production/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/br_cs-optimizations-production/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_cs-optimizations-production/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_cs-optimizations-production/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/br_cs-optimizations-production/';
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







