/**
 * Day 18 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/convert-object-to-json-string/
 * @author Imran Latif (https://github.com/ilatif)
 */

/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {
  if (typeof object !== 'object') {
      return format(object);
  } else if (object === null) {
      return object;
  }

  return Array.isArray(object) ? `[${traverseArray(object, '')}]` : `{${traverseObject(object, '')}}`;
};

function traverseObject(object, str) {
  for (let key in object) {
      if (Array.isArray(object[key])) {
          str += `"${key}":[${traverseArray(object[key], '')}],`;
      } else if (isObject(object[key])) {
          str += `"${key}":{${traverseObject(object[key], '')}},`;
      } else {
          str += `"${key}":${format(object[key])},`;
      }
  }
  
  return str.slice(0, str.length - 1);
}
  
function traverseArray(arr, str) {
  for (let index in arr) {
      if (Array.isArray(arr[index])) {
          str += `[${traverseArray(arr[index], '')}],`;
      } else if (isObject(arr[index])) {
          console.log("Me here");
          str += `{${traverseObject(arr[index], '')}},`;
      } else {
          str += `${format(arr[index])},`;
      }
  }
  
  return str.slice(0, str.length - 1);
}

function isObject(any) {
  return typeof any === 'object' && any !== null;
}

function format(any) {
  return typeof any === 'string' ? `"${any}"` : any;
}
