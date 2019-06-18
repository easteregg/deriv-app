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

var precacheConfig = [["/br_add-design-elements-to-reports/js/0-75deb21bc2df737b5b03.js","ad640cb60a9cefa6bcbcf766ff55ef22"],["/br_add-design-elements-to-reports/js/1-53327fe1871d5dd9f662.js","e5c75ad9d0da658c3838aa7f7fdee336"],["/br_add-design-elements-to-reports/js/10-11dd32ed22c87c595b49.js","3abf4268e90fbbf4ec3ad44a8d6e9120"],["/br_add-design-elements-to-reports/js/11-b3ed2091f296ad5fa3f1.js","47b0e4239639b2d21f2acfa5f6c2827e"],["/br_add-design-elements-to-reports/js/12-6aea09661391b64cee32.js","77383b279aadcc176d76a424e15eedeb"],["/br_add-design-elements-to-reports/js/13-fe4896d6c27d657dc48d.js","a45e3dce51384ad2abc8422a1c19dac7"],["/br_add-design-elements-to-reports/js/14-bcfeacaf8ad8f2fed3dc.js","e756dc3214a24ac34d5726c39ee302d2"],["/br_add-design-elements-to-reports/js/15-5b36f9150ca0ff20185e.js","ea44582f2c65bfb5d8763a29ae82a961"],["/br_add-design-elements-to-reports/js/16-8cecc671ba9ceb479f56.js","28e746fa7927629d8ffffae20d02fa64"],["/br_add-design-elements-to-reports/js/17-b8e853ea7f29cda5563e.js","7bf03e97b4d23c652432bfaf0eb0a5ed"],["/br_add-design-elements-to-reports/js/18-615aac2a2dbc30087d1a.js","411819ddf601c95488f6502b95962aca"],["/br_add-design-elements-to-reports/js/19-3aeda260f5e295403d37.js","d2eee17a8ddddce6b4aef1b3031e5bea"],["/br_add-design-elements-to-reports/js/2-4f07ac2b019fc6055e81.js","09bf0aa68906f8571ed540765ee05dd1"],["/br_add-design-elements-to-reports/js/20-40d0b7240db50fd297cd.js","a892414a1daf876122fedc89b5f92013"],["/br_add-design-elements-to-reports/js/21-ddf108a79d421ea833ee.js","26d4b82241307ff4d4e2b5eda3212978"],["/br_add-design-elements-to-reports/js/22-b687efde92cfab074bda.js","0d0617ce1589c304b50be209cdd14953"],["/br_add-design-elements-to-reports/js/23-a3179a5b4d415e8905c9.js","bf5da906c1fad8fc884bb6f5c5d7d5bf"],["/br_add-design-elements-to-reports/js/24-f1eabf358e0a02277251.js","e0b9e42b6e89d62fc9402a5dcceb0b6b"],["/br_add-design-elements-to-reports/js/25-69de805a9e60ee9532d3.js","23d2ce0e47b39e501b17ce8cac2303d7"],["/br_add-design-elements-to-reports/js/26-693322b1e24d31951755.js","abf6ec1ffc36305f912974d50c776e88"],["/br_add-design-elements-to-reports/js/27-7e434eb0e7af3112eb64.js","a1c48fa80ffbe2d77eef825e3bea3dd8"],["/br_add-design-elements-to-reports/js/28-d99feb68a05e46fe7e24.js","cc2b891a04f3f98799f98f3b5686ced0"],["/br_add-design-elements-to-reports/js/29-21932a2fa2f78d36563b.js","fccd00cc7fad89814fefa3f34b962f9b"],["/br_add-design-elements-to-reports/js/3-6eead60ce6e484a89f84.js","8a9ca46bd3b0b1f19c2fc4fa4a59c2af"],["/br_add-design-elements-to-reports/js/30-a0636655749c049c7737.js","a4fd7fc3d2d249756732a077bdd1db81"],["/br_add-design-elements-to-reports/js/31-8ebc9babcd75d87dd849.js","be92bd5c2a9df2ea0a120402cace96bc"],["/br_add-design-elements-to-reports/js/32-d46e0f8c0a9296348392.js","0716e9c9033b8339429f5bdc2684d718"],["/br_add-design-elements-to-reports/js/33-09be7eed53eeb610016c.js","7d7fac9f5dcd74287080895e27008f5c"],["/br_add-design-elements-to-reports/js/34-d6c665a26c948152ce30.js","fe0e4ee581c1a653f2207eb1e62b485b"],["/br_add-design-elements-to-reports/js/35-36bc0bb640bd162dade6.js","2f61bf91ca88c18dce50d582a1d33cb0"],["/br_add-design-elements-to-reports/js/36-55042fca3041b5eb7a91.js","3d2da2ec9d52b871b06e9f6781800990"],["/br_add-design-elements-to-reports/js/37-23b1dcdbd30dbbb85587.js","ff489b52467a9e475e13b3cca6a0480f"],["/br_add-design-elements-to-reports/js/38-4db811925dfb587a5ae8.js","80e18eba6be708acf5cd6344cd784c09"],["/br_add-design-elements-to-reports/js/39-0823ea78d3bf7ae54174.js","d9201021c912a3a08f81d4254fd98408"],["/br_add-design-elements-to-reports/js/4-3a37d1cdb165ae888d6b.js","45571b45d122b8bdee18e84fbab59c99"],["/br_add-design-elements-to-reports/js/40-eccb523d7bfee4efa6a3.js","5b8c6ef789619470916a49c706444a30"],["/br_add-design-elements-to-reports/js/404-fdd90647aa54964fb1ed.js","d28beeeefb443ba436beb10748bc929b"],["/br_add-design-elements-to-reports/js/41-9ecc6c81d71f6db22510.js","e3ec1f7fee09f91afc790bc83f7f5a01"],["/br_add-design-elements-to-reports/js/42-f0e9133f486f3cf46c1b.js","127254e9875c38c5289684d64a4b7c22"],["/br_add-design-elements-to-reports/js/43-18447a24460691389120.js","3372e35e0d9cae42647f42292b70a706"],["/br_add-design-elements-to-reports/js/44-33aca49d050fad068398.js","bd4aba941747c25bd3066f6486f040fb"],["/br_add-design-elements-to-reports/js/45-b75183565dbd0229a3ff.js","c250b60f1c16a0deb25ad5f801434f52"],["/br_add-design-elements-to-reports/js/46-47199c93f75a88cd8603.js","19ce424fcaf7b29c1684689ea390677f"],["/br_add-design-elements-to-reports/js/47-30d53f22a29f48f122a1.js","f0eb5ab3d44165c744a2ce7a24cc834c"],["/br_add-design-elements-to-reports/js/48-e5f3d059a3da939a394e.js","deb2e042d9ef32de88e6b753f7ab98bf"],["/br_add-design-elements-to-reports/js/49-d5c8e7ffb4d5372252bb.js","3c9ec570e3089230609e5291128167d1"],["/br_add-design-elements-to-reports/js/5-7619865d7ced1814edb6.js","2c467a1ff914920211bca11ef2b80ef9"],["/br_add-design-elements-to-reports/js/50-d064a79c0244a9cff8b7.js","858468b61c21158033142b567f7bcf40"],["/br_add-design-elements-to-reports/js/51-7ca3008478211850f794.js","1f49978634b975b7ae95518d79b8013d"],["/br_add-design-elements-to-reports/js/52-07f75722b77235adfc7d.js","28aba4e66a712d3272aa0275977485b2"],["/br_add-design-elements-to-reports/js/53-9b921cd566f367bcadb1.js","a63ddc0c7286e95dcb4c31dfdb33156f"],["/br_add-design-elements-to-reports/js/54-2797577bc29e437077da.js","6c19ce1df1682010f73a72724cb4e794"],["/br_add-design-elements-to-reports/js/55-1128951c3c68550f2942.js","893eaa9e515eb5f8ba3367f8d7d136df"],["/br_add-design-elements-to-reports/js/56-920f89e99dc77d6dc84b.js","2979391a445ce3d85677347f61143b1a"],["/br_add-design-elements-to-reports/js/57-b9dbe907a5731ce25a1a.js","a748ce087024a4ab4dfadbd7e40efef9"],["/br_add-design-elements-to-reports/js/58-afc5d60629be6d92ad77.js","6b2a02fc4cf4b4671cf2a445070c6244"],["/br_add-design-elements-to-reports/js/59-e3c6cacfbeb1091d5395.js","47f910d12ee9809bbc787dbfc8f5b985"],["/br_add-design-elements-to-reports/js/6-f66928ac15d3161cf71d.js","98df80201403d363d3e6e3f05dbdca3f"],["/br_add-design-elements-to-reports/js/60-751aeba04436f2adb866.js","80b5ddea8952e6381f684d81a4958fe7"],["/br_add-design-elements-to-reports/js/61-94d2047ccd48ba784f44.js","cf3afb6b21ebb512f3cd9f1ad3272804"],["/br_add-design-elements-to-reports/js/62-09d787c463376d50cc26.js","76b336c177a6331740f1e67df1bab911"],["/br_add-design-elements-to-reports/js/63-0f113e64f99784679f1d.js","886f95ab43f897af873ba97ab5baf376"],["/br_add-design-elements-to-reports/js/64-0fdb65f65587b07ffeef.js","4bc548f9d6c8f211341f4b046e86633c"],["/br_add-design-elements-to-reports/js/65-cf83765a4c28e3a42908.js","0cdd9dc3f8651a8cbff3469ca807b750"],["/br_add-design-elements-to-reports/js/66-f50618e4f7aa665f3389.js","767323b3036a33555497f617651113ed"],["/br_add-design-elements-to-reports/js/7-bdfef2d9e35fe5c66cd3.js","2723b533beb8b1f3ae96ba191726155b"],["/br_add-design-elements-to-reports/js/8-78cbff0e88d19e34e614.js","0c21fca98ea4d936338615c1817eb824"],["/br_add-design-elements-to-reports/js/9-a9afc1fa00b8884662a0.js","1cbf0a9c7c8b8fbfd771117472606b38"],["/br_add-design-elements-to-reports/js/account_password-e80bbb197cad5fe3d04b.js","3086aeaaf593c62d8aeb00e4c9eb3699"],["/br_add-design-elements-to-reports/js/api_token-455796411755cc9d240f.js","3840dc074599647488b4bd5b6d9e91b5"],["/br_add-design-elements-to-reports/js/authorized_application-87b6b5bc246c480c716e.js","cc1a1285b69b21872719396a7b717aba"],["/br_add-design-elements-to-reports/js/binary.js","ff02068affa2860b28ab3301cf884d93"],["/br_add-design-elements-to-reports/js/binary_common.min.js","cdc09742be5c2e8fbf082272586eac47"],["/br_add-design-elements-to-reports/js/cashier_password-40a473d15da490ee7be5.js","ca551e4e15acb086c8a5a0b6353db2eb"],["/br_add-design-elements-to-reports/js/contract-7d7133f041f19b2df628.js","cd96f1d963341456b3158cba437fa963"],["/br_add-design-elements-to-reports/js/financial_assessment-f2b2875bd22a7717c1ad.js","c63db696003c7c4e23df50a6b7136b4d"],["/br_add-design-elements-to-reports/js/limits-b108abb5bcd4b46ba7b5.js","08bf2636551b59c3b9dfbdf53c4ce759"],["/br_add-design-elements-to-reports/js/login_history-dcb5548da21ab243acf1.js","386aafd1fb1cacdbc89ae1fcaea84f07"],["/br_add-design-elements-to-reports/js/open_positions-69200ab30147a993acbd.js","8e01c2abbe6d4d3d7fb46eb422b286e8"],["/br_add-design-elements-to-reports/js/open_positions~portfolio~profit_table~statement-bdda3537d6356c629fc3.js","545a1ee7ab5bf2f1e7acceb28654728d"],["/br_add-design-elements-to-reports/js/open_positions~profit_table~statement-275f78b2f49f7c17b555.js","97d9de31ef0ba90c2b19ff9a47b04420"],["/br_add-design-elements-to-reports/js/personal_details-3f27d12d238da8ef9393.js","7ea320294cb7c4c45666e5d8381fb723"],["/br_add-design-elements-to-reports/js/portfolio-2ba844396df077541ab1.js","db155fe95cacd90d6dd4891641dabe80"],["/br_add-design-elements-to-reports/js/profit_table-50b2eb3ccd3e66b15387.js","11f13c55cda8c22de8d52d18593b2880"],["/br_add-design-elements-to-reports/js/profit_table~statement-6f238803474843bf7833.js","ed0b0438f1838d330e4146a07f6e49d5"],["/br_add-design-elements-to-reports/js/react_mobx.min.js","2a9f1b1086dcaa755accb9febc5f0d1c"],["/br_add-design-elements-to-reports/js/reports-99e484abfb7be6b1a03a.js","05a627a95a209e429de370340f71145a"],["/br_add-design-elements-to-reports/js/self_exclusion-7b24d88cd6b9f04ae3d0.js","8aa3545dce9d12a58151e76dc411802d"],["/br_add-design-elements-to-reports/js/settings-ee411577a3c3a94f2f4e.js","99567149f298dddd642738765476fb70"],["/br_add-design-elements-to-reports/js/smart_chart-0184880cc643e8398e97.js","e2be33c92f2e594f35b4f81085ad0f13"],["/br_add-design-elements-to-reports/js/statement-4d3746f0391bf2e471f9.js","d205e2253cb7be4248cdcba436b130f0"],["/br_add-design-elements-to-reports/js/vendor.min.js","61942f0c9df015a460d14ba6a4f2ab0f"],["/br_add-design-elements-to-reports/js/vendors~smart_chart-2c6dc911ad7fbe794da0.js","8365f2ca43b9bb694f7f802c6380ab1e"]];
var cacheName = 'sw-precache-v3-sw-precache-webpack-plugin-' + (self.registration ? self.registration.scope : '');


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
    var navigateFallback = '';
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







