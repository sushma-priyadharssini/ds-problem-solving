function stockBuySell(price, n) {
    // Prices must be given for at least two days
    if (n === 1) return;

    let i = 0;
    while (i < n - 1) {
        while (i < n - 1 && price[i + 1] <= price[i]) i++

        if (i === n - 1) break;

        let buy = i++

        while (i < n && price[i] >= price[i - 1]) i++

        let sell = i - 1

        console.log(buy, sell)
    }
}

var stockBuySell1 = function (prices, n) {
    let profit = 0;
    let buy = 0, sell = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
            sell = Math.max(sell, i);
        } else {
            if (sell) {
                console.log(buy, sell);
            }
            buy = i;
        }
    }
    if (buy !== sell) {
        console.log(buy, prices.length - 1)
    }
    return profit;
};

let price = [100, 180, 260, 310, 40, 535, 695];
let n = price.length;
stockBuySell1([7, 1, 5, 3, 6, 4, 3], n)
