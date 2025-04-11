function calcNodes(N, I) {
    var result = 0;
 
    result = I * (N - 1) + 1;
 
    return result;
}
 
var N = 5, I = 2;
console.log(calcNodes(N,I))