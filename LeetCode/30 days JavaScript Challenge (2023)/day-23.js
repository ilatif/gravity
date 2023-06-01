/**
 * Day 23 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/array-prototype-last/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

Array.prototype.last = function() {
  return this.length ? this[this.length - 1] : -1;
};
