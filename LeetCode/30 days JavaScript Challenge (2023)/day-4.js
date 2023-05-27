/**
 * Day 4 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/apply-transform-over-each-element-in-array/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
      newArr.push(fn(arr[i], i));
  }
  
  return newArr;
};
