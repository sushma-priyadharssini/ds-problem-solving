import Stack from './stack.js'
let map = {
    ')':'(',
    ']':'[',
    '}':'{'
}

var isValid = function(s) {
    let stack = new Stack();
    for(let i=0;i<s.length;i++){
        if(s[i]==='(' || s[i]==='[' || s[i]==='{') {
            stack.push(s[i]);
        } else if (s[i]===')' || s[i]===']' || s[i]==='}') {
            let poppedValue = stack.pop();
            if(poppedValue !== map[s[i]]) return false
        }
    }
    if(stack.isEmpty()) return true
    return false
};

console.log(isValid("()[]{}"))