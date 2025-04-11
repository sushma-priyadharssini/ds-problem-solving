function stockBuySell(price, n) {
    // Prices must be given for at least two days
    if (n === 1) return;

    let i=0;
    while(i<n-1) {
        while(i<n-1 && price[i+1]<=price[i]) i++

        if(i===n-1) break;

        let buy=i++

        while(i<n && price[i]>=price[i-1]) i++

        let sell=i-1

        console.log(buy, sell)
    }
}

let price = [100, 180, 260, 310, 40, 535, 695];
let n = price.length;
stockBuySell(price, n)
