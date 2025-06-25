import Stack from "./stack.js";

var calPoints = function (operations) {
  let scoreStack = new Stack();
  operations.forEach((op) => {
    if (op === "C") {
      scoreStack.pop();
    } else if (op === "D") {
      scoreStack.push(scoreStack.peek() * 2);
    } else if (op === "+") {
      let a = scoreStack.pop();
      let b = scoreStack.peek();
      scoreStack.push(a);
      scoreStack.push(a + b);
    } else {
      scoreStack.push(Number(op));
    }
  });

  let sum = 0;
  while (!scoreStack.isEmpty()) {
    sum += scoreStack.pop();
  }
  return sum;
};

console.log(calPoints(["5", "2", "C", "D", "+"]));
