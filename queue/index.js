export default class Queue extends Array {
  enqueue(e) {
    super.push(e);
  }
  dequeue() {
    return super.shift();
  }
  peek() {
    return !this.isEmpty() ? this[0] : undefined;
  }
  isEmpty() {
    return this.length === 0;
  }
}
