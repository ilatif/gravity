/**
 * Day 8 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/allow-one-function-call/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
  let called = false;
  return function(...args){
      if (called) {
          return undefined;
      }
      called = true;
      return fn.call(this, ...args);
  }
};

/**
* let fn = (a,b,c) => (a + b + c)
* let onceFn = once(fn)
*
* onceFn(1,2,3); // 6
* onceFn(2,3,6); // returns undefined without calling fn
*/
