/* 
Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

Implement the TimeMap class:

TimeMap() Initializes the object of the data structure.
void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".
 */

class TimeMap {
  constructor() {
    this.hashMap = new Map();
  }

  set(key, value, timestamp) {
    if (!this.hashMap.has(key)) {
      this.hashMap.set(key, []);
    }
    this.hashMap.get(key).push([timestamp, value]);
  }

  get = function (key, timestamp) {
    const values = this.hashMap.get(key) || [];
    let left = 0;
    let right = values.length - 1;
    let result = "";

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (values[mid][0] <= timestamp) {
        result = values[mid][1];
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  };
}
