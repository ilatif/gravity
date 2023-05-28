/**
 * Day 6 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/array-reduce-transformation/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  let answer = init;
  for (let i  = 0; i < nums.length; i++) {
      answer = fn(answer, nums[i]);
  }
  
  return answer;
};
