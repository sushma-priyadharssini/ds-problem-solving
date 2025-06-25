class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    return this.items.push(element);
  }

  pop() {
    if (this.items.length > 0) {
      return this.items.pop();
    }
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

function evalRPN(tokens) {
  const stack = [];
  for (const c of tokens) {
    if (c === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (c === "-") {
      const a = stack.pop();
      const b = stack.pop();
      stack.push(b - a);
    } else if (c === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (c === "/") {
      const a = stack.pop();
      const b = stack.pop();
      stack.push(Math.trunc(b / a));
    } else {
      stack.push(parseInt(c));
    }
  }
  return stack.pop();
}

console.log(evalRPN(["2", "1", "+", "3", "*"]));
