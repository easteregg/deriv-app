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

var precacheConfig = [["/br_code-splits/404.html","8483487e5b8462268ba74f7305dc240c"],["/br_code-splits/css/app.css","fcf2df3433133268ab74c799fe0186ba"],["/br_code-splits/css/smartcharts.css","7abed6df084ad8422da0067ff98caa8c"],["/br_code-splits/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_code-splits/index.html","9c7bfef426067a16375365bac37f817a"],["/br_code-splits/js/0.ad422d9882228c95994e.js","8706023937943564866c0a1c570c9d27"],["/br_code-splits/js/1.ad422d9882228c95994e.js","564d20e3f4e53b31862adc2ad0df68f0"],["/br_code-splits/js/10.ad422d9882228c95994e.js","7ba9deac782b3ca329705b2203709168"],["/br_code-splits/js/11.ad422d9882228c95994e.js","43490d6368e9d42e5251cda8f062f237"],["/br_code-splits/js/12.ad422d9882228c95994e.js","02c1941365b1033403c7747cd79f0172"],["/br_code-splits/js/13.ad422d9882228c95994e.js","113481321d60c2cdfb5a837cf4189b88"],["/br_code-splits/js/14.ad422d9882228c95994e.js","fe41b2329c306f04ce6c4e41ff512deb"],["/br_code-splits/js/15.ad422d9882228c95994e.js","d0ac713a2abf7b231b7250afbc866adf"],["/br_code-splits/js/16.ad422d9882228c95994e.js","486418789f30b0a8b03165c305761553"],["/br_code-splits/js/17.ad422d9882228c95994e.js","04d860d41a99ad8cff64379f49d014cd"],["/br_code-splits/js/18.ad422d9882228c95994e.js","1fd88d96c587a4b823625ff0f6c95e9b"],["/br_code-splits/js/19.ad422d9882228c95994e.js","39728aec62053b4a46ecdea81491ad73"],["/br_code-splits/js/2.ad422d9882228c95994e.js","5ddb56f88e524af7c14b0507fc650b22"],["/br_code-splits/js/20.ad422d9882228c95994e.js","aed5afc9fc0efaeea6ad536335eacc8e"],["/br_code-splits/js/21.ad422d9882228c95994e.js","b737511e8cb32b9cbb9b6061d142229a"],["/br_code-splits/js/22.ad422d9882228c95994e.js","1172e4bde69f3fb5a8723b15553f036b"],["/br_code-splits/js/23.ad422d9882228c95994e.js","8f25dce5f03ba62d701ee1c361773802"],["/br_code-splits/js/24.ad422d9882228c95994e.js","0ba2ccb15f833efcf7249f64489394e5"],["/br_code-splits/js/25.ad422d9882228c95994e.js","65d313cb5b660c3067e3399abe0250d2"],["/br_code-splits/js/26.ad422d9882228c95994e.js","3b415763de32e7aa4774472e7d77cb95"],["/br_code-splits/js/27.ad422d9882228c95994e.js","401369983f0fc85c2f3392753b2a0348"],["/br_code-splits/js/28.ad422d9882228c95994e.js","cdefe8725b0370afaf94a6288ddaf105"],["/br_code-splits/js/29.ad422d9882228c95994e.js","04ed67ce5eb8ea52cf5cfe6c282e5ad7"],["/br_code-splits/js/3.ad422d9882228c95994e.js","72a331798285d0965595239661e07775"],["/br_code-splits/js/30.ad422d9882228c95994e.js","db02d766ab2bee08c83096a554737a61"],["/br_code-splits/js/31.ad422d9882228c95994e.js","992a986c8403b83c0b16c1624f301da4"],["/br_code-splits/js/32.ad422d9882228c95994e.js","98c324bdf859074fb4edfc9d1b389a36"],["/br_code-splits/js/33.ad422d9882228c95994e.js","6ccbf0f723d1608eba6b10eb0670de81"],["/br_code-splits/js/34.ad422d9882228c95994e.js","b78f4e48cba30b08324a2ac3101deffb"],["/br_code-splits/js/35.ad422d9882228c95994e.js","302699d83698d7e204a6035974dbd23c"],["/br_code-splits/js/36.ad422d9882228c95994e.js","a9977f8004a6f721bed5db372c0bcd48"],["/br_code-splits/js/37.ad422d9882228c95994e.js","0fea4bc8daca39baf46861afa3659f45"],["/br_code-splits/js/38.ad422d9882228c95994e.js","734e6409d050ee04e14a2765514f0fe0"],["/br_code-splits/js/39.ad422d9882228c95994e.js","773d1f8e6fae0f6f4fcb273613287fb2"],["/br_code-splits/js/4.ad422d9882228c95994e.js","fce7a3bbe51a8ef52470ebe1be552674"],["/br_code-splits/js/40.ad422d9882228c95994e.js","28a8cf65963d43b17b1bf5dcd4ac7758"],["/br_code-splits/js/404.ad422d9882228c95994e.js","aad10b52889c21d41e3738f9472985ae"],["/br_code-splits/js/41.ad422d9882228c95994e.js","981c444168003d242e9473e1367beefc"],["/br_code-splits/js/42.ad422d9882228c95994e.js","82e923c09194da141f879617381721bb"],["/br_code-splits/js/43.ad422d9882228c95994e.js","f71f648de7c7584aec07b37a7910c939"],["/br_code-splits/js/44.ad422d9882228c95994e.js","d0255e9e3f50ba015b94e9c831c8d816"],["/br_code-splits/js/45.ad422d9882228c95994e.js","98e07eadf979d335237b391c570dd045"],["/br_code-splits/js/46.ad422d9882228c95994e.js","f70ea9150d87e38bd6af3afc6503f3e6"],["/br_code-splits/js/47.ad422d9882228c95994e.js","718054d42a242018153707091f0dcef0"],["/br_code-splits/js/48.ad422d9882228c95994e.js","f19c0bb3bf965431021906735b980927"],["/br_code-splits/js/49.ad422d9882228c95994e.js","78e3826985a95c82ed32336b26521117"],["/br_code-splits/js/5.ad422d9882228c95994e.js","0f71c6ad04222aab0fc4f875df84cc9c"],["/br_code-splits/js/50.ad422d9882228c95994e.js","ff14ddd07a1687cda5625df82872977c"],["/br_code-splits/js/51.ad422d9882228c95994e.js","4daf12dc514e3c5b7977f41f9cfce90f"],["/br_code-splits/js/52.ad422d9882228c95994e.js","8bc8d13d4450d6235e1f0417d334ae36"],["/br_code-splits/js/53.ad422d9882228c95994e.js","688d6ab0384e17d9ce2abbd7ce33478d"],["/br_code-splits/js/54.ad422d9882228c95994e.js","b26cf8e00cc9fcda81073628ebd43b8d"],["/br_code-splits/js/55.ad422d9882228c95994e.js","7d8b69c586520032b4fd534fa556f584"],["/br_code-splits/js/56.ad422d9882228c95994e.js","a7c2fd5281dc0cc5d4eabff8352a6aa2"],["/br_code-splits/js/57.ad422d9882228c95994e.js","e3b7afb214f6799db371f3298297a436"],["/br_code-splits/js/58.ad422d9882228c95994e.js","222b7dc6ab6e36f64a04d1fe683f8f6d"],["/br_code-splits/js/59.ad422d9882228c95994e.js","ef2f0fa255f7b9dd2d2193e2b5956782"],["/br_code-splits/js/6.ad422d9882228c95994e.js","ca2f2015f1d8993193d5643d24a4e61b"],["/br_code-splits/js/60.ad422d9882228c95994e.js","5349433a4e2c1f293d688a394a61ba43"],["/br_code-splits/js/61.ad422d9882228c95994e.js","f37ae98756205cde07219b69589924e8"],["/br_code-splits/js/62.ad422d9882228c95994e.js","3e2449d87281b61c9e01a02f1a299b3c"],["/br_code-splits/js/63.ad422d9882228c95994e.js","1673c1e3abe34d805cbd2cfde60c30d7"],["/br_code-splits/js/64.ad422d9882228c95994e.js","f8ad50869c4614b8e7b8de63886bc250"],["/br_code-splits/js/65.ad422d9882228c95994e.js","078cc85dd44b7a45af49adbe5609d481"],["/br_code-splits/js/66.ad422d9882228c95994e.js","73eec44fd91ade42f1a452611217bfce"],["/br_code-splits/js/67.ad422d9882228c95994e.js","1ec7cc9b821235ac2c0f774707ed7993"],["/br_code-splits/js/68.ad422d9882228c95994e.js","8df7084d8d0fe4f69a20d65632f6f433"],["/br_code-splits/js/69.ad422d9882228c95994e.js","43047feb36d0c2bf1d96886193a4c673"],["/br_code-splits/js/7.ad422d9882228c95994e.js","f95e48694cb27a3b2987eec134bd8e55"],["/br_code-splits/js/8.ad422d9882228c95994e.js","e1d827e916d6df29c21d5be4fdf45ab0"],["/br_code-splits/js/9.ad422d9882228c95994e.js","7a998d0f2a6cdd9f51231d46218398cf"],["/br_code-splits/js/DenialOfServiceModal.ad422d9882228c95994e.js","4ef36a9697a7fd54d44632d19a2f9406"],["/br_code-splits/js/MarketUnavailableModal.ad422d9882228c95994e.js","69029d5a776de8bec094f7a4194018af"],["/br_code-splits/js/ServicesErrorModal.ad422d9882228c95994e.js","838d12fff8e9543a951e26fc0b9002bd"],["/br_code-splits/js/UnsupportedContractModal.ad422d9882228c95994e.js","178565f0915b5e0f23754a1097cca559"],["/br_code-splits/js/account-info.ad422d9882228c95994e.js","25b038e963116646bc77336da114c590"],["/br_code-splits/js/contract.ad422d9882228c95994e.js","cc4e905723e9c7d9eaa48b758aa29033"],["/br_code-splits/js/main.ad422d9882228c95994e.js","6eeab135d68c999a7b198279521d933d"],["/br_code-splits/js/modals.ad422d9882228c95994e.js","9f77827d4f27ceb52db1b7ce3442a15d"],["/br_code-splits/js/notification-messages.ad422d9882228c95994e.js","1e7bb9fb4f736ac48139d245fb127874"],["/br_code-splits/js/open_positions.ad422d9882228c95994e.js","e354a8d4a1edc58ab5ca3b55a71a0124"],["/br_code-splits/js/open_positions~profit_table~statement.ad422d9882228c95994e.js","257a02f0bdb63ae0758447ac6fb559d0"],["/br_code-splits/js/positions-drawer.ad422d9882228c95994e.js","61b82b14b8ea86f24b929dcad92e6c4e"],["/br_code-splits/js/profit_table.ad422d9882228c95994e.js","7fabb7015773014ef9fadee733b24da8"],["/br_code-splits/js/push-notification.ad422d9882228c95994e.js","2fb120392929c6ef621c326891e27e5a"],["/br_code-splits/js/reports.ad422d9882228c95994e.js","eb7302be8001741cb60606deb03d355e"],["/br_code-splits/js/smart_chart.ad422d9882228c95994e.js","70d3319a0a506e2e39c4dcfbe843898f"],["/br_code-splits/js/smartcharts/chartiq-a0bb2d.smartcharts.js","2859b5a06eb9379a6f1065b51efa81cc"],["/br_code-splits/js/smartcharts/de-po-e522d0.smartcharts.js","7f153fed6e754e5a79ba509ccf85a4d8"],["/br_code-splits/js/smartcharts/es-po-61430e.smartcharts.js","905b4e1ee7aac1c8b66133646b36954e"],["/br_code-splits/js/smartcharts/fr-po-1555a4.smartcharts.js","7cc9c589cadea98aa382c136476627bd"],["/br_code-splits/js/smartcharts/html2canvas-c78ff1.smartcharts.js","0ae4bc6f8fe8997549df280580c85bb8"],["/br_code-splits/js/smartcharts/id-po-3cdbc8.smartcharts.js","b91c4ac925120746c6544fc17d073c31"],["/br_code-splits/js/smartcharts/it-po-edf79d.smartcharts.js","2aad8d954ae4ae0f031459903d8782dc"],["/br_code-splits/js/smartcharts/nl-po-6d1e52.smartcharts.js","60827db65225ff31f00b53d263f4edfe"],["/br_code-splits/js/smartcharts/pl-po-c7f985.smartcharts.js","ca2d20798ea5ef8d8c32b81a54fd703b"],["/br_code-splits/js/smartcharts/pt-po-aaec6f.smartcharts.js","783407adcfa8b46016d2dc8b2be39a66"],["/br_code-splits/js/smartcharts/ru-po-9f0c5d.smartcharts.js","18edfe06c994d4cde84cd293d504dd3e"],["/br_code-splits/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/br_code-splits/js/smartcharts/th-po-650f93.smartcharts.js","c784d0a255058385b73b59e504c81b33"],["/br_code-splits/js/smartcharts/vendors~resize-observer-polyfill-f202e8.smartcharts.js","b52a4ce9f52de8dd42942dc15164c867"],["/br_code-splits/js/smartcharts/vi-po-4c86cc.smartcharts.js","ee995e5408a03f53f5c880f6a251ce46"],["/br_code-splits/js/smartcharts/zh_cn-po-ba46f0.smartcharts.js","9cda59ab320fd2969f3905d1f6e5e80c"],["/br_code-splits/js/smartcharts/zh_tw-po-b78185.smartcharts.js","5a312bed6c388379da77ca71554631f8"],["/br_code-splits/js/statement.ad422d9882228c95994e.js","4566bfc02222112339aee899ae2876e4"],["/br_code-splits/js/vendors~open_positions~profit_table~statement.ad422d9882228c95994e.js","af2637f93fc83e751216a8dbfcab05e9"],["/br_code-splits/js/vendors~smart_chart.ad422d9882228c95994e.js","8de96acd5ef0a49656ff1fea43c76d41"],["/br_code-splits/js/wip.ad422d9882228c95994e.js","7c82641178741a863dc6a528bb1b4db5"],["/br_code-splits/manifest.json","7f188ada4b7bc9215bfce6b684ae8de5"],["/br_code-splits/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_code-splits/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_code-splits/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_code-splits/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_code-splits/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_code-splits/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_code-splits/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_code-splits/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_code-splits/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/br_code-splits/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/br_code-splits/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/br_code-splits/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/br_code-splits/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/br_code-splits/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/br_code-splits/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/br_code-splits/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/br_code-splits/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/br_code-splits/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/br_code-splits/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/br_code-splits/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/br_code-splits/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/br_code-splits/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/br_code-splits/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_code-splits/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_code-splits/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/br_code-splits/';
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







