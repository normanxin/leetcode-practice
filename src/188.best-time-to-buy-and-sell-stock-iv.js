/*
 * @lc app=leetcode id=188 lang=javascript
 *
 * [188] Best Time to Buy and Sell Stock IV
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/description/
 *
 * algorithms
 * Hard (25.83%)
 * Total Accepted:    79K
 * Total Submissions: 305.8K
 * Testcase Example:  '2\n[2,4,1]'
 *
 * Say you have an array for which the ith element is the price of a given
 * stock on day i.
 * 
 * Design an algorithm to find the maximum profit. You may complete at most k
 * transactions.
 * 
 * Note:
 * You may not engage in multiple transactions at the same time (ie, you must
 * sell the stock before you buy again).
 * 
 * Example 1:
 * 
 * 
 * Input: [2,4,1], k = 2
 * Output: 2
 * Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit
 * = 4-2 = 2.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,2,6,5,0,3], k = 2
 * Output: 7
 * Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit
 * = 6-2 = 4.
 * Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 =
 * 3.
 * 
 */
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  if (!prices.length) {
    return 0;
  }

  if (k >= prices.length) {
    return solveMaxProfit(prices);
  }
  
  const global = Array(k + 1).fill(0);
  const local = Array(k + 1).fill(0);

  for (let i = 0; i < prices.length - 1; i++) {
    const diff = prices[i + 1] - prices[i];

    for (let j = k; j >= 1; j--) {
      local[j] = Math.max(global[j - 1] + Math.max(diff, 0), local[j] + diff);
      global[j] = Math.max(global[j], local[j]); 
    }
  }
  
  return global[k];
};

function solveMaxProfit(prices) {
  let res = 0;

  for (let i = 1; i < prices.length; i++) {
    res += prices[i] - prices[i - 1] > 0 ? prices[i] - prices[i - 1] : 0;
  }

  return res;
}