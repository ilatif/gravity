/**
 * Day 25 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/check-if-object-instance-of-class/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
  if ((obj === classFunction && classFunction !== Object) || typeof classFunction?.prototype === 'undefined') {
      return false;
  }
  
  if (obj === null || obj === undefined ||
      classFunction === null || classFunction === undefined) {
      return obj === classFunction;
  }

  classFunction.prototype.custom = function() {};
  
  const res = typeof (obj).__proto__.custom !== 'undefined' ? true : false

  delete(classFunction.prototype.custom);

  return res;
};

/**
* checkIfInstanceOf(new Date(), Date); // true
*/
