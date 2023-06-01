/**
 * Day 24 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/group-by/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
  let res = {};
  
  for (let key in this) {
      if (typeof this[key] === 'function') {
          continue;
      }

      let k = fn(this[key]);
      if (typeof k !== 'undefined' && k !== 'undefined') {
          if (typeof res[k] === 'undefined') {
              res[k] = [];
          }
          res[k].push(this[key]);
      }
  }
  
  return res;
};

/**
* [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
*/
