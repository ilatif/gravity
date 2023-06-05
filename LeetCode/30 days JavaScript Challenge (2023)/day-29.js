/**
 * Day 29 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/generate-fibonacci-sequence/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
  yield 0;
  yield 1;
  
  let next = 1;
  let prev = 0;
  for (let i = 1; i <= 50; i++) {
    let temp = next + prev;
    yield temp;

    prev = next;
    next = temp;
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
