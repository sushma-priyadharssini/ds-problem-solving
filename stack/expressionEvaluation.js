/* evaluate("100 * ( 2 + 12 ) / 14") */

function calculate (op, b, a) {
	if(op==='*') return a*b
  if(op==='/') return a/b
  if(op==='-') return a-b
  if(op==='+') return a+b
  return 0
}

function hasPrecedence(op1,op2) {
    if (op2 == '(' || op2 == ')')
    {
        return false;
    }
    if ((op1 == '*' || op1 == '/') &&
           (op2 == '+' || op2 == '-'))
    {
        return false;
    }
    else
    {
        return true;
    }
}

function evaluate(str) {
	let arr = str.split('')
	let ops = [];
  let val = [];
  
  for(let i =0; i<arr.length; i++) {
    if(arr[i]===' ') continue
    
    if(arr[i] === '(') ops.push('(')
    
    if(arr[i] >= '0' && arr[i] <= '9') {
    	let num = ''
      while(i<arr.length && arr[i] >= '0' && arr[i] <= '9') {
      	num=num+arr[i++]
      }
      val.push(parseInt(num, 10))
    	i--;
    }
    
    if(arr[i] === ')') {
    	while(ops[ops.length-1]!=='(') {
      	    val.push(calculate(ops.pop(), val.pop(), val.pop()))
      }
      ops.pop()
    }
    
    if(arr[i]==='*' ||arr[i]==='/' || arr[i]==='+' || arr[i]==='-' ) {
    	while(ops.length > 0 && hasPrecedence(arr[i], ops[ops.length-1])) {
      	val.push(calculate(ops.pop(), val.pop(), val.pop()))
      }
      ops.push(arr[i])
    }
    
  }
  while(ops.length>0) {
    val.push(calculate(ops.pop(), val.pop(), val.pop()))
  }      
  return val.pop()
}

console.log(evaluate('100 * ( 2 + 10 ) / 6') )