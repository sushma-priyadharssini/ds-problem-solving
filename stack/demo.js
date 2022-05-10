import Stack from './stack.js'

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(4);
stack.push(8);
console.log(stack.items);

stack.pop();
console.log(stack.items);

console.log(stack.peek());

console.log(stack.isEmpty());

console.log(stack.size());

stack.clear();
console.log(stack.items);