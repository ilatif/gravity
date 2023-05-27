/**
 * Day 1 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/create-hello-world-function/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @return {Function}
 */
var createHelloWorld = function() {
  return function(...args) {
      return "Hello World";
  }
};

/**
* const f = createHelloWorld();
* f(); // "Hello World"
*/
