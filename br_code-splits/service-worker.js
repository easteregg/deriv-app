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

var precacheConfig = [["/br_code-splits/404.html","8483487e5b8462268ba74f7305dc240c"],["/br_code-splits/css/app.css","fcf2df3433133268ab74c799fe0186ba"],["/br_code-splits/css/smartcharts.css","7abed6df084ad8422da0067ff98caa8c"],["/br_code-splits/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_code-splits/index.html","82cdc16aa02196ce281bc4f6db88ee9d"],["/br_code-splits/js/0.f9c1faecd472f34d6ccd.js","a231be371192926f3004d4943559ed64"],["/br_code-splits/js/1.f9c1faecd472f34d6ccd.js","b0122d76f1664c79e6a66a06a977d826"],["/br_code-splits/js/10.f9c1faecd472f34d6ccd.js","c55df093a4c5d1690ff9cf247da38025"],["/br_code-splits/js/11.f9c1faecd472f34d6ccd.js","42dc1aa4290e8c42beba8c6cfb2938b6"],["/br_code-splits/js/12.f9c1faecd472f34d6ccd.js","71744ee4536d185832148e26c0abb3d7"],["/br_code-splits/js/13.f9c1faecd472f34d6ccd.js","319c89058be86764c8fef98d463b16b4"],["/br_code-splits/js/14.f9c1faecd472f34d6ccd.js","0ce7ca63a304e51ce574b65eaedbacf0"],["/br_code-splits/js/15.f9c1faecd472f34d6ccd.js","a2aa495fda669fab4211fe4e437f9652"],["/br_code-splits/js/16.f9c1faecd472f34d6ccd.js","a0ab96e84ad92745cea745a44c2f4dc3"],["/br_code-splits/js/17.f9c1faecd472f34d6ccd.js","7b34ea7eb8d0c7b7964eb6b82017a51c"],["/br_code-splits/js/18.f9c1faecd472f34d6ccd.js","1d4647bbeebed996de0f5d75da9387cc"],["/br_code-splits/js/19.f9c1faecd472f34d6ccd.js","3d62d637e7ddd70f8803e6bc681efaa8"],["/br_code-splits/js/2.f9c1faecd472f34d6ccd.js","779a3ccc6b9fae85529952a7811097ee"],["/br_code-splits/js/20.f9c1faecd472f34d6ccd.js","69dc3ba80a97471feb3273f4dc62a65d"],["/br_code-splits/js/21.f9c1faecd472f34d6ccd.js","d789b4405dcf8b1a775e4c3f11c5ea9d"],["/br_code-splits/js/22.f9c1faecd472f34d6ccd.js","83ff3541ecb288381bab0fc9954d102f"],["/br_code-splits/js/23.f9c1faecd472f34d6ccd.js","24c7ab2b5546f8ad6148a8ead1aee47a"],["/br_code-splits/js/24.f9c1faecd472f34d6ccd.js","b0db2a38555b026233651a952158d01b"],["/br_code-splits/js/25.f9c1faecd472f34d6ccd.js","13815be23db08f8cb32e89663098ebf1"],["/br_code-splits/js/26.f9c1faecd472f34d6ccd.js","15a0dfd4283b8f329ee53f8b87a3631f"],["/br_code-splits/js/27.f9c1faecd472f34d6ccd.js","30da025fcec780780c583c857270fffd"],["/br_code-splits/js/28.f9c1faecd472f34d6ccd.js","a2907a6b45818eabafdf350f0ab558c4"],["/br_code-splits/js/29.f9c1faecd472f34d6ccd.js","59cc0889fd48ffc20d351b3b6f75700c"],["/br_code-splits/js/3.f9c1faecd472f34d6ccd.js","14641f449c5a1245b899d53c0ca6f1b1"],["/br_code-splits/js/30.f9c1faecd472f34d6ccd.js","d462ec93bc5a1b5c6aa21c66bc8ead5d"],["/br_code-splits/js/31.f9c1faecd472f34d6ccd.js","6ac42f0d60f5ae35324c56287cd88fae"],["/br_code-splits/js/32.f9c1faecd472f34d6ccd.js","7801e28cfe49137b0a51aa0bdf4d8780"],["/br_code-splits/js/33.f9c1faecd472f34d6ccd.js","159b58e100744261496d50a61da46b5e"],["/br_code-splits/js/34.f9c1faecd472f34d6ccd.js","4bd3653656c27ceadb52d0661307e1d4"],["/br_code-splits/js/35.f9c1faecd472f34d6ccd.js","5af5aa8899258d207d2d3013bd38232d"],["/br_code-splits/js/36.f9c1faecd472f34d6ccd.js","4eff094b559d63159693ef1d12754860"],["/br_code-splits/js/37.f9c1faecd472f34d6ccd.js","50304628e03fc3f121a65a2c23d019b2"],["/br_code-splits/js/38.f9c1faecd472f34d6ccd.js","6e3ebd99f9eed2c5ea88e2d37d03affd"],["/br_code-splits/js/39.f9c1faecd472f34d6ccd.js","f6e4dff8cf6ee39ca854ca34730471f7"],["/br_code-splits/js/4.f9c1faecd472f34d6ccd.js","fface46bbe5352df7238a70f06c2f213"],["/br_code-splits/js/40.f9c1faecd472f34d6ccd.js","086cdec790e4f850f7fa5d9b5e05eb38"],["/br_code-splits/js/404.f9c1faecd472f34d6ccd.js","331abb641395e58dfbe7db59b2735d4d"],["/br_code-splits/js/41.f9c1faecd472f34d6ccd.js","93aa696bb9eb09f411da382569f655d2"],["/br_code-splits/js/42.f9c1faecd472f34d6ccd.js","3db6c042562b02ff0dbc96214270ea47"],["/br_code-splits/js/43.f9c1faecd472f34d6ccd.js","ba0e860ebc13f1f4c26781345d205408"],["/br_code-splits/js/44.f9c1faecd472f34d6ccd.js","b998bf88e83bc3f15b60c779158f2816"],["/br_code-splits/js/45.f9c1faecd472f34d6ccd.js","8e9571f1490c356db2b3ec86826f0589"],["/br_code-splits/js/46.f9c1faecd472f34d6ccd.js","3297276ba1853277756219eb76cfcc72"],["/br_code-splits/js/47.f9c1faecd472f34d6ccd.js","8975b18e0048ca7f2f0a83a2723a4725"],["/br_code-splits/js/48.f9c1faecd472f34d6ccd.js","05d57cb5b503d8eeddcef3f7d18c2490"],["/br_code-splits/js/49.f9c1faecd472f34d6ccd.js","d9ff7eb12cc69c70a31110f48f7242c8"],["/br_code-splits/js/5.f9c1faecd472f34d6ccd.js","71c7313dfbd32415aa9199dad5818cfc"],["/br_code-splits/js/50.f9c1faecd472f34d6ccd.js","f2469bb20588f08711ae8a8b57e1f8c0"],["/br_code-splits/js/51.f9c1faecd472f34d6ccd.js","e711aeee8a8eb68beaf4099999d3b644"],["/br_code-splits/js/52.f9c1faecd472f34d6ccd.js","ecca0f75b95276d2e53bfdd5b3e6bc71"],["/br_code-splits/js/53.f9c1faecd472f34d6ccd.js","3912d5fb9da1e3775e915b0cbd746c88"],["/br_code-splits/js/54.f9c1faecd472f34d6ccd.js","1c59843b036fc86b3457783d6a371bed"],["/br_code-splits/js/55.f9c1faecd472f34d6ccd.js","3382392d7a5c740cd001133c29406ad8"],["/br_code-splits/js/56.f9c1faecd472f34d6ccd.js","be5efe6399e5fd6475904bbcca8c5294"],["/br_code-splits/js/57.f9c1faecd472f34d6ccd.js","52a1dbd077b9fa9e8a014ac319a85df6"],["/br_code-splits/js/58.f9c1faecd472f34d6ccd.js","a4a0f82d7ae2d128416d1bdbd32ee785"],["/br_code-splits/js/59.f9c1faecd472f34d6ccd.js","0afd174ebf9c510b5857ebecb6344614"],["/br_code-splits/js/6.f9c1faecd472f34d6ccd.js","e57c2a638209ebc31c65c811f267477f"],["/br_code-splits/js/60.f9c1faecd472f34d6ccd.js","a227aa9c69f717d82c1955d721bcd5e5"],["/br_code-splits/js/61.f9c1faecd472f34d6ccd.js","806a7989c8f3b283ed8a5a0b3e13b852"],["/br_code-splits/js/62.f9c1faecd472f34d6ccd.js","46171524420eb8e1d9e800427a63964a"],["/br_code-splits/js/63.f9c1faecd472f34d6ccd.js","04e8ba35a45bc145801e4d9bc1658680"],["/br_code-splits/js/64.f9c1faecd472f34d6ccd.js","cf93900489dbf9e47ece2f61bc01374a"],["/br_code-splits/js/65.f9c1faecd472f34d6ccd.js","fd9bb6b645df5a1dffe799fbd8532940"],["/br_code-splits/js/66.f9c1faecd472f34d6ccd.js","9563f329c7f4a712d17dc0e7cb84bc28"],["/br_code-splits/js/67.f9c1faecd472f34d6ccd.js","ac8c5b89476443f55810dbc9a9eeb0a2"],["/br_code-splits/js/68.f9c1faecd472f34d6ccd.js","4c10c81ccab47d1b4ed3ae55de6ca2bd"],["/br_code-splits/js/69.f9c1faecd472f34d6ccd.js","6ae9dcb50c7699b2eca8998f8eec4ced"],["/br_code-splits/js/7.f9c1faecd472f34d6ccd.js","900cca4e724202d26a20971c83903604"],["/br_code-splits/js/8.f9c1faecd472f34d6ccd.js","2b326ee79296e66415f20564008d934b"],["/br_code-splits/js/9.f9c1faecd472f34d6ccd.js","0ca02654bc258a027b0544b08055f42f"],["/br_code-splits/js/DenialOfServiceModal.f9c1faecd472f34d6ccd.js","609380dea4c22016c3d38768d8fe4512"],["/br_code-splits/js/MarketUnavailableModal.f9c1faecd472f34d6ccd.js","940fcb96aad7152741ffb3cdfd294421"],["/br_code-splits/js/ServicesErrorModal.f9c1faecd472f34d6ccd.js","963645756b926e35800074254d8845db"],["/br_code-splits/js/UnsupportedContractModal.f9c1faecd472f34d6ccd.js","421d1cf49c97b667813658d8bf56473f"],["/br_code-splits/js/account-info.f9c1faecd472f34d6ccd.js","68edbee71418c6374491c3e61cd0f562"],["/br_code-splits/js/contract.f9c1faecd472f34d6ccd.js","e4e509f133f5d655b61948ea3c73e3ba"],["/br_code-splits/js/main.f9c1faecd472f34d6ccd.js","37fa86b121dd346280885f935e4376c9"],["/br_code-splits/js/modals.f9c1faecd472f34d6ccd.js","25faed8c6a91bbf70bc280444802e7cd"],["/br_code-splits/js/notification-messages.f9c1faecd472f34d6ccd.js","124956939647062dc57c12c21563cc16"],["/br_code-splits/js/open_positions.f9c1faecd472f34d6ccd.js","37967443e622a73726b6bdc4e869aa01"],["/br_code-splits/js/open_positions~profit_table~statement.f9c1faecd472f34d6ccd.js","53241360841756230b2b6cff3d0b6aae"],["/br_code-splits/js/positions-drawer.f9c1faecd472f34d6ccd.js","7195ad2362b0898c417e787d03d10191"],["/br_code-splits/js/profit_table.f9c1faecd472f34d6ccd.js","36f624c7abf7a7178853359f782eead9"],["/br_code-splits/js/push-notification.f9c1faecd472f34d6ccd.js","a7ca17ccdb24be14ea05c08da00bfa98"],["/br_code-splits/js/reports.f9c1faecd472f34d6ccd.js","9ee7ca3144604bb328d53656de9bcff5"],["/br_code-splits/js/smart_chart.f9c1faecd472f34d6ccd.js","4d752dc7e85d2d002e5fae2fc90c50a6"],["/br_code-splits/js/smartcharts/chartiq-a0bb2d.smartcharts.js","2859b5a06eb9379a6f1065b51efa81cc"],["/br_code-splits/js/smartcharts/de-po-e522d0.smartcharts.js","7f153fed6e754e5a79ba509ccf85a4d8"],["/br_code-splits/js/smartcharts/es-po-61430e.smartcharts.js","905b4e1ee7aac1c8b66133646b36954e"],["/br_code-splits/js/smartcharts/fr-po-1555a4.smartcharts.js","7cc9c589cadea98aa382c136476627bd"],["/br_code-splits/js/smartcharts/html2canvas-c78ff1.smartcharts.js","0ae4bc6f8fe8997549df280580c85bb8"],["/br_code-splits/js/smartcharts/id-po-3cdbc8.smartcharts.js","b91c4ac925120746c6544fc17d073c31"],["/br_code-splits/js/smartcharts/it-po-edf79d.smartcharts.js","2aad8d954ae4ae0f031459903d8782dc"],["/br_code-splits/js/smartcharts/nl-po-6d1e52.smartcharts.js","60827db65225ff31f00b53d263f4edfe"],["/br_code-splits/js/smartcharts/pl-po-c7f985.smartcharts.js","ca2d20798ea5ef8d8c32b81a54fd703b"],["/br_code-splits/js/smartcharts/pt-po-aaec6f.smartcharts.js","783407adcfa8b46016d2dc8b2be39a66"],["/br_code-splits/js/smartcharts/ru-po-9f0c5d.smartcharts.js","18edfe06c994d4cde84cd293d504dd3e"],["/br_code-splits/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/br_code-splits/js/smartcharts/th-po-650f93.smartcharts.js","c784d0a255058385b73b59e504c81b33"],["/br_code-splits/js/smartcharts/vendors~resize-observer-polyfill-f202e8.smartcharts.js","b52a4ce9f52de8dd42942dc15164c867"],["/br_code-splits/js/smartcharts/vi-po-4c86cc.smartcharts.js","ee995e5408a03f53f5c880f6a251ce46"],["/br_code-splits/js/smartcharts/zh_cn-po-ba46f0.smartcharts.js","9cda59ab320fd2969f3905d1f6e5e80c"],["/br_code-splits/js/smartcharts/zh_tw-po-b78185.smartcharts.js","5a312bed6c388379da77ca71554631f8"],["/br_code-splits/js/statement.f9c1faecd472f34d6ccd.js","7f9e69f4071964a10e73d6dda044117b"],["/br_code-splits/js/vendors~open_positions~profit_table~statement.f9c1faecd472f34d6ccd.js","899f5d0185e9353edc525dbd18dc1bdc"],["/br_code-splits/js/vendors~smart_chart.f9c1faecd472f34d6ccd.js","e9a5aa62fc3fa1eb3b37523fcadc75d6"],["/br_code-splits/js/wip.f9c1faecd472f34d6ccd.js","e2cc7b3f28e536f265daaf6f7e9598db"],["/br_code-splits/manifest.json","7f188ada4b7bc9215bfce6b684ae8de5"],["/br_code-splits/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_code-splits/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_code-splits/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_code-splits/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_code-splits/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_code-splits/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_code-splits/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_code-splits/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_code-splits/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_code-splits/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/br_code-splits/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/br_code-splits/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/br_code-splits/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/br_code-splits/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/br_code-splits/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/br_code-splits/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/br_code-splits/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/br_code-splits/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/br_code-splits/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/br_code-splits/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/br_code-splits/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/br_code-splits/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/br_code-splits/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/br_code-splits/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_code-splits/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_code-splits/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







