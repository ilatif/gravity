/**
 * Day 14 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/cache-with-time-limit/
 * @author Imran Latif (https://github.com/ilatif)
 */


var TimeLimitedCache = function() {
  this.map = {};
};

/** 
* @param {number} key
* @param {number} value
* @param {number} time until expiration in ms
* @return {boolean} if un-expired key already existed
*/
TimeLimitedCache.prototype.set = function(key, value, duration) {
  const adjustedDuration = this.adjustDuration(duration);

  if (typeof this.map[key] === 'undefined') {
      this.map[key] = [value, adjustedDuration];
      return false;
  } else {
      this.map[key] = [value, adjustedDuration];
      return true;
  }
};

/** 
* @param {number} key
* @return {number} value associated with key
*/
TimeLimitedCache.prototype.get = function(key) {
  const data = this.map[key];
  if (typeof data !== 'undefined') {
      if (data[1] < new Date().getTime()) {
          delete(this.map[key]);
          return -1;
      } else {
          return data[0];
      }
  }
  
  return -1;
};

/** 
* @return {number} count of non-expired keys
*/
TimeLimitedCache.prototype.count = function() {
  for (let key in this.map) {
      if (this.map[key][1] <= new Date().getTime()) {
          delete(this.map[key]);
      }
  }
  
  return Object.keys(this.map).length;
};

TimeLimitedCache.prototype.adjustDuration = function(duration) {
  return (new Date().getTime()) + duration;
}

/**
* Your TimeLimitedCache object will be instantiated and called as such:
* var obj = new TimeLimitedCache()
* obj.set(1, 42, 1000); // false
* obj.get(1) // 42
* obj.count() // 1
*/
