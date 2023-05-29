/**
 * Day 11 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/sleep/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @param {number} millis
 */
async function sleep(millis) {
  return new Promise((resolve, reject) => {
      setTimeout(resolve, millis);
  });
}

/** 
* let t = Date.now()
* sleep(100).then(() => console.log(Date.now() - t)) // 100
*/
