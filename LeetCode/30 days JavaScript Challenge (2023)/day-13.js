/**
 * Day 13 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/promise-pool/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function(functions, n) {
  let resolvedLength = [0];
  const totalLength = functions.length;
  const length = Math.min(n, totalLength);
  return new Promise(function(resolve, reject) {
      if (!length) {
          resolve('resolved');
      }
      
      for (let i = 0; i < length; i++) {
          const fn = functions.shift();
          fn().then((_) => {
              resolvedLength[0] += 1;
              scheduleNext(functions, resolve, totalLength, resolvedLength);
          });
      }
  });
};

function scheduleNext(functions, resolve, totalLength, resolvedLength) {
  if (resolvedLength[0] >= totalLength) {
      return resolve('resolved');
  }
  
  const fn = functions.shift();
  if (fn) {
      fn().then((_) => {
          resolvedLength[0] += 1
         scheduleNext(functions, resolve, totalLength, resolvedLength);
      });
  }
}

/**
* const sleep = (t) => new Promise(res => setTimeout(res, t));
* promisePool([() => sleep(500), () => sleep(400)], 1)
*   .then(console.log) // After 900ms
*/
