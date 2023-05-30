/**
 * Day 19 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/array-of-objects-to-matrix/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @param {Array} arr
 * @return {Matrix}
 */
var jsonToMatrix = function(arr) {
  let cols = {};
  // get all possible columns
  for (let i = 0; i < arr.length; i++) {
      prepareColumns(arr[i], '', cols);
  }

  for (let i = 0; i < arr.length; i++) {
      // loop again to get possible column names at current index
      let current = prepareValues(arr[i], '');
      if (Object.keys(current).length || Object.keys(arr[i]).length === 0) {
          // update found columns with either the found value of ""
          for (let key in cols) {
              cols[key].push(typeof current[key] === 'undefined' ? "" : current[key]);
          }
      }
  }
  
  let output = [];
  for (let i = 0; i <= arr.length; i++) {
      output.push([]);
  }
  
  // get column names and sort them
  let keys = Object.keys(cols);
  keys.sort((a, b) => a.localeCompare(b));

  // loop to assign column values at appropriate index
  for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let values = cols[key];
      output[0].push(key.slice(1));
      let length = values.length;
      for (let j = 0; j < values.length; j++) {
          output[j + 1][i] = values[j];
      }
  }
  
  return output;
};

function prepareColumns(arr, path, cols) {
  for (let key in arr) {
      let prefix = `${path}.${key}`;
      if (typeof arr[key] === 'object' && arr[key] !== null) {
          prepareColumns(arr[key], prefix, cols);
      } else {
          cols[prefix] = [];
      }
  }
}

function prepareValues(arr, path) {
  let current = {};
  for (let key in arr) {
      let prefix = `${path}.${key}`;
      if (typeof arr[key] === 'object' && arr[key] !== null) {
          current = Object.assign({}, current, prepareValues(arr[key], prefix));
      } else {
          current[prefix] = arr[key];
      }
  }
  
  return current;
}
