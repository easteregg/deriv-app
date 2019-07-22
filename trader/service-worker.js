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

var precacheConfig = [["/trader/404.html","8483487e5b8462268ba74f7305dc240c"],["/trader/css/app.css","358c7058f69cc6d7722061cb1b9f8e71"],["/trader/css/digits.css","9afc65cccb8dd4e6aa46a67a26eefe1f"],["/trader/css/modals.css","abd2c87eeaae3ff15dbba3ba164c0687"],["/trader/css/notification-messages.css","d9e3e192f9a1f2ca1202e4ee36b4c7c8"],["/trader/css/reports.css","c367662ce5f8dac40a43b790d9f4efcd"],["/trader/css/screen-small.css","9a212cdb8eff1957817de608257007b5"],["/trader/css/smartcharts.css","7abed6df084ad8422da0067ff98caa8c"],["/trader/css/work-in-progress.css","c3aa4d73ebf2bac685aa45a097c34309"],["/trader/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/trader/index.html","5df908a0915e0290d3b5b55788f6fe13"],["/trader/js/0.2a480d334ee9515e5a0e.js","fac22fc8c18606667e43633eb437a46f"],["/trader/js/1.2a480d334ee9515e5a0e.js","ce938c4dcce0e986772b47f9586f9d94"],["/trader/js/10.2a480d334ee9515e5a0e.js","2bc4fdb077b4def4d8017317bbfc5948"],["/trader/js/11.2a480d334ee9515e5a0e.js","9f6ec51942baeed511d389eee8da3e5f"],["/trader/js/12.2a480d334ee9515e5a0e.js","e4693918775f6b8c373f3ea628e10529"],["/trader/js/13.2a480d334ee9515e5a0e.js","c7a59ff3600fe7a5a1413da4a9eaf8de"],["/trader/js/14.2a480d334ee9515e5a0e.js","6652e4df7bb794f4a1a7f0fba6686904"],["/trader/js/15.2a480d334ee9515e5a0e.js","ad2c11c80037f0a0f356319f7ccc0e23"],["/trader/js/16.2a480d334ee9515e5a0e.js","90075baa7dd78cb824e35e19c85df4e6"],["/trader/js/17.2a480d334ee9515e5a0e.js","affdd0f71a8b270646ed335e84a61f68"],["/trader/js/18.2a480d334ee9515e5a0e.js","580752262e75205e78f0ee34ea27e891"],["/trader/js/19.2a480d334ee9515e5a0e.js","be8dff9083ca10d14a6a0f452f641161"],["/trader/js/2.2a480d334ee9515e5a0e.js","a8f4dec6264a7fe0bd2217f37afa9230"],["/trader/js/20.2a480d334ee9515e5a0e.js","695496e1117c97a5972a109d2823eb88"],["/trader/js/21.2a480d334ee9515e5a0e.js","4953485edb232e03a7b3fe59fbb9dfdd"],["/trader/js/22.2a480d334ee9515e5a0e.js","abb086801e55655cbb5a2aa5bc1a38b6"],["/trader/js/23.2a480d334ee9515e5a0e.js","9730a2b1cac8d2399223a976aec2b5ca"],["/trader/js/24.2a480d334ee9515e5a0e.js","e7e62078e7d7cc2b38b8949c4d0945f5"],["/trader/js/25.2a480d334ee9515e5a0e.js","da09a4164e6e4aef205da7e06afc207f"],["/trader/js/26.2a480d334ee9515e5a0e.js","1ea3b3ba2db72f9af80f811932ad3322"],["/trader/js/27.2a480d334ee9515e5a0e.js","57669746e23351b47c592d57064968af"],["/trader/js/28.2a480d334ee9515e5a0e.js","67ea93541a6b1846ec5128f3b84a2b04"],["/trader/js/29.2a480d334ee9515e5a0e.js","b176ab96ded46f9e36a71a7b2da6c85c"],["/trader/js/3.2a480d334ee9515e5a0e.js","ae489c593f419e63507cee01b23afbd3"],["/trader/js/30.2a480d334ee9515e5a0e.js","5327a3ad37e0773b27682d178e478d1e"],["/trader/js/31.2a480d334ee9515e5a0e.js","d4d4055ce596e84952ed0f01da152bf2"],["/trader/js/32.2a480d334ee9515e5a0e.js","e4c0e6e95c685d5f26376b8520c9b18b"],["/trader/js/33.2a480d334ee9515e5a0e.js","0ad3c78b5e3eb47f352fca7ab908089a"],["/trader/js/34.2a480d334ee9515e5a0e.js","fd3b097c68256b4fb11c86d034d0bb8e"],["/trader/js/35.2a480d334ee9515e5a0e.js","23566cf31139ef19979920913615a088"],["/trader/js/36.2a480d334ee9515e5a0e.js","e86c4b2bec781caf3bd0ce324b1be53a"],["/trader/js/37.2a480d334ee9515e5a0e.js","0adc88abddc34c68ba5cf397828cc02d"],["/trader/js/38.2a480d334ee9515e5a0e.js","19cc0cddc6d21023285a761283bdb979"],["/trader/js/39.2a480d334ee9515e5a0e.js","441d8a147a521b4d7017c3bb92b8e8e0"],["/trader/js/4.2a480d334ee9515e5a0e.js","96132cc8acc97f064051fd9169f23994"],["/trader/js/40.2a480d334ee9515e5a0e.js","17dcb399446a9447c9d2faeba1a2b553"],["/trader/js/404.2a480d334ee9515e5a0e.js","34a73708c50226320ae5746ee2835d0f"],["/trader/js/41.2a480d334ee9515e5a0e.js","9248dfe92575b90d605e12a9e0fe7607"],["/trader/js/42.2a480d334ee9515e5a0e.js","fed4fd4f4a248c9dbdb200245507289b"],["/trader/js/43.2a480d334ee9515e5a0e.js","60f9b2c2605be2641c7cb3d622f1e543"],["/trader/js/44.2a480d334ee9515e5a0e.js","a31587f9c272ab94638674d0faa9bc56"],["/trader/js/45.2a480d334ee9515e5a0e.js","980a8e20e8cda724e275128c4fff4ed4"],["/trader/js/46.2a480d334ee9515e5a0e.js","2fbdff07a676c0c8bec4d876878d82f3"],["/trader/js/47.2a480d334ee9515e5a0e.js","55c680191cdbc55c11317e243421e904"],["/trader/js/48.2a480d334ee9515e5a0e.js","fc1346a12b0f76fa71de035197ceaf8c"],["/trader/js/49.2a480d334ee9515e5a0e.js","8cfbabd2208843e83f35c224dda344e7"],["/trader/js/5.2a480d334ee9515e5a0e.js","066965590eb9fba4d81f971f44217a3c"],["/trader/js/50.2a480d334ee9515e5a0e.js","975c3e6fbb60b793580d7832f2fe8837"],["/trader/js/51.2a480d334ee9515e5a0e.js","83071d603f18263499ea3d2d3310dbeb"],["/trader/js/52.2a480d334ee9515e5a0e.js","a64e35e2b7d337788ccc39b99040d419"],["/trader/js/53.2a480d334ee9515e5a0e.js","8881d2920e567f79db37c368458ba9a7"],["/trader/js/54.2a480d334ee9515e5a0e.js","8664f0c3e3e0ce0e82f327965c25d339"],["/trader/js/55.2a480d334ee9515e5a0e.js","c45fffa20427b339f36085ff950a5299"],["/trader/js/56.2a480d334ee9515e5a0e.js","3fff66cf075e71f313fa93120214fc63"],["/trader/js/57.2a480d334ee9515e5a0e.js","afc7df7e359994cbc469eca769c7422e"],["/trader/js/58.2a480d334ee9515e5a0e.js","0a900ed502812373f3bd4adbe20d70e1"],["/trader/js/59.2a480d334ee9515e5a0e.js","aedfe10db549edd3a48b691ebc71629a"],["/trader/js/6.2a480d334ee9515e5a0e.js","8803c66f7c65e06fc58427b707452ee5"],["/trader/js/60.2a480d334ee9515e5a0e.js","8c878dc966b3724939b651d892ea4265"],["/trader/js/61.2a480d334ee9515e5a0e.js","7a1bd67881c59442183cb53638b47c35"],["/trader/js/62.2a480d334ee9515e5a0e.js","5bcb7adefa47233c5d3afea6a26a3948"],["/trader/js/63.2a480d334ee9515e5a0e.js","201b6c6631dac35236792688a4da6b48"],["/trader/js/64.2a480d334ee9515e5a0e.js","84b48f277ad2dbd5b162ef87a04408af"],["/trader/js/65.2a480d334ee9515e5a0e.js","0c7295acbdb8a710c3bf4860e13b0230"],["/trader/js/66.2a480d334ee9515e5a0e.js","9047280a076d105f3d76fe6eaa133cfd"],["/trader/js/67.2a480d334ee9515e5a0e.js","4bf8c79dfc15dfc23664f8a70ebab96f"],["/trader/js/68.2a480d334ee9515e5a0e.js","d922765420d05f4c434953107d3d7ef2"],["/trader/js/69.2a480d334ee9515e5a0e.js","6f18d8d2aae585a0b72e9fc7d95e7bfc"],["/trader/js/7.2a480d334ee9515e5a0e.js","cf6bfac221a5243cd7c5e942ba27a6bf"],["/trader/js/8.2a480d334ee9515e5a0e.js","566851394b51280b6160cc09dfc61fc1"],["/trader/js/9.2a480d334ee9515e5a0e.js","4004ce38cfd5f2ada93cc34b6163a665"],["/trader/js/DenialOfServiceModal.2a480d334ee9515e5a0e.js","a584f111eb39d4c311e7877fc173e922"],["/trader/js/MarketUnavailableModal.2a480d334ee9515e5a0e.js","bb500aacb04ebeb763976ee18bfe9c43"],["/trader/js/ServicesErrorModal.2a480d334ee9515e5a0e.js","7437cb983ab7667fdea80ac9dea68dc5"],["/trader/js/UnsupportedContractModal.2a480d334ee9515e5a0e.js","527a7f262bdf696d930f221497e2b482"],["/trader/js/account-info.2a480d334ee9515e5a0e.js","b51878e70e5acf415f6ee9dc6dd5ac92"],["/trader/js/contract.2a480d334ee9515e5a0e.js","e8264ca47e8ffdd04fc4bdbb28a319df"],["/trader/js/digits.2a480d334ee9515e5a0e.js","9142177ea3cad1f6c9147fa59d565e06"],["/trader/js/info-box.2a480d334ee9515e5a0e.js","3939ca06cfcfe28951fb57da372a6875"],["/trader/js/main.2a480d334ee9515e5a0e.js","8e169f6051c3f783d83527278684118f"],["/trader/js/modals.2a480d334ee9515e5a0e.js","6bd660022f8fcee81836b4b4004eaf87"],["/trader/js/notification-messages.2a480d334ee9515e5a0e.js","6f7fbec5adc14f34169338d9a4c56b61"],["/trader/js/open_positions.2a480d334ee9515e5a0e.js","16575a3a779f11985a21a38d7b4aa8f7"],["/trader/js/open_positions~profit_table~statement.2a480d334ee9515e5a0e.js","567fe04e826402b79ab63f7aa328a681"],["/trader/js/profit_table.2a480d334ee9515e5a0e.js","78adcaed267a9eedbe65048c383bcbb9"],["/trader/js/push-notification.2a480d334ee9515e5a0e.js","cda9d279dd586ccaf5adcbd3aa0b3b3d"],["/trader/js/reports.2a480d334ee9515e5a0e.js","2901c03c64f3f53a4089f0d2a4bb219e"],["/trader/js/screen-small.2a480d334ee9515e5a0e.js","f6c317b5fdee16e48fda8aaa459e0a3b"],["/trader/js/settings-chart.2a480d334ee9515e5a0e.js","87b541ee8ca8c0046271ffb61a1eebd9"],["/trader/js/settings-language.2a480d334ee9515e5a0e.js","84599d4815743a1e0bc558bf2279191f"],["/trader/js/settings-theme.2a480d334ee9515e5a0e.js","9a51cc3983fb892a0a6eaed495a90af6"],["/trader/js/smart_chart.2a480d334ee9515e5a0e.js","e8c075d173d76d8f113dcee49cc94500"],["/trader/js/smartcharts/chartiq-a0bb2d.smartcharts.js","2859b5a06eb9379a6f1065b51efa81cc"],["/trader/js/smartcharts/de-po-e522d0.smartcharts.js","7f153fed6e754e5a79ba509ccf85a4d8"],["/trader/js/smartcharts/es-po-61430e.smartcharts.js","905b4e1ee7aac1c8b66133646b36954e"],["/trader/js/smartcharts/fr-po-1555a4.smartcharts.js","7cc9c589cadea98aa382c136476627bd"],["/trader/js/smartcharts/html2canvas-c78ff1.smartcharts.js","0ae4bc6f8fe8997549df280580c85bb8"],["/trader/js/smartcharts/id-po-3cdbc8.smartcharts.js","b91c4ac925120746c6544fc17d073c31"],["/trader/js/smartcharts/it-po-edf79d.smartcharts.js","2aad8d954ae4ae0f031459903d8782dc"],["/trader/js/smartcharts/nl-po-6d1e52.smartcharts.js","60827db65225ff31f00b53d263f4edfe"],["/trader/js/smartcharts/pl-po-c7f985.smartcharts.js","ca2d20798ea5ef8d8c32b81a54fd703b"],["/trader/js/smartcharts/pt-po-aaec6f.smartcharts.js","783407adcfa8b46016d2dc8b2be39a66"],["/trader/js/smartcharts/ru-po-9f0c5d.smartcharts.js","18edfe06c994d4cde84cd293d504dd3e"],["/trader/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/trader/js/smartcharts/th-po-650f93.smartcharts.js","c784d0a255058385b73b59e504c81b33"],["/trader/js/smartcharts/vendors~resize-observer-polyfill-f202e8.smartcharts.js","b52a4ce9f52de8dd42942dc15164c867"],["/trader/js/smartcharts/vi-po-4c86cc.smartcharts.js","ee995e5408a03f53f5c880f6a251ce46"],["/trader/js/smartcharts/zh_cn-po-ba46f0.smartcharts.js","9cda59ab320fd2969f3905d1f6e5e80c"],["/trader/js/smartcharts/zh_tw-po-b78185.smartcharts.js","5a312bed6c388379da77ca71554631f8"],["/trader/js/statement.2a480d334ee9515e5a0e.js","1f219bb2710cfd8335db84eab79835d4"],["/trader/js/toggle-menu-drawer.2a480d334ee9515e5a0e.js","cfdf28da0bbe8780af88a0a0fc0c89e1"],["/trader/js/two-month-picker.2a480d334ee9515e5a0e.js","6bdc4fb84366c96d9beef53642f5246b"],["/trader/js/vendors~open_positions~profit_table~statement.2a480d334ee9515e5a0e.js","a7cec46a795b0c1b09a691b785269e15"],["/trader/js/vendors~smart_chart.2a480d334ee9515e5a0e.js","f9395cbba6b9661ce1aa1ec2ef02adc0"],["/trader/js/work-in-progress.2a480d334ee9515e5a0e.js","5a3e38edc6df5268b3216fa331c50e5b"],["/trader/manifest.json","88f3d9a57f42f1dc5cb5e9c1ec02c8f3"],["/trader/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/trader/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/trader/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/trader/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/trader/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/trader/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/trader/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/trader/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/trader/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/trader/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/trader/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/trader/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/trader/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/trader/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/trader/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/trader/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/trader/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/trader/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/trader/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/trader/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/trader/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/trader/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/trader/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/trader/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/trader/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/trader/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/trader/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/trader/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/trader/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/trader/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/trader/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/trader/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/trader/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/trader/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/trader/robots.txt","6978a616c585d03cb5b542a891995efb"],["/trader/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/trader/';
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







