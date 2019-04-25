/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let minPrice = Infinity, maxProfit = 0;
    prices.forEach(price => {
        if(price < minPrice) {
            minPrice = price;
        }
        if(maxProfit < price - minPrice) {
            maxProfit = price - minPrice;
        }
    })
    return maxProfit;
};