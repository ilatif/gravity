/**
 * Day 5 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/filter-elements-from-array/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i)) {
          newArr.push(arr[i]);
      }
  }
  
  return newArr;
};
