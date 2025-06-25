// 1. Time complexity: O(n) for each function call. Space complexity: O(n)
class MyHashSet {
  constructor() {
    this.data = [];
  }

  /**
   * @param {number} key
   * @return {void}
   */
  add(key) {
    if (!this.data.includes(key)) {
      this.data.push(key);
    }
  }

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    const index = this.data.indexOf(key);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }

  /**
   * @param {number} key
   * @return {boolean}
   */
  contains(key) {
    return this.data.includes(key);
  }
}

//2. Time complexity: O(1) for each function call. Space complexity: O(1000000)
class MyHashSet {
  constructor() {
    this.data = new Array(1000001).fill(false);
  }

  /**
   * @param {number} key
   * @return {void}
   */
  add(key) {
    this.data[key] = true;
  }

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    this.data[key] = false;
  }

  /**
   * @param {number} key
   * @return {boolean}
   */
  contains(key) {
    return this.data[key];
  }
}

//3. Time complexity: O(n/k)  for each function call. - on avg case O(1)
// Space complexity: O(k+m)
// Where n is the number of keys, k is the size of the set (10000) and m is the number of unique keys in a linked list.
class ListNode {
  /**
   * @param {number} key
   */
  constructor(key) {
    this.key = key;
    this.next = null;
  }
}

class MyHashSet {
  constructor() {
    this.set = Array.from({ length: 10000 }, () => new ListNode(0)); // why 10000, to avoid frequent collisions
  }

  /**
   * @param {number} key
   * @return {number}
   */
  hash(key) {
    return key % this.set.length;
  }

  /**
   * @param {number} key
   * @return {void}
   */
  add(key) {
    let cur = this.set[this.hash(key)];
    while (cur.next) {
      if (cur.next.key === key) {
        return;
      }
      cur = cur.next;
    }
    cur.next = new ListNode(key);
  }

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    let cur = this.set[this.hash(key)];
    while (cur.next) {
      if (cur.next.key === key) {
        cur.next = cur.next.next;
        return;
      }
      cur = cur.next;
    }
  }

  /**
   * @param {number} key
   * @return {boolean}
   */
  contains(key) {
    let cur = this.set[this.hash(key)];
    while (cur.next) {
      if (cur.next.key === key) {
        return true;
      }
      cur = cur.next;
    }
    return false;
  }
}
