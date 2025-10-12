/* 
You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

 

Example 1:

Input: prices = [1,2,3,0,2]
Output: 3
Explanation: transactions = [buy, sell, cooldown, buy, sell]
Example 2:

Input: prices = [1]
Output: 0
 */

var maxProfit = function (prices) {
    let dp = {};
    var dfsRecursive = function (i, isBuying) {
        if (i >= prices.length) return 0;

        let key = i + "," + isBuying;
        if (key in dp) return dp[key];

        let cooldown = dfsRecursive(i + 1, isBuying)
        if (isBuying) {
            let buy = dfsRecursive(i + 1, !isBuying) - prices[i];
            dp[key] = Math.max(buy, cooldown)
        } else {
            let sell = dfsRecursive(i + 2, !isBuying) + prices[i];
            dp[key] = Math.max(sell, cooldown)
        }
        return dp[key]
    }
    return dfsRecursive(0, true);
};