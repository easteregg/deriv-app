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

var precacheConfig = [["/br_code-split/404.html","8483487e5b8462268ba74f7305dc240c"],["/br_code-split/css/app.css","18288ee894050fd90c8be69afe7d1b99"],["/br_code-split/css/smartcharts.css","7abed6df084ad8422da0067ff98caa8c"],["/br_code-split/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_code-split/index.html","ef406b5d657d58d89059324c745e51e2"],["/br_code-split/js/0.70e9996871890c6051b1.js","671469a8a6a3c94510068b4112d1f3cc"],["/br_code-split/js/1.70e9996871890c6051b1.js","c3d5ae68282ceebc873508fb3a81effc"],["/br_code-split/js/10.70e9996871890c6051b1.js","a221d1ac0fe8360a302d8f46c76206b9"],["/br_code-split/js/11.70e9996871890c6051b1.js","bba58a45ba141416ee1a4a56cb00c14d"],["/br_code-split/js/12.70e9996871890c6051b1.js","b2652aa02eb3ec1a309d5670a711b847"],["/br_code-split/js/13.70e9996871890c6051b1.js","157851b48d8ffe080cdb1955eacfcf00"],["/br_code-split/js/14.70e9996871890c6051b1.js","96d655cf24a13be66834f5820673b541"],["/br_code-split/js/15.70e9996871890c6051b1.js","e67e5a27ce89578dabb227c45ca6d818"],["/br_code-split/js/16.70e9996871890c6051b1.js","db1d20c52fe67bf7662be9ccdc803add"],["/br_code-split/js/17.70e9996871890c6051b1.js","34a1e8b5a69210587242d6a2e055f433"],["/br_code-split/js/18.70e9996871890c6051b1.js","a4e5db6c3b067569c9155a55d0f39177"],["/br_code-split/js/19.70e9996871890c6051b1.js","6c156c209eb2be57e658edbf1948ed51"],["/br_code-split/js/2.70e9996871890c6051b1.js","dc9058cf6825ff277f22cd8a85f1a08d"],["/br_code-split/js/20.70e9996871890c6051b1.js","3c78d2112be53360a48c3603b046ac04"],["/br_code-split/js/21.70e9996871890c6051b1.js","098ad0201c66316e4021903384d650b8"],["/br_code-split/js/22.70e9996871890c6051b1.js","0aa830793e18ad094178736608f45b57"],["/br_code-split/js/23.70e9996871890c6051b1.js","ca396c6dca4ca1dd6985cbdc05b646aa"],["/br_code-split/js/24.70e9996871890c6051b1.js","434989a9cfc8ec28b18893945f96c2cd"],["/br_code-split/js/25.70e9996871890c6051b1.js","e574f97a9ba56f2c7b92c1dc343880a7"],["/br_code-split/js/26.70e9996871890c6051b1.js","5ff9d3ffbb65c9af753ab944eb17d2ea"],["/br_code-split/js/27.70e9996871890c6051b1.js","c3ffe9805f11af056ef1686d3a370955"],["/br_code-split/js/28.70e9996871890c6051b1.js","294681b79f1632ca4fde5018bb21297f"],["/br_code-split/js/29.70e9996871890c6051b1.js","ee9beb7899e4cd6e927db9f3e0758735"],["/br_code-split/js/3.70e9996871890c6051b1.js","5096430f99ce980a6f4c3f3ac02fa496"],["/br_code-split/js/30.70e9996871890c6051b1.js","203e5916d852f3eb38bced3bbd12ae0d"],["/br_code-split/js/31.70e9996871890c6051b1.js","4563cd56a40f9f9107015421f8ec8833"],["/br_code-split/js/32.70e9996871890c6051b1.js","548761b417cce8cd46acd1d411abe2bc"],["/br_code-split/js/33.70e9996871890c6051b1.js","e0327375542a29f2964ffc3815d9cfb1"],["/br_code-split/js/34.70e9996871890c6051b1.js","d4edb2f84f82e9df62e27a9e919eb2d0"],["/br_code-split/js/35.70e9996871890c6051b1.js","6bb1580bec01cd071b472afd82aabfaf"],["/br_code-split/js/36.70e9996871890c6051b1.js","1ee863ae474bcc7b1d09e22e2fd2e8d2"],["/br_code-split/js/37.70e9996871890c6051b1.js","05d9cf3d691b33b2b79e2ed7205d59d3"],["/br_code-split/js/38.70e9996871890c6051b1.js","9d91836b4d05914a1b3e25bf1b0efb4e"],["/br_code-split/js/39.70e9996871890c6051b1.js","7a061b18e62080b9c64a72ee57cdb4a9"],["/br_code-split/js/4.70e9996871890c6051b1.js","f803104af655adbaa946b7fdd093a46e"],["/br_code-split/js/40.70e9996871890c6051b1.js","a671e89bec91bfde1fde888245b5d3fa"],["/br_code-split/js/404.70e9996871890c6051b1.js","9a7b46cf5eb82df0d036d64b11eff7f7"],["/br_code-split/js/41.70e9996871890c6051b1.js","2da3c31932b8f5624d559539e97decf2"],["/br_code-split/js/42.70e9996871890c6051b1.js","e76226992284479c4d47d645dcc95e97"],["/br_code-split/js/43.70e9996871890c6051b1.js","b4c59348bf4484534546ddbe0569e662"],["/br_code-split/js/44.70e9996871890c6051b1.js","1911738a3bd2fb078a567faee2c63f78"],["/br_code-split/js/45.70e9996871890c6051b1.js","9b305d68d802eec354b850f32cd7def9"],["/br_code-split/js/46.70e9996871890c6051b1.js","30eae6285ea6ed920923e56f0039ad96"],["/br_code-split/js/47.70e9996871890c6051b1.js","61979752f044a8b2d41b8f94db131dce"],["/br_code-split/js/48.70e9996871890c6051b1.js","7cb383efa67742af3e3bf349bcc89b90"],["/br_code-split/js/49.70e9996871890c6051b1.js","00d9c58258f0b027a8fd66fccc52a823"],["/br_code-split/js/5.70e9996871890c6051b1.js","33828165f89dfba64c3d52c8ad183890"],["/br_code-split/js/50.70e9996871890c6051b1.js","22b9c5ca87dbdeb6e60406d06fc6f595"],["/br_code-split/js/51.70e9996871890c6051b1.js","64c02d4e9434c4329ef764a9eee76702"],["/br_code-split/js/52.70e9996871890c6051b1.js","d1896054b8d1e9330ee42e761673db69"],["/br_code-split/js/53.70e9996871890c6051b1.js","7299fb99225105ccce7a95df3e017054"],["/br_code-split/js/54.70e9996871890c6051b1.js","89912a50b4bfcce58178cda2762cf589"],["/br_code-split/js/55.70e9996871890c6051b1.js","89f3fc96923c987b75f4e19dfa502d94"],["/br_code-split/js/56.70e9996871890c6051b1.js","089114678a2dbbeca441b543c2d57e07"],["/br_code-split/js/57.70e9996871890c6051b1.js","caad53f782bb606f8fd2cb7ef5a45068"],["/br_code-split/js/58.70e9996871890c6051b1.js","6285f6595ef2857d796a67fd809c00c8"],["/br_code-split/js/59.70e9996871890c6051b1.js","94f5c4a9191bb0a21a4e476799e88542"],["/br_code-split/js/6.70e9996871890c6051b1.js","f60334c950b78e2d19589653d4e6469d"],["/br_code-split/js/60.70e9996871890c6051b1.js","53a4da5857c0771e0de1bfe22fbb6460"],["/br_code-split/js/61.70e9996871890c6051b1.js","9836d3719ea6a5a5c92b8cca51c4b69e"],["/br_code-split/js/62.70e9996871890c6051b1.js","59b5386d2cb5f46840359416e5506ade"],["/br_code-split/js/63.70e9996871890c6051b1.js","6fc481926e77b99410e4114997c0c683"],["/br_code-split/js/64.70e9996871890c6051b1.js","7586e60e7266ecad4e51e27be6efe91b"],["/br_code-split/js/65.70e9996871890c6051b1.js","fc0537b1286cdf6e6f515f4cdbc97e3c"],["/br_code-split/js/66.70e9996871890c6051b1.js","399fcc5e5f7e6f08fd16e90e27100af1"],["/br_code-split/js/67.70e9996871890c6051b1.js","fe386d1ef07d54ef78d6106b33f37a82"],["/br_code-split/js/68.70e9996871890c6051b1.js","ccf1d241e9a1b69f6280ab6f45f465be"],["/br_code-split/js/69.70e9996871890c6051b1.js","760f9526e6248a6202d60cd9b3eb8006"],["/br_code-split/js/7.70e9996871890c6051b1.js","131a1ffd6d4e47cd402ccbcc828fbaa5"],["/br_code-split/js/8.70e9996871890c6051b1.js","cd5300b068585e7fc427a3f1053b99f7"],["/br_code-split/js/9.70e9996871890c6051b1.js","93ccb55e378574e9e14bb8edd11e3150"],["/br_code-split/js/account-info.70e9996871890c6051b1.js","54e867c6eb14d2f3a5eb6e3852364c12"],["/br_code-split/js/contract.70e9996871890c6051b1.js","c93ac883e843760575f716010827b8ea"],["/br_code-split/js/main.70e9996871890c6051b1.js","0029f272a825332d91a029301c947771"],["/br_code-split/js/notification-messages.70e9996871890c6051b1.js","93af4aabe3b782ce0b76d9a8f42b005b"],["/br_code-split/js/open_positions.70e9996871890c6051b1.js","805d5df39f41d814deaf5bf39fbfa142"],["/br_code-split/js/open_positions~profit_table~statement.70e9996871890c6051b1.js","892423f9021583d3d61cf050e5e4f050"],["/br_code-split/js/positions-drawer.70e9996871890c6051b1.js","1f77397b0fcfdc2eecd251aa88bcaa65"],["/br_code-split/js/profit_table.70e9996871890c6051b1.js","de03b8029615a97f4199c6b192aa1dff"],["/br_code-split/js/push-notification.70e9996871890c6051b1.js","7373a13b9704c98a42266ae7c4417648"],["/br_code-split/js/reports.70e9996871890c6051b1.js","53e69e3d78927ea480219a1f64c4974b"],["/br_code-split/js/smart_chart.70e9996871890c6051b1.js","ad131b3626d49db293cf5e5f60d28ee9"],["/br_code-split/js/smartcharts/chartiq-a0bb2d.smartcharts.js","2859b5a06eb9379a6f1065b51efa81cc"],["/br_code-split/js/smartcharts/de-po-e522d0.smartcharts.js","7f153fed6e754e5a79ba509ccf85a4d8"],["/br_code-split/js/smartcharts/es-po-61430e.smartcharts.js","905b4e1ee7aac1c8b66133646b36954e"],["/br_code-split/js/smartcharts/fr-po-1555a4.smartcharts.js","7cc9c589cadea98aa382c136476627bd"],["/br_code-split/js/smartcharts/html2canvas-c78ff1.smartcharts.js","0ae4bc6f8fe8997549df280580c85bb8"],["/br_code-split/js/smartcharts/id-po-3cdbc8.smartcharts.js","b91c4ac925120746c6544fc17d073c31"],["/br_code-split/js/smartcharts/it-po-edf79d.smartcharts.js","2aad8d954ae4ae0f031459903d8782dc"],["/br_code-split/js/smartcharts/nl-po-6d1e52.smartcharts.js","60827db65225ff31f00b53d263f4edfe"],["/br_code-split/js/smartcharts/pl-po-c7f985.smartcharts.js","ca2d20798ea5ef8d8c32b81a54fd703b"],["/br_code-split/js/smartcharts/pt-po-aaec6f.smartcharts.js","783407adcfa8b46016d2dc8b2be39a66"],["/br_code-split/js/smartcharts/ru-po-9f0c5d.smartcharts.js","18edfe06c994d4cde84cd293d504dd3e"],["/br_code-split/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/br_code-split/js/smartcharts/th-po-650f93.smartcharts.js","c784d0a255058385b73b59e504c81b33"],["/br_code-split/js/smartcharts/vendors~resize-observer-polyfill-f202e8.smartcharts.js","b52a4ce9f52de8dd42942dc15164c867"],["/br_code-split/js/smartcharts/vi-po-4c86cc.smartcharts.js","ee995e5408a03f53f5c880f6a251ce46"],["/br_code-split/js/smartcharts/zh_cn-po-ba46f0.smartcharts.js","9cda59ab320fd2969f3905d1f6e5e80c"],["/br_code-split/js/smartcharts/zh_tw-po-b78185.smartcharts.js","5a312bed6c388379da77ca71554631f8"],["/br_code-split/js/statement.70e9996871890c6051b1.js","06b23f9248117d31e6858cfb9bc06432"],["/br_code-split/js/vendors~open_positions~profit_table~statement.70e9996871890c6051b1.js","ae93e9d1be65552ceba8ae4ada4e6738"],["/br_code-split/js/vendors~smart_chart.70e9996871890c6051b1.js","dd5bdb95f71d0787c2b8c4d1ca17c103"],["/br_code-split/manifest.json","36eae0c845a2f3ff3a8cd1d69f1b767a"],["/br_code-split/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_code-split/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_code-split/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_code-split/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_code-split/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_code-split/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_code-split/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_code-split/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_code-split/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_code-split/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/br_code-split/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/br_code-split/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/br_code-split/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/br_code-split/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/br_code-split/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/br_code-split/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/br_code-split/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/br_code-split/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/br_code-split/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/br_code-split/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/br_code-split/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/br_code-split/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/br_code-split/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/br_code-split/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_code-split/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_code-split/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/br_code-split/';
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







