function backTrack(open, close, n, res, comb) {
  if (open === close && open === n) {
    res.push(comb);
    return;
  }
  if (open < n) {
    backTrack(open + 1, close, n, res, comb + "(");
  }
  if (close < open) {
    backTrack(open, close + 1, n, res, comb + ")");
  }
}

var generateParenthesis = function (n) {
  let res = [];
  backTrack(0, 0, n, res, "");
  return res;
};
console.log(generateParenthesis(3))
