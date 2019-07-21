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

var precacheConfig = [["/br_code-split-metrics-production/404.html","8483487e5b8462268ba74f7305dc240c"],["/br_code-split-metrics-production/css/app.css","afa69ece9194a08c283569a71260c450"],["/br_code-split-metrics-production/css/smartcharts.css","7abed6df084ad8422da0067ff98caa8c"],["/br_code-split-metrics-production/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_code-split-metrics-production/index.html","510007de0229c9a5b182dbfd2ece1aae"],["/br_code-split-metrics-production/js/0.7948c5f58d45b7845a6b.js","c8c8bf952401805f444658b336369157"],["/br_code-split-metrics-production/js/1.7948c5f58d45b7845a6b.js","0d1103bb25883c46d7b44f18c3602b7c"],["/br_code-split-metrics-production/js/10.7948c5f58d45b7845a6b.js","fe8738a7be25ed3a691f1bfbcbe2d4dd"],["/br_code-split-metrics-production/js/11.7948c5f58d45b7845a6b.js","2415c60c5bbf6da645300a129d3197d4"],["/br_code-split-metrics-production/js/12.7948c5f58d45b7845a6b.js","ad16bb6dc7a1c4ca941a9daab3a9bc96"],["/br_code-split-metrics-production/js/13.7948c5f58d45b7845a6b.js","cb03ba57bee474ac987bd72dbabc1483"],["/br_code-split-metrics-production/js/14.7948c5f58d45b7845a6b.js","d0ae55734cb26f057b238dfd115e95a3"],["/br_code-split-metrics-production/js/15.7948c5f58d45b7845a6b.js","4282b210e43214a88730db83087adfb8"],["/br_code-split-metrics-production/js/16.7948c5f58d45b7845a6b.js","7ff0105a247178d3e61be2d5030c9efc"],["/br_code-split-metrics-production/js/17.7948c5f58d45b7845a6b.js","00f5c726b16888d5f62f64dded48af35"],["/br_code-split-metrics-production/js/18.7948c5f58d45b7845a6b.js","6597ce899c52065bf8aacbc813d46aad"],["/br_code-split-metrics-production/js/19.7948c5f58d45b7845a6b.js","d3d34dd75edde929584b2cf0ce47e124"],["/br_code-split-metrics-production/js/2.7948c5f58d45b7845a6b.js","f0c92bcdd250a689c14e1d9dbe82cec1"],["/br_code-split-metrics-production/js/20.7948c5f58d45b7845a6b.js","8c9468c7475d16df2da1d1724de32e3e"],["/br_code-split-metrics-production/js/21.7948c5f58d45b7845a6b.js","e6c888880f47a4fb5d03d1e6a684526e"],["/br_code-split-metrics-production/js/22.7948c5f58d45b7845a6b.js","3417db3022a37e65bba2ad610441edaa"],["/br_code-split-metrics-production/js/23.7948c5f58d45b7845a6b.js","481271832a7b9c6a6a9446a968d009c1"],["/br_code-split-metrics-production/js/24.7948c5f58d45b7845a6b.js","fadf4dd3f15bfc9f018723a61bb89fc6"],["/br_code-split-metrics-production/js/25.7948c5f58d45b7845a6b.js","310a77a020af51d787132da8a08038a8"],["/br_code-split-metrics-production/js/26.7948c5f58d45b7845a6b.js","6e1bf0cbe42e0bf4d580bfc2b0a564f5"],["/br_code-split-metrics-production/js/27.7948c5f58d45b7845a6b.js","17dfc29193fa6377edd5bb0a878c2e44"],["/br_code-split-metrics-production/js/28.7948c5f58d45b7845a6b.js","5788c2cd8914977e2d4776f2105b8d36"],["/br_code-split-metrics-production/js/29.7948c5f58d45b7845a6b.js","0940432638e5d5b6889a9b4ef5e380da"],["/br_code-split-metrics-production/js/3.7948c5f58d45b7845a6b.js","84f1913c06b1170a14285566e221745e"],["/br_code-split-metrics-production/js/30.7948c5f58d45b7845a6b.js","061167b849adc54f57efbf08eb1fb4ec"],["/br_code-split-metrics-production/js/31.7948c5f58d45b7845a6b.js","350ac6f8f7330b301427c4a072cbd003"],["/br_code-split-metrics-production/js/32.7948c5f58d45b7845a6b.js","f07d80e4d273afb7ed826a4a1c1a4aae"],["/br_code-split-metrics-production/js/33.7948c5f58d45b7845a6b.js","9065f6323735e03e0cafbc22b905a8a8"],["/br_code-split-metrics-production/js/34.7948c5f58d45b7845a6b.js","0f68f119a02be7cc3d92660b9e20d312"],["/br_code-split-metrics-production/js/35.7948c5f58d45b7845a6b.js","401f194593318998584d4384034e2e89"],["/br_code-split-metrics-production/js/36.7948c5f58d45b7845a6b.js","cd516e39a560945f4579d14c40a213f0"],["/br_code-split-metrics-production/js/37.7948c5f58d45b7845a6b.js","a8b53ccdc33d98d5d67259afdb52be1c"],["/br_code-split-metrics-production/js/38.7948c5f58d45b7845a6b.js","0e65748b2df0e95f3c694a187ab14843"],["/br_code-split-metrics-production/js/39.7948c5f58d45b7845a6b.js","4d25a4b968d69d8cb0d5ac66044c9e21"],["/br_code-split-metrics-production/js/4.7948c5f58d45b7845a6b.js","1bd22077fdc616f05a0776e33817704d"],["/br_code-split-metrics-production/js/40.7948c5f58d45b7845a6b.js","fd0b7d314806aacd85f9719be100dfda"],["/br_code-split-metrics-production/js/404.7948c5f58d45b7845a6b.js","174df37a617cd1a84c736cd1ad766a97"],["/br_code-split-metrics-production/js/41.7948c5f58d45b7845a6b.js","667c55b0dd51b6416ce3e42a7aadaae7"],["/br_code-split-metrics-production/js/42.7948c5f58d45b7845a6b.js","a0daa85b21f5a4018db655ff931a8469"],["/br_code-split-metrics-production/js/43.7948c5f58d45b7845a6b.js","e55f12a587f75f1268b80f3853b245a1"],["/br_code-split-metrics-production/js/44.7948c5f58d45b7845a6b.js","7528f37583ae62139184c4ad1cb6a511"],["/br_code-split-metrics-production/js/45.7948c5f58d45b7845a6b.js","cdeb647e9934df0fb9f7791106f15bcc"],["/br_code-split-metrics-production/js/46.7948c5f58d45b7845a6b.js","760761192f14875e1f6042eb1f817b69"],["/br_code-split-metrics-production/js/47.7948c5f58d45b7845a6b.js","deecadcc9e21fef62ccbb808ea46371f"],["/br_code-split-metrics-production/js/48.7948c5f58d45b7845a6b.js","8eddde21f7948c4872fec075ea8ace65"],["/br_code-split-metrics-production/js/49.7948c5f58d45b7845a6b.js","6abd491598d5b98c4a6c21005a1d3fa1"],["/br_code-split-metrics-production/js/5.7948c5f58d45b7845a6b.js","d83231599111c20c9f9f669b194684f1"],["/br_code-split-metrics-production/js/50.7948c5f58d45b7845a6b.js","4cab57d9b4e2ab46fb72589a4964c813"],["/br_code-split-metrics-production/js/51.7948c5f58d45b7845a6b.js","177432aa0472c3795054386b288f09b2"],["/br_code-split-metrics-production/js/52.7948c5f58d45b7845a6b.js","84d5c260d2debfe9e4523fe3ce61e2c6"],["/br_code-split-metrics-production/js/53.7948c5f58d45b7845a6b.js","0c333b63848a853e7d6d5337ded7e106"],["/br_code-split-metrics-production/js/54.7948c5f58d45b7845a6b.js","5586ab50f457a6ff7956f8547359cb06"],["/br_code-split-metrics-production/js/55.7948c5f58d45b7845a6b.js","d6d0731f3fd075b96160dd4fc132b151"],["/br_code-split-metrics-production/js/56.7948c5f58d45b7845a6b.js","891adc2d0005852afb439d6653c0b70e"],["/br_code-split-metrics-production/js/57.7948c5f58d45b7845a6b.js","dbde1083d14ce6f33a34bdc208b599d2"],["/br_code-split-metrics-production/js/58.7948c5f58d45b7845a6b.js","3057a6d439828330e7bdcc011cb0b310"],["/br_code-split-metrics-production/js/59.7948c5f58d45b7845a6b.js","e0a90f8dc9a9c57f48657352649824e1"],["/br_code-split-metrics-production/js/6.7948c5f58d45b7845a6b.js","afe9859873157c9b72bcc21579d83ef1"],["/br_code-split-metrics-production/js/60.7948c5f58d45b7845a6b.js","16381ae863b0f84ed13bb7621d066a1b"],["/br_code-split-metrics-production/js/61.7948c5f58d45b7845a6b.js","47a2840531e3f2d80da5369f5a619afc"],["/br_code-split-metrics-production/js/62.7948c5f58d45b7845a6b.js","676fa5d3ed2bf1fcfd93686c30d1258a"],["/br_code-split-metrics-production/js/63.7948c5f58d45b7845a6b.js","394ec6944361dc3fdce46617e6b0b9f6"],["/br_code-split-metrics-production/js/64.7948c5f58d45b7845a6b.js","0e9b838c1e439b8e8003a08901f3e46f"],["/br_code-split-metrics-production/js/65.7948c5f58d45b7845a6b.js","bfaaa76ae20a2cebc3719b080dedd414"],["/br_code-split-metrics-production/js/66.7948c5f58d45b7845a6b.js","9ae9d6efcacbd3841e1f63d8baf043f8"],["/br_code-split-metrics-production/js/67.7948c5f58d45b7845a6b.js","77f29daed206d5cd667368a9476c8f87"],["/br_code-split-metrics-production/js/68.7948c5f58d45b7845a6b.js","536a6da1d18c365e936193980fb7bbcf"],["/br_code-split-metrics-production/js/69.7948c5f58d45b7845a6b.js","fbb26f665d56c2c85bf83484c1570d30"],["/br_code-split-metrics-production/js/7.7948c5f58d45b7845a6b.js","cb4fadae3cb8f9d8581f438c320385c7"],["/br_code-split-metrics-production/js/8.7948c5f58d45b7845a6b.js","4339659ac52c0f09dddc720f292e6f1b"],["/br_code-split-metrics-production/js/9.7948c5f58d45b7845a6b.js","fb2484417184b823d51394064f4d20b2"],["/br_code-split-metrics-production/js/account-info.7948c5f58d45b7845a6b.js","d4d78dcfd1c5f9cbbbefdd220e511263"],["/br_code-split-metrics-production/js/commons-main-i18next.js.7948c5f58d45b7845a6b.js","c85de9b883faa2a4a706807173303d47"],["/br_code-split-metrics-production/js/commons-main-index.js.7948c5f58d45b7845a6b.js","1e3edec77d2de91f22e2936da86a7c01"],["/br_code-split-metrics-production/js/commons-open_positions~profit_table~statement-index.esm.js.7948c5f58d45b7845a6b.js","abf342d7fad5de409487c770b44607ca"],["/br_code-split-metrics-production/js/commons-smart_chart-smartcharts.js.7948c5f58d45b7845a6b.js","6f38c91ade3141707f4031988dcf9387"],["/br_code-split-metrics-production/js/contract.7948c5f58d45b7845a6b.js","4fffa47a01bf0386d9000e04f303fc71"],["/br_code-split-metrics-production/js/main.7948c5f58d45b7845a6b.js","1c26a35c3c3802842ecd84100f23b43a"],["/br_code-split-metrics-production/js/mobile-wip.7948c5f58d45b7845a6b.js","117aa1ba9f718537f991f3e373a2bfa4"],["/br_code-split-metrics-production/js/module-routes.7948c5f58d45b7845a6b.js","3e7aa45d3a4aab8c9b3cc9a9c6be6676"],["/br_code-split-metrics-production/js/notification-messages.7948c5f58d45b7845a6b.js","051748ad45081827cb0149e3463430e0"],["/br_code-split-metrics-production/js/open_positions.7948c5f58d45b7845a6b.js","7b2bc7799cea4d3dc250634c4fd24191"],["/br_code-split-metrics-production/js/positions-drawer.7948c5f58d45b7845a6b.js","9ae9c0730d84a5ab153e46225ad12276"],["/br_code-split-metrics-production/js/profit_table.7948c5f58d45b7845a6b.js","40c1377ebf7e1e81ea60aecb21ded860"],["/br_code-split-metrics-production/js/profit_table~statement.7948c5f58d45b7845a6b.js","7d37b6258658d2b31e99c0e0ee003ba9"],["/br_code-split-metrics-production/js/push-notification.7948c5f58d45b7845a6b.js","7b7bc4fcb2d4586c36340b64da1ab065"],["/br_code-split-metrics-production/js/reports.7948c5f58d45b7845a6b.js","162120a679f2adc9bc8a86a6b5a87932"],["/br_code-split-metrics-production/js/smart_chart.7948c5f58d45b7845a6b.js","ec84431d0224ea849d1e4933c50d1480"],["/br_code-split-metrics-production/js/smartcharts/chartiq-a0bb2d.smartcharts.js","2859b5a06eb9379a6f1065b51efa81cc"],["/br_code-split-metrics-production/js/smartcharts/de-po-e522d0.smartcharts.js","7f153fed6e754e5a79ba509ccf85a4d8"],["/br_code-split-metrics-production/js/smartcharts/es-po-61430e.smartcharts.js","905b4e1ee7aac1c8b66133646b36954e"],["/br_code-split-metrics-production/js/smartcharts/fr-po-1555a4.smartcharts.js","7cc9c589cadea98aa382c136476627bd"],["/br_code-split-metrics-production/js/smartcharts/html2canvas-c78ff1.smartcharts.js","0ae4bc6f8fe8997549df280580c85bb8"],["/br_code-split-metrics-production/js/smartcharts/id-po-3cdbc8.smartcharts.js","b91c4ac925120746c6544fc17d073c31"],["/br_code-split-metrics-production/js/smartcharts/it-po-edf79d.smartcharts.js","2aad8d954ae4ae0f031459903d8782dc"],["/br_code-split-metrics-production/js/smartcharts/nl-po-6d1e52.smartcharts.js","60827db65225ff31f00b53d263f4edfe"],["/br_code-split-metrics-production/js/smartcharts/pl-po-c7f985.smartcharts.js","ca2d20798ea5ef8d8c32b81a54fd703b"],["/br_code-split-metrics-production/js/smartcharts/pt-po-aaec6f.smartcharts.js","783407adcfa8b46016d2dc8b2be39a66"],["/br_code-split-metrics-production/js/smartcharts/ru-po-9f0c5d.smartcharts.js","18edfe06c994d4cde84cd293d504dd3e"],["/br_code-split-metrics-production/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/br_code-split-metrics-production/js/smartcharts/th-po-650f93.smartcharts.js","c784d0a255058385b73b59e504c81b33"],["/br_code-split-metrics-production/js/smartcharts/vendors~resize-observer-polyfill-f202e8.smartcharts.js","b52a4ce9f52de8dd42942dc15164c867"],["/br_code-split-metrics-production/js/smartcharts/vi-po-4c86cc.smartcharts.js","ee995e5408a03f53f5c880f6a251ce46"],["/br_code-split-metrics-production/js/smartcharts/zh_cn-po-ba46f0.smartcharts.js","9cda59ab320fd2969f3905d1f6e5e80c"],["/br_code-split-metrics-production/js/smartcharts/zh_tw-po-b78185.smartcharts.js","5a312bed6c388379da77ca71554631f8"],["/br_code-split-metrics-production/js/statement.7948c5f58d45b7845a6b.js","f71ead5b586429b0e1a1c602aeaed04e"],["/br_code-split-metrics-production/manifest.json","3a86c7831d32f04e786b4d7c5435d3b5"],["/br_code-split-metrics-production/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_code-split-metrics-production/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_code-split-metrics-production/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_code-split-metrics-production/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_code-split-metrics-production/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_code-split-metrics-production/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_code-split-metrics-production/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_code-split-metrics-production/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_code-split-metrics-production/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_code-split-metrics-production/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/br_code-split-metrics-production/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/br_code-split-metrics-production/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/br_code-split-metrics-production/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/br_code-split-metrics-production/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/br_code-split-metrics-production/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/br_code-split-metrics-production/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/br_code-split-metrics-production/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/br_code-split-metrics-production/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/br_code-split-metrics-production/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/br_code-split-metrics-production/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/br_code-split-metrics-production/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/br_code-split-metrics-production/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/br_code-split-metrics-production/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/br_code-split-metrics-production/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_code-split-metrics-production/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_code-split-metrics-production/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/br_code-split-metrics-production/';
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






