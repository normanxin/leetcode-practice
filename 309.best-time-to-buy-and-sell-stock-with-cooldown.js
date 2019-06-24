/*
 * @lc app=leetcode id=309 lang=javascript
 *
 * [309] Best Time to Buy and Sell Stock with Cooldown
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/
 *
 * algorithms
 * Medium (44.17%)
 * Total Accepted:    93.4K
 * Total Submissions: 211.4K
 * Testcase Example:  '[1,2,3,0,2]'
 *
 * Say you have an array for which the ith element is the price of a given
 * stock on day i.
 * 
 * Design an algorithm to find the maximum profit. You may complete as many
 * transactions as you like (ie, buy one and sell one share of the stock
 * multiple times) with the following restrictions:
 * 
 * 
 * You may not engage in multiple transactions at the same time (ie, you must
 * sell the stock before you buy again).
 * After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1
 * day)
 * 
 * 
 * Example:
 * 
 * 
 * Input: [1,2,3,0,2]
 * Output: 3 
 * Explanation: transactions = [buy, sell, cooldown, buy, sell]
 * 
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
  let buy = -Infinity;
  let preBuy = 0;
  let sell = 0;
  let preSell = 0;

  for (let price of prices) {
    preBuy = buy;
    buy = Math.max(preSell - price, preBuy);
    preSell = sell;
    sell = Math.max(preBuy + price, preSell);
  }

  return sell;
};
