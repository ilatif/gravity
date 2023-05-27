/**
 * Day 3 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/counter-ii/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
  const current = init;
  return {
      increment: () => ++init,
      decrement: () => --init,
      reset: () => {
          init = current;
          return init;
      }
  }
};

/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/
