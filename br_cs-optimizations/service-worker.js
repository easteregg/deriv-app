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

var precacheConfig = [["/br_cs-optimizations/404.html","8483487e5b8462268ba74f7305dc240c"],["/br_cs-optimizations/css/app.css","2319f34399a577d3f78c4ea722381131"],["/br_cs-optimizations/css/digits.css","58caa3b1383e3642a2d10c36efde09ab"],["/br_cs-optimizations/css/modals.css","54f00cf9e93d265feaaf15955953c22c"],["/br_cs-optimizations/css/notification-messages.css","374f5607221a5522cd56716d5c85ddd2"],["/br_cs-optimizations/css/reports.css","1e479d1b30b7daa6a7eb84a8bb3b11fe"],["/br_cs-optimizations/css/screen-small.css","b4e5d5fe4a1ca0758f34ac4250558435"],["/br_cs-optimizations/css/smartcharts.css","7abed6df084ad8422da0067ff98caa8c"],["/br_cs-optimizations/css/work-in-progress.css","7fb0c6d69a93aa4b4d2d3c4d168f55a9"],["/br_cs-optimizations/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_cs-optimizations/index.html","4e4aac35c6685ebe714e5bded751660a"],["/br_cs-optimizations/js/0.cb9578bdad5773196272.js","6407a57c7f4f432950ad1e51993b98c7"],["/br_cs-optimizations/js/1.cb9578bdad5773196272.js","5447410cf1c199e2a17160559063ca3c"],["/br_cs-optimizations/js/10.cb9578bdad5773196272.js","a07544087cdbbd22d2b3d0231aafc9dd"],["/br_cs-optimizations/js/11.cb9578bdad5773196272.js","39be223227122bca4c4d33d6be0098bd"],["/br_cs-optimizations/js/12.cb9578bdad5773196272.js","4d07b9e87af80ea829465577ed38807e"],["/br_cs-optimizations/js/13.cb9578bdad5773196272.js","762ff43892cdc5b55545db101633b5c2"],["/br_cs-optimizations/js/14.cb9578bdad5773196272.js","c43f9308e6c4f7a21bd206ef739a3a7a"],["/br_cs-optimizations/js/15.cb9578bdad5773196272.js","11cbd635c236c665213327585bbddcf3"],["/br_cs-optimizations/js/16.cb9578bdad5773196272.js","502232ebc56a72214e4cd03085348148"],["/br_cs-optimizations/js/17.cb9578bdad5773196272.js","681b502c3ff6caa8813fbbf0fad86668"],["/br_cs-optimizations/js/18.cb9578bdad5773196272.js","2ce2350579d4c06508b7951bd82d48e4"],["/br_cs-optimizations/js/19.cb9578bdad5773196272.js","8750807b6a20ab1c885080e1a3040c39"],["/br_cs-optimizations/js/2.cb9578bdad5773196272.js","dd6e3947fa19b26c60f5a8a9079d94a5"],["/br_cs-optimizations/js/20.cb9578bdad5773196272.js","55aa9cc7f1c17b4f53be5989a4ce59b1"],["/br_cs-optimizations/js/21.cb9578bdad5773196272.js","3ed440abb0071ad8bb39b01c3cb4a4be"],["/br_cs-optimizations/js/22.cb9578bdad5773196272.js","964292d2429de2bb9408868a18ba474f"],["/br_cs-optimizations/js/23.cb9578bdad5773196272.js","018bbcc2ad14e84a8c9fa2d064c87139"],["/br_cs-optimizations/js/24.cb9578bdad5773196272.js","5788404da6445fd5e4a2c8db009161e9"],["/br_cs-optimizations/js/25.cb9578bdad5773196272.js","a638e9433811a1fa2c7c869ce4d2b5f5"],["/br_cs-optimizations/js/26.cb9578bdad5773196272.js","18c9371e0dd5c0f823e39ea9bfdcda19"],["/br_cs-optimizations/js/27.cb9578bdad5773196272.js","df0a9369e9f7afd26b1c4678da2f3127"],["/br_cs-optimizations/js/28.cb9578bdad5773196272.js","06701ac2480318e820a1add17c68f4c7"],["/br_cs-optimizations/js/29.cb9578bdad5773196272.js","ef6975c1827d5fee2d736a9f12171b16"],["/br_cs-optimizations/js/3.cb9578bdad5773196272.js","bb7099100ce753ce85f56ea54b6e8e08"],["/br_cs-optimizations/js/30.cb9578bdad5773196272.js","d76d37bf18c123c79cf1f7118e8dcfcf"],["/br_cs-optimizations/js/31.cb9578bdad5773196272.js","b9b6c68b371c12429fbe75aed3e20bbe"],["/br_cs-optimizations/js/32.cb9578bdad5773196272.js","7bb6f35f95d7925ca73bab14e5f3bb65"],["/br_cs-optimizations/js/33.cb9578bdad5773196272.js","0607a5b2dd12b5546e7bd6844d7e7946"],["/br_cs-optimizations/js/34.cb9578bdad5773196272.js","f517d434ae5e718c9dd8762a6a23d841"],["/br_cs-optimizations/js/35.cb9578bdad5773196272.js","f58b773a58bc4524b68960d112a4bf86"],["/br_cs-optimizations/js/36.cb9578bdad5773196272.js","10797896f7e90a3e3f435a25e5b0ad2b"],["/br_cs-optimizations/js/37.cb9578bdad5773196272.js","18b63515c7b6f15cbd01243128c995e6"],["/br_cs-optimizations/js/38.cb9578bdad5773196272.js","0d3ed93912ab5efe333ed4a461a670b8"],["/br_cs-optimizations/js/39.cb9578bdad5773196272.js","5f9d6dbc0f0d6fed2187d473b0f250ae"],["/br_cs-optimizations/js/4.cb9578bdad5773196272.js","f085ec00c4e9c0afab62704320d80dc6"],["/br_cs-optimizations/js/40.cb9578bdad5773196272.js","35786e72f2edb0f2eb4c68d3155081ca"],["/br_cs-optimizations/js/404.cb9578bdad5773196272.js","97f11215f131e3223cf915c5d625ef0b"],["/br_cs-optimizations/js/41.cb9578bdad5773196272.js","f1e0b268633d83369f51453958fc416d"],["/br_cs-optimizations/js/42.cb9578bdad5773196272.js","bddb3ce95b0faebb6eca534183922e98"],["/br_cs-optimizations/js/43.cb9578bdad5773196272.js","d35a8209bb25749fbb3eb8d0de5ad8ae"],["/br_cs-optimizations/js/44.cb9578bdad5773196272.js","53e043e565f749e9d873634900bed65b"],["/br_cs-optimizations/js/45.cb9578bdad5773196272.js","cb21e2a05b5f07960a4afc845ef4681e"],["/br_cs-optimizations/js/46.cb9578bdad5773196272.js","53e259e581024b9449b5491b12f3ed0a"],["/br_cs-optimizations/js/47.cb9578bdad5773196272.js","5eb96dc95b5ea79d8378b19f34513b02"],["/br_cs-optimizations/js/48.cb9578bdad5773196272.js","65fb07870856807b4dd08c5c9a518c15"],["/br_cs-optimizations/js/49.cb9578bdad5773196272.js","dc98ff9f05a74575ba6b8dae7c92949c"],["/br_cs-optimizations/js/5.cb9578bdad5773196272.js","f2391a49d6c6fcb86d97f5e719e9ccdc"],["/br_cs-optimizations/js/50.cb9578bdad5773196272.js","30f7f654338485e01249ba8b42c1026b"],["/br_cs-optimizations/js/51.cb9578bdad5773196272.js","d9854f28fc0e08d04f499ba9dd801a95"],["/br_cs-optimizations/js/52.cb9578bdad5773196272.js","37eafd910e51f493ea6d0f359da15f81"],["/br_cs-optimizations/js/53.cb9578bdad5773196272.js","34aa18a410322de6b31fd6b7d433974d"],["/br_cs-optimizations/js/54.cb9578bdad5773196272.js","29a3720c2c687d8ae7391921cef9f442"],["/br_cs-optimizations/js/55.cb9578bdad5773196272.js","d531f3dc97ca7dcb432b6cad6978400b"],["/br_cs-optimizations/js/56.cb9578bdad5773196272.js","5f161244ddbc7d1b6908b350ca7cc714"],["/br_cs-optimizations/js/57.cb9578bdad5773196272.js","2d28b2552302ae6d87fe0dfe30c2c858"],["/br_cs-optimizations/js/58.cb9578bdad5773196272.js","f6a8257283b99a5b0d6bd07a25aee97f"],["/br_cs-optimizations/js/59.cb9578bdad5773196272.js","6302e657274ce9a23ab5e66ffd10dc24"],["/br_cs-optimizations/js/6.cb9578bdad5773196272.js","2b4a18f8e6e23ef7f116945e15c4a10a"],["/br_cs-optimizations/js/60.cb9578bdad5773196272.js","4c88f4f56948c8280e3a32103cdf7265"],["/br_cs-optimizations/js/61.cb9578bdad5773196272.js","bb664a85607a71c066f4d1b04d64bb57"],["/br_cs-optimizations/js/62.cb9578bdad5773196272.js","b46de597239956261ee01787906d1a11"],["/br_cs-optimizations/js/63.cb9578bdad5773196272.js","ec084d7740f2c9c76fa9892c44e516b5"],["/br_cs-optimizations/js/64.cb9578bdad5773196272.js","4fc84d746dadd05352f1de1323f36968"],["/br_cs-optimizations/js/65.cb9578bdad5773196272.js","0cb9d73bff7e7ae972d1ae568dd5867d"],["/br_cs-optimizations/js/66.cb9578bdad5773196272.js","4c74d0d92a9f72e8f1494ddd26145ad5"],["/br_cs-optimizations/js/67.cb9578bdad5773196272.js","c6139dfe9c01b0b176c2c14654aaa57e"],["/br_cs-optimizations/js/68.cb9578bdad5773196272.js","c76c0521a66ccd6b7768bfcc6f3d3623"],["/br_cs-optimizations/js/69.cb9578bdad5773196272.js","200e937e3cb41e451299e09aed2ed59b"],["/br_cs-optimizations/js/7.cb9578bdad5773196272.js","7166daa117f21f3e68827ede59bc381b"],["/br_cs-optimizations/js/8.cb9578bdad5773196272.js","7641583e5d53692f8b80e26056c68124"],["/br_cs-optimizations/js/9.cb9578bdad5773196272.js","940bae1cd190d92c302cce9388defcc0"],["/br_cs-optimizations/js/DenialOfServiceModal.cb9578bdad5773196272.js","95a98bea48ddca70e959bb7116599874"],["/br_cs-optimizations/js/MarketUnavailableModal.cb9578bdad5773196272.js","5625fa04573a547d1b7ac7b210043781"],["/br_cs-optimizations/js/ServicesErrorModal.cb9578bdad5773196272.js","dd7b4b534cdf56884e962b882424c9d7"],["/br_cs-optimizations/js/UnsupportedContractModal.cb9578bdad5773196272.js","2939ff9c11b7d7f8f34336953bbc75c3"],["/br_cs-optimizations/js/account-info.cb9578bdad5773196272.js","d0ca328bfa2325db76dd2d65aa0d9c0e"],["/br_cs-optimizations/js/contract.cb9578bdad5773196272.js","fb2ee9f32c9682580c3167b6117c3184"],["/br_cs-optimizations/js/digits.cb9578bdad5773196272.js","a847e980ce3aa0cf6363206e0fa5683a"],["/br_cs-optimizations/js/info-box.cb9578bdad5773196272.js","cc2cdeda26ff07b79d3ac5b2eca7860e"],["/br_cs-optimizations/js/main.cb9578bdad5773196272.js","0152f2b1f484cefe63abb889e4fa8916"],["/br_cs-optimizations/js/modals.cb9578bdad5773196272.js","3af9724fb9b77bafbc9c4ed53b0c73a4"],["/br_cs-optimizations/js/notification-messages.cb9578bdad5773196272.js","677ee7e8e64380a4c2b70398311bf2ff"],["/br_cs-optimizations/js/open_positions.cb9578bdad5773196272.js","725a66a0d5fdf0d25aa5e3eb832d17a1"],["/br_cs-optimizations/js/open_positions~profit_table~statement.cb9578bdad5773196272.js","da3fddb218dfb17fa3dd6d334702de89"],["/br_cs-optimizations/js/profit_table.cb9578bdad5773196272.js","3de981d27f1db9d64f81b3fc01d8687b"],["/br_cs-optimizations/js/push-notification.cb9578bdad5773196272.js","7b73e795a0811c0f8ff0c72ccf2d3415"],["/br_cs-optimizations/js/reports.cb9578bdad5773196272.js","2070a1204680a7be55592bc1e59662cb"],["/br_cs-optimizations/js/screen-small.cb9578bdad5773196272.js","424156be2d8482b01654988bffcc54f7"],["/br_cs-optimizations/js/settings-chart.cb9578bdad5773196272.js","98a54a26c2b4715587c001b048377b2a"],["/br_cs-optimizations/js/settings-language.cb9578bdad5773196272.js","0d16b429a09d094670182d5c337d86ea"],["/br_cs-optimizations/js/settings-theme.cb9578bdad5773196272.js","cf3839aa6270a59a5b0788612343061a"],["/br_cs-optimizations/js/smart_chart.cb9578bdad5773196272.js","8e67dece18b52ef597748fdaa02daa90"],["/br_cs-optimizations/js/smartcharts/chartiq-a0bb2d.smartcharts.js","2859b5a06eb9379a6f1065b51efa81cc"],["/br_cs-optimizations/js/smartcharts/de-po-e522d0.smartcharts.js","7f153fed6e754e5a79ba509ccf85a4d8"],["/br_cs-optimizations/js/smartcharts/es-po-61430e.smartcharts.js","905b4e1ee7aac1c8b66133646b36954e"],["/br_cs-optimizations/js/smartcharts/fr-po-1555a4.smartcharts.js","7cc9c589cadea98aa382c136476627bd"],["/br_cs-optimizations/js/smartcharts/html2canvas-c78ff1.smartcharts.js","0ae4bc6f8fe8997549df280580c85bb8"],["/br_cs-optimizations/js/smartcharts/id-po-3cdbc8.smartcharts.js","b91c4ac925120746c6544fc17d073c31"],["/br_cs-optimizations/js/smartcharts/it-po-edf79d.smartcharts.js","2aad8d954ae4ae0f031459903d8782dc"],["/br_cs-optimizations/js/smartcharts/nl-po-6d1e52.smartcharts.js","60827db65225ff31f00b53d263f4edfe"],["/br_cs-optimizations/js/smartcharts/pl-po-c7f985.smartcharts.js","ca2d20798ea5ef8d8c32b81a54fd703b"],["/br_cs-optimizations/js/smartcharts/pt-po-aaec6f.smartcharts.js","783407adcfa8b46016d2dc8b2be39a66"],["/br_cs-optimizations/js/smartcharts/ru-po-9f0c5d.smartcharts.js","18edfe06c994d4cde84cd293d504dd3e"],["/br_cs-optimizations/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/br_cs-optimizations/js/smartcharts/th-po-650f93.smartcharts.js","c784d0a255058385b73b59e504c81b33"],["/br_cs-optimizations/js/smartcharts/vendors~resize-observer-polyfill-f202e8.smartcharts.js","b52a4ce9f52de8dd42942dc15164c867"],["/br_cs-optimizations/js/smartcharts/vi-po-4c86cc.smartcharts.js","ee995e5408a03f53f5c880f6a251ce46"],["/br_cs-optimizations/js/smartcharts/zh_cn-po-ba46f0.smartcharts.js","9cda59ab320fd2969f3905d1f6e5e80c"],["/br_cs-optimizations/js/smartcharts/zh_tw-po-b78185.smartcharts.js","5a312bed6c388379da77ca71554631f8"],["/br_cs-optimizations/js/statement.cb9578bdad5773196272.js","1268c7a418b59c9aba82bc7f7f10f0cd"],["/br_cs-optimizations/js/toggle-menu-drawer.cb9578bdad5773196272.js","92b39a21a29466fdd6b1908567f28750"],["/br_cs-optimizations/js/two-month-picker.cb9578bdad5773196272.js","e8b982f31fb78121382553a7c1dbd6d5"],["/br_cs-optimizations/js/vendors~open_positions~profit_table~statement.cb9578bdad5773196272.js","11fd1d569111d0c0c5fc297637dcf9d5"],["/br_cs-optimizations/js/vendors~smart_chart.cb9578bdad5773196272.js","8cd5f871d6b56591ac85986ddf602a81"],["/br_cs-optimizations/js/work-in-progress.cb9578bdad5773196272.js","a0f4161a279e87e2e1ecfa20ef411030"],["/br_cs-optimizations/manifest.json","7f85496eb368511e5797adc7c85b3997"],["/br_cs-optimizations/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_cs-optimizations/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_cs-optimizations/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_cs-optimizations/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_cs-optimizations/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_cs-optimizations/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_cs-optimizations/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_cs-optimizations/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_cs-optimizations/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_cs-optimizations/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/br_cs-optimizations/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/br_cs-optimizations/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/br_cs-optimizations/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/br_cs-optimizations/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/br_cs-optimizations/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/br_cs-optimizations/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/br_cs-optimizations/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/br_cs-optimizations/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/br_cs-optimizations/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/br_cs-optimizations/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/br_cs-optimizations/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/br_cs-optimizations/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/br_cs-optimizations/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/br_cs-optimizations/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_cs-optimizations/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_cs-optimizations/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







