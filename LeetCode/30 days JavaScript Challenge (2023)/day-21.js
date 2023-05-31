/**
 * Day 21 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/chunk-array/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i+=size) {
      newArr.push(arr.slice(i, i + size));
  }
  
  return newArr;
}
