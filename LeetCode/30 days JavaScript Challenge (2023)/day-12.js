/**
 * Day 12 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/promise-time-limit/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
	return async function(...args) {
        return new Promise(async function(resolve, reject) {
            const timeoutID = setTimeout(async function() {
                reject("Time Limit Exceeded")
            }, t);
            try {
                const result = await fn(...args);
                clearTimeout(timeoutID);
                resolve(result);
            } catch(err) {
                clearTimeout(timeoutID);
                reject(err);
            }
        });
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
