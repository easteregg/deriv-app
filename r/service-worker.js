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

var precacheConfig = [["/r/404.html","8483487e5b8462268ba74f7305dc240c"],["/r/css/app.css","2d8dd8a5f970027562eeb26dd481b9f1"],["/r/css/smartcharts.css","7abed6df084ad8422da0067ff98caa8c"],["/r/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/r/index.html","1abd6501d4e30f0ede037810f04441ba"],["/r/js/0.14ca6991fd49c679dc86.js","b5b368a8307a0e110146713f2ca72011"],["/r/js/1.14ca6991fd49c679dc86.js","986a82a99532cd5dcbf23d8d0511c235"],["/r/js/10.14ca6991fd49c679dc86.js","aaa23cfc69fc455e154379ba68756072"],["/r/js/11.14ca6991fd49c679dc86.js","63966b83c740862eb94785ea492f5189"],["/r/js/12.14ca6991fd49c679dc86.js","3388628d2f23a868baad1b6b169a96e3"],["/r/js/13.14ca6991fd49c679dc86.js","bf18aadc3573246d4bc6d614b99fa82e"],["/r/js/14.14ca6991fd49c679dc86.js","a7991b26bb9dc209152858cdeba2e829"],["/r/js/15.14ca6991fd49c679dc86.js","5268b8652878796e3d11882947faf442"],["/r/js/16.14ca6991fd49c679dc86.js","635857b930ed4054ddefca422f17090c"],["/r/js/17.14ca6991fd49c679dc86.js","9aea6f6860e34171f6d982fffef84ba0"],["/r/js/18.14ca6991fd49c679dc86.js","6b730fed59cba83bd387f0bfb716c988"],["/r/js/19.14ca6991fd49c679dc86.js","9aece100850f52687a689da8b6457cae"],["/r/js/2.14ca6991fd49c679dc86.js","99c487ce08a9213e98d9e0404493a85c"],["/r/js/20.14ca6991fd49c679dc86.js","f27fdb7fc1a5810c70219ce797a2955c"],["/r/js/21.14ca6991fd49c679dc86.js","5e395b1e63eb066355ef5586be7c3d4f"],["/r/js/22.14ca6991fd49c679dc86.js","9c7cb98edae075ad53e6b39b497ccc9e"],["/r/js/23.14ca6991fd49c679dc86.js","5579fe0fb13acaca03536599d51d8756"],["/r/js/24.14ca6991fd49c679dc86.js","172fa57f1d51a43dacffa65ced20f849"],["/r/js/25.14ca6991fd49c679dc86.js","ffc439fcf6d509110581d822f9860d76"],["/r/js/26.14ca6991fd49c679dc86.js","bb6f5f65869832659cf7f29d14063151"],["/r/js/27.14ca6991fd49c679dc86.js","206b9814844e687469d16b2c268f432b"],["/r/js/28.14ca6991fd49c679dc86.js","4c1b17618340d0a2df4d3e246a06eeeb"],["/r/js/29.14ca6991fd49c679dc86.js","0b67606bf41d5315afe23aa4dc439828"],["/r/js/3.14ca6991fd49c679dc86.js","c886b178715dddc8a86033ea61ae3ba5"],["/r/js/30.14ca6991fd49c679dc86.js","8fc49e8f46101f11ef24b46d3cd0a7c1"],["/r/js/31.14ca6991fd49c679dc86.js","6696d06da00bd7b65df47bc69aebd071"],["/r/js/32.14ca6991fd49c679dc86.js","66b76dc1048531603a97618833b04ea0"],["/r/js/33.14ca6991fd49c679dc86.js","98fde00c6e8d450bf311a54acc275e7e"],["/r/js/34.14ca6991fd49c679dc86.js","146f9d6ece9f22edb3c1490a6c75e856"],["/r/js/35.14ca6991fd49c679dc86.js","59701d246d36649086b6d9c7efb73aae"],["/r/js/36.14ca6991fd49c679dc86.js","dbc4d98f62d3abd323b082f5c63defd2"],["/r/js/37.14ca6991fd49c679dc86.js","e3011fb029a40b9932c36d0d41693ae6"],["/r/js/38.14ca6991fd49c679dc86.js","ddb4437ce7bc2864df0ceee9a37ff474"],["/r/js/39.14ca6991fd49c679dc86.js","fda4988e27a7baa84e9bd51167664c3e"],["/r/js/4.14ca6991fd49c679dc86.js","eee1f2bf46fd2c8f74cde9a9846f6b76"],["/r/js/40.14ca6991fd49c679dc86.js","86af2744c18796ff369917da9697c89d"],["/r/js/404.14ca6991fd49c679dc86.js","51bef2c36a649435b14ef209078dce8a"],["/r/js/41.14ca6991fd49c679dc86.js","f3d1a9c1c5d4e4bef5103b80830c78ce"],["/r/js/42.14ca6991fd49c679dc86.js","1c73558f8e24d76ec9e04de2f5bb6167"],["/r/js/43.14ca6991fd49c679dc86.js","08e8bff84d3536fcce9bdbdf38930dcc"],["/r/js/44.14ca6991fd49c679dc86.js","50f859d78473718c5f61aabbbb137e64"],["/r/js/45.14ca6991fd49c679dc86.js","8b6c7a1e08c7c2c8e0878b307d5fe4fd"],["/r/js/46.14ca6991fd49c679dc86.js","1ffbf39f1f004d0eea62a0efb565d5e4"],["/r/js/47.14ca6991fd49c679dc86.js","c57e2724512676a0c932b96ce3bbb1f3"],["/r/js/48.14ca6991fd49c679dc86.js","f9094d4176cdd27d6cd0f873f8420c84"],["/r/js/49.14ca6991fd49c679dc86.js","9475b2655b7275dd5020394fed1b7574"],["/r/js/5.14ca6991fd49c679dc86.js","c9b64b662ee61c51c896708c8895182c"],["/r/js/50.14ca6991fd49c679dc86.js","01e0e8152e03e72a6d5702bfa1fb246f"],["/r/js/51.14ca6991fd49c679dc86.js","504e49290f5cd359ebf767d94ffd6637"],["/r/js/52.14ca6991fd49c679dc86.js","9f0b89ccfbd2098544ac98b44f826895"],["/r/js/53.14ca6991fd49c679dc86.js","f0c4b069ad77cc1be9f5abacb3998e10"],["/r/js/54.14ca6991fd49c679dc86.js","3b1bae0ad078bef173eccc929bd2fff5"],["/r/js/55.14ca6991fd49c679dc86.js","b3c93855ef7b4e78c30c69a22a10b8a8"],["/r/js/56.14ca6991fd49c679dc86.js","bf744ebd7f96d739931ea6d89da98135"],["/r/js/57.14ca6991fd49c679dc86.js","d7a5355fc6a57fa5d0390648c5acede8"],["/r/js/58.14ca6991fd49c679dc86.js","ec1c98c18d5a82dc2c3da2217115f9c1"],["/r/js/59.14ca6991fd49c679dc86.js","ed7f8e6b3c4c9fb6dc12faff37dd412e"],["/r/js/6.14ca6991fd49c679dc86.js","e573595e10e8d783ce5321c8e878808f"],["/r/js/60.14ca6991fd49c679dc86.js","eee08dfefac2500502d8fe28572db44c"],["/r/js/61.14ca6991fd49c679dc86.js","e555e3a5f7006333cdd99b3f4bcd697c"],["/r/js/62.14ca6991fd49c679dc86.js","2b54b3e5633df2173a4a6fa5f60e2014"],["/r/js/63.14ca6991fd49c679dc86.js","e03145d5d21d10d9d9978c4b7f0c0438"],["/r/js/64.14ca6991fd49c679dc86.js","cb4ffefbbc774ee8c2c0e75d8df9217b"],["/r/js/65.14ca6991fd49c679dc86.js","bb6dd41785cb3989f11bfb9d0aa09964"],["/r/js/66.14ca6991fd49c679dc86.js","d0d4a16e173bc142232244fb64fb5351"],["/r/js/67.14ca6991fd49c679dc86.js","c5be379f18bac7ed7a525cf3cfd84461"],["/r/js/68.14ca6991fd49c679dc86.js","001e947d608c5c478e1ef60f197cb832"],["/r/js/69.14ca6991fd49c679dc86.js","c997e903a66dd0e9a28c5de80e32273b"],["/r/js/7.14ca6991fd49c679dc86.js","b285ff34dfec3f546bc523276f0249a5"],["/r/js/8.14ca6991fd49c679dc86.js","617f08eeb893be7881240747cbc47f8e"],["/r/js/9.14ca6991fd49c679dc86.js","e208dcbb1c940f91bf94c3b93486c077"],["/r/js/DenialOfServiceModal.14ca6991fd49c679dc86.js","56224c8ed231fd97a81f41779e59e6ea"],["/r/js/MarketUnavailableModal.14ca6991fd49c679dc86.js","272bfe40ceb053c3a084a33c181ed304"],["/r/js/ServicesErrorModal.14ca6991fd49c679dc86.js","aa86b67ab1d6c1175f4c8036ee8c04af"],["/r/js/UnsupportedContractModal.14ca6991fd49c679dc86.js","9eff9e4c3ea6bf2e5a7b17d609fc0c50"],["/r/js/account-info.14ca6991fd49c679dc86.js","17106bf62c12bc3e77da26784d76c374"],["/r/js/contract.14ca6991fd49c679dc86.js","6644d905018a6550d4d7eee869f778d1"],["/r/js/main.14ca6991fd49c679dc86.js","a2a78033f42e54b5cf962cc4632b7160"],["/r/js/modals.14ca6991fd49c679dc86.js","d90985cf264ba7aa4062e578d78878ef"],["/r/js/notification-messages.14ca6991fd49c679dc86.js","a086f3e444f19d1817557e207dd013f4"],["/r/js/open_positions.14ca6991fd49c679dc86.js","5a34d816c6dfce1b8b92acfdb0a09c16"],["/r/js/open_positions~profit_table~statement.14ca6991fd49c679dc86.js","3de820fce9b8c20d08308f2ced05051b"],["/r/js/positions-drawer.14ca6991fd49c679dc86.js","2cd96edd74000339fcc9c5214f443709"],["/r/js/profit_table.14ca6991fd49c679dc86.js","51ab08cb33221d44ecdb53e7d6822db0"],["/r/js/push-notification.14ca6991fd49c679dc86.js","0cf4c70ad81d36dd5a02a756e4cefe32"],["/r/js/reports.14ca6991fd49c679dc86.js","cb86539209e16a27ac883cb667e41c74"],["/r/js/smart_chart.14ca6991fd49c679dc86.js","6b0d5460aa117641710f23f234486764"],["/r/js/smartcharts/chartiq-a0bb2d.smartcharts.js","2859b5a06eb9379a6f1065b51efa81cc"],["/r/js/smartcharts/de-po-e522d0.smartcharts.js","7f153fed6e754e5a79ba509ccf85a4d8"],["/r/js/smartcharts/es-po-61430e.smartcharts.js","905b4e1ee7aac1c8b66133646b36954e"],["/r/js/smartcharts/fr-po-1555a4.smartcharts.js","7cc9c589cadea98aa382c136476627bd"],["/r/js/smartcharts/html2canvas-c78ff1.smartcharts.js","0ae4bc6f8fe8997549df280580c85bb8"],["/r/js/smartcharts/id-po-3cdbc8.smartcharts.js","b91c4ac925120746c6544fc17d073c31"],["/r/js/smartcharts/it-po-edf79d.smartcharts.js","2aad8d954ae4ae0f031459903d8782dc"],["/r/js/smartcharts/nl-po-6d1e52.smartcharts.js","60827db65225ff31f00b53d263f4edfe"],["/r/js/smartcharts/pl-po-c7f985.smartcharts.js","ca2d20798ea5ef8d8c32b81a54fd703b"],["/r/js/smartcharts/pt-po-aaec6f.smartcharts.js","783407adcfa8b46016d2dc8b2be39a66"],["/r/js/smartcharts/ru-po-9f0c5d.smartcharts.js","18edfe06c994d4cde84cd293d504dd3e"],["/r/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/r/js/smartcharts/th-po-650f93.smartcharts.js","c784d0a255058385b73b59e504c81b33"],["/r/js/smartcharts/vendors~resize-observer-polyfill-f202e8.smartcharts.js","b52a4ce9f52de8dd42942dc15164c867"],["/r/js/smartcharts/vi-po-4c86cc.smartcharts.js","ee995e5408a03f53f5c880f6a251ce46"],["/r/js/smartcharts/zh_cn-po-ba46f0.smartcharts.js","9cda59ab320fd2969f3905d1f6e5e80c"],["/r/js/smartcharts/zh_tw-po-b78185.smartcharts.js","5a312bed6c388379da77ca71554631f8"],["/r/js/statement.14ca6991fd49c679dc86.js","edf6d4c7f8bd7cc2ad908283019beee9"],["/r/js/vendors~open_positions~profit_table~statement.14ca6991fd49c679dc86.js","91cfa8733b902ba7c873ee57e8463e84"],["/r/js/vendors~smart_chart.14ca6991fd49c679dc86.js","6b5e7a88225f16399753c597f5b59081"],["/r/js/wip.14ca6991fd49c679dc86.js","0854b9a92d45bbe37fc9838882db32e4"],["/r/manifest.json","5ae19dd4068a19b42f2afa1308b0e59a"],["/r/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/r/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/r/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/r/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/r/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/r/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/r/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/r/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/r/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/r/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/r/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/r/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/r/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/r/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/r/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/r/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/r/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/r/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/r/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/r/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/r/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/r/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/r/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/r/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/r/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/r/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/r/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/r/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/r/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/r/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/r/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/r/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/r/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/r/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/r/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/r/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/r/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/r/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/r/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/r/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/r/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/r/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/r/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/r/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/r/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/r/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/r/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/r/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/r/robots.txt","6978a616c585d03cb5b542a891995efb"],["/r/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/r/';
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







