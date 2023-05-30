/**
 * Day 17 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/json-deep-equal/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function(o1, o2) {
  if (typeof o1 !== 'object' && typeof o2 !== 'object') {
      return o1 === o2;
  }
  
  let result = { result: true };

  traverse(o1, o2, result);
  
  return result.result;
};

function traverse(item1, item2, result) {    
  if ((item1 instanceof Array === true && item2 instanceof Array === false)
     || (item1 instanceof Array === false && item2 instanceof Array === true)) {
      result.result = false;
      return;
  } else if (item1 instanceof Array === true && item2 instanceof Array && item1.length !== item2.length) {
      result.result = false;
      return;
  }

  if (item1 === null && item2 === null) {
      return;
  } else if (item1 === null && item2 !== null) {
      result.result = false;
      return;
  } else if (item1 !== null && item2 === null) {
      result.result = false;
      return;
  }

  for (let key in item1) {
      if (result.result === false) {
          break;
      }
      
      if (typeof item1[key] === 'object' && typeof item2[key] === 'object') {
          traverse(item1[key], item2[key], result);
      } else if (item1[key] !== item2[key]) {
          result.result = false;
          break;
      }
  }   
}
