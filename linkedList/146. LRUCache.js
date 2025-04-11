var ListNode = function (key, val) {
    this.key = key;
    this.val = val;
    this.prev=null;
    this.next=null;
}

var LRUCache = function(capacity) {
    this.capacity=capacity;
    this.length=0;
    this.head=null;
    this.tail=null;
    this.map={}
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.map[key];
    if(node) {
        this.remove(node)
        this.insert(node.key, node.val)
        return node.val
    } else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.map[key];
    if(node) {
        this.remove(node)
        this.insert(key, value)
    } else {
        if(this.length === this.capacity) {
            this.remove(this.head)
            this.insert(key, value)
        } else {
            this.insert(key, value)
            this.length++
        }
    }
};

LRUCache.prototype.remove = function(node) {
    let prev=node.prev
    let next=node.next
    if(prev) prev.next=next
    if(next) next.prev=prev
    if(this.head===node) this.head=next
    if(this.tail===node) this.tail=prev
    delete this.map[node.key]
};

LRUCache.prototype.insert = function(key, val) {
    let newNode = new ListNode(key, val)
    if(!this.tail) {
        this.head=newNode
        this.tail=newNode
    } else {
        this.tail.next=newNode
        newNode.prev=this.tail
        this.tail=newNode
    }
    this.map[key]=newNode
};

let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
console.log(lRUCache.get(1));    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.get(2));    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.get(1));    // return -1 (not found)
console.log(lRUCache.get(3));    // return 3
console.log(lRUCache.get(4));    // return 4