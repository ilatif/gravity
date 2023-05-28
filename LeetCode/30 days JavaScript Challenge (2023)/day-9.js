/**
 * Day 9 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/memoize/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @param {Function} fn
 */
function memoize(fn) {
  let cache = {};
  return function(...args) {
      let key = JSON.stringify(args);
      if (typeof cache[key] !== 'undefined') {
          return cache[key];
      }
      
      cache[key] = fn(...args);
      return cache[key];
  }
}


/** 
* let callCount = 0;
* const memoizedFn = memoize(function (a, b) {
*	 callCount += 1;
*   return a + b;
* })
* memoizedFn(2, 3) // 5
* memoizedFn(2, 3) // 5
* console.log(callCount) // 1 
*/
