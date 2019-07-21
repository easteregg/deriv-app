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

var precacheConfig = [["/br_code-split-metrics/404.html","8483487e5b8462268ba74f7305dc240c"],["/br_code-split-metrics/css/app.css","dc4046c98b9fa19ed856dfada2e6c2f8"],["/br_code-split-metrics/css/smartcharts.css","7abed6df084ad8422da0067ff98caa8c"],["/br_code-split-metrics/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_code-split-metrics/index.html","2106f54d61b0823368913d362afcb680"],["/br_code-split-metrics/js/0.e3cfede6aa9753a69500.js","5484bb43592d84c758b540c46cedd4ad"],["/br_code-split-metrics/js/1.e3cfede6aa9753a69500.js","3bb82344cfae3e94b976006e16ef0f6d"],["/br_code-split-metrics/js/10.e3cfede6aa9753a69500.js","31cf6e11dbbe8baa875312559e02ff88"],["/br_code-split-metrics/js/11.e3cfede6aa9753a69500.js","ca05e8150a80aa61439758282e75ef30"],["/br_code-split-metrics/js/12.e3cfede6aa9753a69500.js","614fba43013ce8d977edfda01252070f"],["/br_code-split-metrics/js/13.e3cfede6aa9753a69500.js","0f9110820d0f90f5c061bc45bf8a9d90"],["/br_code-split-metrics/js/14.e3cfede6aa9753a69500.js","7e8c5fd9561afb1b9c4dfa83941b7777"],["/br_code-split-metrics/js/15.e3cfede6aa9753a69500.js","ad047001d279087202c9118fcb249821"],["/br_code-split-metrics/js/16.e3cfede6aa9753a69500.js","e2f77413d3c78723c2a327d32653134d"],["/br_code-split-metrics/js/17.e3cfede6aa9753a69500.js","229146fe84913a22a6f92275b1e453d6"],["/br_code-split-metrics/js/18.e3cfede6aa9753a69500.js","b489ee6fda070a78668a398beb564624"],["/br_code-split-metrics/js/19.e3cfede6aa9753a69500.js","c1b1691b5750de6e1e869f0b657b2df7"],["/br_code-split-metrics/js/2.e3cfede6aa9753a69500.js","13de4457ae0dac0af67ea336a017e4ad"],["/br_code-split-metrics/js/20.e3cfede6aa9753a69500.js","0b2198a86923bd1c011c479fd439bbc0"],["/br_code-split-metrics/js/21.e3cfede6aa9753a69500.js","0033adc25deea5e35cdbc919fe7619d0"],["/br_code-split-metrics/js/22.e3cfede6aa9753a69500.js","498c82fe029679c6221aed9cb62aa060"],["/br_code-split-metrics/js/23.e3cfede6aa9753a69500.js","7930ec40aa2083fad72ce85cc7ae33f6"],["/br_code-split-metrics/js/24.e3cfede6aa9753a69500.js","6962706da94ae1783a895917bf5b3a7b"],["/br_code-split-metrics/js/25.e3cfede6aa9753a69500.js","a5432bbbf4d6f70e550476b0ceb3e4bc"],["/br_code-split-metrics/js/26.e3cfede6aa9753a69500.js","76125d17b9fa03fb73140805c358beaf"],["/br_code-split-metrics/js/27.e3cfede6aa9753a69500.js","c91013174762085fc7b11ac17d7f628c"],["/br_code-split-metrics/js/28.e3cfede6aa9753a69500.js","c56c10288323bc7efeb5ed73311e8935"],["/br_code-split-metrics/js/29.e3cfede6aa9753a69500.js","698a13fd923b35b83486324ddf083a6e"],["/br_code-split-metrics/js/3.e3cfede6aa9753a69500.js","3be99bc9fd84f8b5ecc3cd6bc8911d22"],["/br_code-split-metrics/js/30.e3cfede6aa9753a69500.js","23659b39b64330c7f2519147216f4345"],["/br_code-split-metrics/js/31.e3cfede6aa9753a69500.js","f414dce83d6104589f6e5340b0485cab"],["/br_code-split-metrics/js/32.e3cfede6aa9753a69500.js","56d26d58667b5cbdd40a3ece31c4580c"],["/br_code-split-metrics/js/33.e3cfede6aa9753a69500.js","5b1f1b5d6b9cfb8e442066134ec024f2"],["/br_code-split-metrics/js/34.e3cfede6aa9753a69500.js","6027d4541c5c41263eba9ad2ca602390"],["/br_code-split-metrics/js/35.e3cfede6aa9753a69500.js","fea50ecb7d2c872613ed851b52ba6d9f"],["/br_code-split-metrics/js/36.e3cfede6aa9753a69500.js","400a6796c33b07b4225fbe42bedbd493"],["/br_code-split-metrics/js/37.e3cfede6aa9753a69500.js","ac0e4b80f22047f639f306880805766c"],["/br_code-split-metrics/js/38.e3cfede6aa9753a69500.js","3b837a08dde58b19b5414765b32cbdae"],["/br_code-split-metrics/js/39.e3cfede6aa9753a69500.js","0b808d09be37c27d2a681b2bb4d63a40"],["/br_code-split-metrics/js/4.e3cfede6aa9753a69500.js","0838cbb4f86e46d98c4402093d4593ef"],["/br_code-split-metrics/js/40.e3cfede6aa9753a69500.js","3f67dde4fc767b4a8b0dd88652f2c5a6"],["/br_code-split-metrics/js/404.e3cfede6aa9753a69500.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/br_code-split-metrics/js/41.e3cfede6aa9753a69500.js","632803018fe81dcc0e7659588bf5139e"],["/br_code-split-metrics/js/42.e3cfede6aa9753a69500.js","975df935b098bbc1d0c1528bbd8a1aea"],["/br_code-split-metrics/js/43.e3cfede6aa9753a69500.js","ccdf94667c5546861f29d2bd1dd7ed60"],["/br_code-split-metrics/js/44.e3cfede6aa9753a69500.js","510f2cbef531eda1cfbaddee35b015ea"],["/br_code-split-metrics/js/45.e3cfede6aa9753a69500.js","a8ae2bb2eca5213e1c6e1e193cf1269c"],["/br_code-split-metrics/js/46.e3cfede6aa9753a69500.js","4025eeb7b930ae53547b0e03bdf300fd"],["/br_code-split-metrics/js/47.e3cfede6aa9753a69500.js","b8601e4dd38c5aceb437e1174ba65bd7"],["/br_code-split-metrics/js/48.e3cfede6aa9753a69500.js","ef61e0642c0041cef09b684bee42df1a"],["/br_code-split-metrics/js/49.e3cfede6aa9753a69500.js","89040986b79313e074ed5861328090bb"],["/br_code-split-metrics/js/5.e3cfede6aa9753a69500.js","12c8bf3690c831243dcd8cf83de95898"],["/br_code-split-metrics/js/50.e3cfede6aa9753a69500.js","56d18d7819ede45a82f2d49d0c336703"],["/br_code-split-metrics/js/51.e3cfede6aa9753a69500.js","0bec6be93b6544c62fd05a4096d4e30f"],["/br_code-split-metrics/js/52.e3cfede6aa9753a69500.js","d31125224f926f8556249971f765efbd"],["/br_code-split-metrics/js/53.e3cfede6aa9753a69500.js","5ba74fd3e177921eddf58187b98f54ba"],["/br_code-split-metrics/js/54.e3cfede6aa9753a69500.js","f0eb8c02d129a04969038aa9d5657e99"],["/br_code-split-metrics/js/55.e3cfede6aa9753a69500.js","dc2f73d8b4da8e0f33f316109b23c543"],["/br_code-split-metrics/js/56.e3cfede6aa9753a69500.js","5058e9f6add1ffe42b591ac01540b98f"],["/br_code-split-metrics/js/57.e3cfede6aa9753a69500.js","9101a0638014d1ca2ec26b6cb4545e9e"],["/br_code-split-metrics/js/58.e3cfede6aa9753a69500.js","d93fea8da54b00775285c5e069873be6"],["/br_code-split-metrics/js/59.e3cfede6aa9753a69500.js","fa1c0b97c228b08e037a2a555f8b3f45"],["/br_code-split-metrics/js/6.e3cfede6aa9753a69500.js","8b55f396f4e14a7d21d0d18cca25bd80"],["/br_code-split-metrics/js/60.e3cfede6aa9753a69500.js","12751673f8a54e165eaab54e9c62fdd4"],["/br_code-split-metrics/js/61.e3cfede6aa9753a69500.js","f58a08d4fc2b10c4405d4f09df65ade7"],["/br_code-split-metrics/js/62.e3cfede6aa9753a69500.js","6cb60162d2008b45bef13b7b136a778e"],["/br_code-split-metrics/js/63.e3cfede6aa9753a69500.js","3d17828c4f15dd9cf13b84ccc2b8b9ed"],["/br_code-split-metrics/js/64.e3cfede6aa9753a69500.js","8dab714d175ce0e8217e19958d22685f"],["/br_code-split-metrics/js/65.e3cfede6aa9753a69500.js","0e9caa56274fe23544e2d27681e17309"],["/br_code-split-metrics/js/66.e3cfede6aa9753a69500.js","3c10365197566b71bf9b19c8777ae6de"],["/br_code-split-metrics/js/67.e3cfede6aa9753a69500.js","c43ef927a028de4555136ffafd0ea983"],["/br_code-split-metrics/js/68.e3cfede6aa9753a69500.js","c024e0767640bb5361340429fb3069f3"],["/br_code-split-metrics/js/69.e3cfede6aa9753a69500.js","1ec54b33cfb65e74754021f2969fff81"],["/br_code-split-metrics/js/7.e3cfede6aa9753a69500.js","9bcabe4dfc6e5f477219f401b32334ef"],["/br_code-split-metrics/js/8.e3cfede6aa9753a69500.js","8522b40cc5d7e496d0716c985f11dd7d"],["/br_code-split-metrics/js/9.e3cfede6aa9753a69500.js","fddc38ab360fc84a61371e45679a9498"],["/br_code-split-metrics/js/account-info.e3cfede6aa9753a69500.js","f210a2e889c61eea6f5d827aa26b5044"],["/br_code-split-metrics/js/contract.e3cfede6aa9753a69500.js","ff7ab8120ff76fe2e1ca6b4e9f7f02cb"],["/br_code-split-metrics/js/contract~positions-drawer.e3cfede6aa9753a69500.js","f8195fb075b69d3d7f6bae7bc3484a35"],["/br_code-split-metrics/js/notification-messages.e3cfede6aa9753a69500.js","7afb99951a48c6664b7b1282883b0d3a"],["/br_code-split-metrics/js/open_positions.e3cfede6aa9753a69500.js","1fc1b7b908937b9cd37fa021895fed7b"],["/br_code-split-metrics/js/open_positions~profit_table~statement.e3cfede6aa9753a69500.js","05d5ca6f813ce7c00eea39c1f67d820c"],["/br_code-split-metrics/js/positions-drawer.e3cfede6aa9753a69500.js","2c0948cb202c0efd60798f3f37f499ab"],["/br_code-split-metrics/js/profit_table.e3cfede6aa9753a69500.js","adf9da8733d5263ad9ddc11510931b92"],["/br_code-split-metrics/js/profit_table~statement.e3cfede6aa9753a69500.js","c4a34c57f20892507a786ef45cffcb5c"],["/br_code-split-metrics/js/push-notification.e3cfede6aa9753a69500.js","4b254405ddacc0ebc71695d958d7323c"],["/br_code-split-metrics/js/reports.e3cfede6aa9753a69500.js","4d12474f57d8e0b8dfc4a5ff8e339391"],["/br_code-split-metrics/js/smart_chart.e3cfede6aa9753a69500.js","348d63c718d23cb65d5ed29249f2137a"],["/br_code-split-metrics/js/smartcharts/chartiq-a0bb2d.smartcharts.js","2859b5a06eb9379a6f1065b51efa81cc"],["/br_code-split-metrics/js/smartcharts/de-po-e522d0.smartcharts.js","7f153fed6e754e5a79ba509ccf85a4d8"],["/br_code-split-metrics/js/smartcharts/es-po-61430e.smartcharts.js","905b4e1ee7aac1c8b66133646b36954e"],["/br_code-split-metrics/js/smartcharts/fr-po-1555a4.smartcharts.js","7cc9c589cadea98aa382c136476627bd"],["/br_code-split-metrics/js/smartcharts/html2canvas-c78ff1.smartcharts.js","0ae4bc6f8fe8997549df280580c85bb8"],["/br_code-split-metrics/js/smartcharts/id-po-3cdbc8.smartcharts.js","b91c4ac925120746c6544fc17d073c31"],["/br_code-split-metrics/js/smartcharts/it-po-edf79d.smartcharts.js","2aad8d954ae4ae0f031459903d8782dc"],["/br_code-split-metrics/js/smartcharts/nl-po-6d1e52.smartcharts.js","60827db65225ff31f00b53d263f4edfe"],["/br_code-split-metrics/js/smartcharts/pl-po-c7f985.smartcharts.js","ca2d20798ea5ef8d8c32b81a54fd703b"],["/br_code-split-metrics/js/smartcharts/pt-po-aaec6f.smartcharts.js","783407adcfa8b46016d2dc8b2be39a66"],["/br_code-split-metrics/js/smartcharts/ru-po-9f0c5d.smartcharts.js","18edfe06c994d4cde84cd293d504dd3e"],["/br_code-split-metrics/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/br_code-split-metrics/js/smartcharts/th-po-650f93.smartcharts.js","c784d0a255058385b73b59e504c81b33"],["/br_code-split-metrics/js/smartcharts/vendors~resize-observer-polyfill-f202e8.smartcharts.js","b52a4ce9f52de8dd42942dc15164c867"],["/br_code-split-metrics/js/smartcharts/vi-po-4c86cc.smartcharts.js","ee995e5408a03f53f5c880f6a251ce46"],["/br_code-split-metrics/js/smartcharts/zh_cn-po-ba46f0.smartcharts.js","9cda59ab320fd2969f3905d1f6e5e80c"],["/br_code-split-metrics/js/smartcharts/zh_tw-po-b78185.smartcharts.js","5a312bed6c388379da77ca71554631f8"],["/br_code-split-metrics/js/statement.e3cfede6aa9753a69500.js","2065b03b9946c6cdead91eff6abcc30d"],["/br_code-split-metrics/js/vendors~open_positions~profit_table~statement.e3cfede6aa9753a69500.js","2e5f800f33db6c5200f6e82be2bd8ed3"],["/br_code-split-metrics/js/vendors~smart_chart.e3cfede6aa9753a69500.js","1f7027a975705dc1943cb03271b501c1"],["/br_code-split-metrics/manifest.json","3744c47eeb92098595a9f8d4a545e57e"],["/br_code-split-metrics/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_code-split-metrics/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_code-split-metrics/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_code-split-metrics/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_code-split-metrics/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_code-split-metrics/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_code-split-metrics/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_code-split-metrics/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_code-split-metrics/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_code-split-metrics/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/br_code-split-metrics/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/br_code-split-metrics/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/br_code-split-metrics/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/br_code-split-metrics/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/br_code-split-metrics/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/br_code-split-metrics/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/br_code-split-metrics/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/br_code-split-metrics/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/br_code-split-metrics/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/br_code-split-metrics/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/br_code-split-metrics/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/br_code-split-metrics/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/br_code-split-metrics/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/br_code-split-metrics/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_code-split-metrics/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_code-split-metrics/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/br_code-split-metrics/';
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






