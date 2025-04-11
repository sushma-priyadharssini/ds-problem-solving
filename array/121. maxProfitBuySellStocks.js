let maxProfit = function (prices) {
  let maxProfit = 0;

  for (let buyPrice = 0; buyPrice < prices.length; buy++) {
    for (let sell = buyPrice + 1; sell < prices.length; sell++) {
      let profit = prices[sellPrice] - prices[buyPrice];
      maxProfit = Math.max(maxProfit, profit);
    }
  }
  return maxProfit;
};

let maxProfitN = function (prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let sell = 1; sell < prices.length; sell++) {
    let sellPrice = prices[sell];
    let profit = sellPrice - minPrice;
    maxProfit = Math.max(profit, maxProfit);
    if (sellPrice < minPrice) minPrice = sellPrice;
  }
  return maxProfit;
};

let arr = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(arr));
console.log(maxProfitN(arr));
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
