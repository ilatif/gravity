/**
 * Day 22 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/flatten-deeply-nested-array/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  let flat = [];
  traverse(arr, flat, n, 0);
  return flat;
};

function traverse(arr, flat, n, level) {
  if (level > n) {
      flat.push(arr);
      return;
  }

  for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          traverse(arr[i], flat, n, level + 1);
      } else {
          flat.push(arr[i]);
      }
  }

  return flat;
}
