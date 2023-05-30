/**
 * Day 20 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/differences-between-two-objects/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
function objDiff(obj1, obj2) {
  let diff = {};
  traverse(obj1, obj2, diff);

  return diff;
};

function traverse(obj1, obj2, diff) {
  for (let key in obj1) {
      let item1 = obj1[key];
      let item2 = obj2[key];
      if (typeof item1 === 'undefined' || typeof item2 === 'undefined') {
          continue;
      } else if (typeof item1 === 'object' && typeof item2 === 'object') {
          if ((Array.isArray(item1) && !Array.isArray(item2)) ||
             (!Array.isArray(item1) && Array.isArray(item2))) {
              diff[key] = [item1, item2];
          } else if ((item1 !== null && item2 === null) ||
                    (item1 === null && item2 !== null)) {
              diff[key] = [item1, item2];
          } else {
              let temp = traverse(item1, item2, {});
              if (Object.keys(temp).length) {
                  diff[key] = temp;
              }
          }
      } else if (item1 !== item2) {
          diff[key] = [item1, item2];
      }
  }
  
  return diff;
}
