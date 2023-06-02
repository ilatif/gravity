/**
 * Day 26 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/call-function-with-custom-context/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function(context, ...args) {    
  const fn = this.bind(context);
  const res = fn(...args);
  return res;
}

/**
* function increment() { this.count++; return this.count; }
* increment.callPolyfill({count: 1}); // 2
*/
