/**
 * Day 7 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/function-composition/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        let result = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        
        return result;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
