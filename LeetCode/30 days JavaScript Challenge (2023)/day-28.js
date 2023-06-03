/**
 * Day 28 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/array-wrapper/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
  this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
if (!this.nums.length) {
  return 0;
}

return this.nums.reduce((num1, num2) => num1 + num2, 0);
}

ArrayWrapper.prototype.toString = function() {
return `[${this.nums.join(',')}]`;
}

/**
* const obj1 = new ArrayWrapper([1,2]);
* const obj2 = new ArrayWrapper([3,4]);
* obj1 + obj2; // 10
* String(obj1); // "[1,2]"
* String(obj2); // "[3,4]"
*/
