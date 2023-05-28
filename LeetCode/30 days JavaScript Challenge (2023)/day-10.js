/**
 * Day 10 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/curry/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
  let params = [];
  return function(...args) {
      return curried(fn, params, args);
  }
};

function curried(fn, params, args) {
  params.push(...args);
  let result = fn.apply(null, params);
  if (isNaN(result)) {
      return function(...args) {
          return curried(fn, params, args);
      };
  } else {
      return result;
  }
}

/**
* function sum(a, b) { return a + b; }
* const csum = curry(sum);
* csum(1)(2) // 3
*/
