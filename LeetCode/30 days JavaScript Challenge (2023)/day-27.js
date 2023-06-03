/**
 * Day 27 - LeetCode 30 days JavaScript Challenge (2023) 
 * Problem link: https://leetcode.com/problems/event-emitter/
 * @author Imran Latif (https://github.com/ilatif)
 */

class EventEmitter {
  listeners = {};

  subscribe(event, cb) {
    if (typeof this.listeners[event] === 'undefined') {
      this.listeners[event] = [];
    }
    
    const length = this.listeners[event].push(cb);
    return {
      unsubscribe: () => {
        if (this.listeners[event]) {
            this.listeners[event].splice(length - 1, 1);
        }
      }
    };
  }

  emit(event, args = []) {
    const res = [];
    const callbacks = this.listeners[event] ?? [];
    for (let i = 0; i < callbacks.length; i++) {
      res.push(callbacks[i](...args));
    }
    
    return res;
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
