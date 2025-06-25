// import Queue from "../queue/queue";
class Queue extends Array {
  enqueue(e) {
    super.push(e);
  }
  dequeue() {
    return super.shift();
  }
  peek() {
    return !this.empty() ? this[0] : undefined;
  }
  empty() {
    return this.length === 0;
  }
}

class MyStack {
  constructor() {
    this.q = null;
  }

  push(element) {
    let newQueue = new Queue();
    newQueue.enqueue(element);
    newQueue.enqueue(this.q);
    this.q = newQueue;
  }

  pop() {
    if (this.q === null) return -1;

    const top = this.q.dequeue();
    this.q = this.q.dequeue();
    return top;
  }

  top() {
    if (this.q === null) return -1;
    return this.q.peek();
  }

  empty() {
    return this.q === null;
  }
}

var obj = new MyStack();
obj.push(1);
console.log(1, obj);
obj.push(2);
console.log(2, obj);
obj.push(3);
console.log(3, obj);
obj.pop();
console.log(4, obj);
obj.top();
console.log(5, obj);
obj.empty();
console.log(6, obj);
