/**
 * Day 15 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/debounce/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
  let timeoutID;
  return function(...args) {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
          fn(...args)
      }, t);;
  }
};

/**
* const log = debounce(console.log, 100);
* log('Hello'); // cancelled
* log('Hello'); // cancelled
* log('Hello'); // Logged at t=100ms
*/
