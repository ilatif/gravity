/**
 * Day 16 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/throttle/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
  let params;
  let timeoutID;
  return function(...args) {
      if (!timeoutID) {
          fn(...args);
      } else {
          params = [...args];
          return;
      }

      timeoutID = setInterval(() => {
          if (params) {
              fn(...params);
          } else {
              clearTimeout(timeoutID);
              timeoutID = undefined;
          }
          params = undefined;
      }, t);
  }
};

/**
* const throttled = throttle(console.log, 100);
* throttled("log"); // logged immediately.
* throttled("log"); // logged at t=100ms.
*/
