class ListNode {
  /**
   * @param {number} key
   */
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class MyHashMap {
  constructor() {
    this.map = Array.from({ length: 10000 }, () => new ListNode(0, 0));
  }

  hash(key) {
    return key % this.map.length;
  }

  put(key, value) {
    let cur = this.map[this.hash(key)];
    while (cur.next) {
      if (cur.next.key === key) {
        cur.next.value = value;
        return;
      }
      cur = cur.next;
    }
    cur.next = new ListNode(key, value);
  }

  get(key) {
    let cur = this.map[this.hash(key)];
    while (cur.next) {
      if (cur.next.key === key) {
        return cur.next.value;
      }
      cur = cur.next;
    }
    return -1;
  }

  remove(key) {
    let cur = this.map[this.hash(key)];
    while (cur && cur.next) {
      if (cur.next.key === key) {
        cur.next = cur.next.next;
      }
      cur = cur.next;
    }
  }
}
