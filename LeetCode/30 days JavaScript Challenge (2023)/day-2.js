/**
 * Day 2 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/counter/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
  let current = 0;
  return function() {
      return n + current++;
  };
};

/** 
* const counter = createCounter(10)
* counter() // 10
* counter() // 11
* counter() // 12
*/
