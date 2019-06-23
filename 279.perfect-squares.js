/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 *
 * https://leetcode.com/problems/perfect-squares/description/
 *
 * algorithms
 * Medium (40.82%)
 * Total Accepted:    163.1K
 * Total Submissions: 399.5K
 * Testcase Example:  '12'
 *
 * Given a positive integer n, find the least number of perfect square numbers
 * (for example, 1, 4, 9, 16, ...) which sum to n.
 * 
 * Example 1:
 * 
 * 
 * Input: n = 12
 * Output: 3 
 * Explanation: 12 = 4 + 4 + 4.
 * 
 * Example 2:
 * 
 * 
 * Input: n = 13
 * Output: 2
 * Explanation: 13 = 4 + 9.
 */
/**
 * @param {number} n
 * @return {number}
 */
const numSquares = n => {
  const dp = Array(n + 1).fill(Infinity);

  dp[0] = 0;

  for (let i = 1; i * i <= n; i++) {
    dp[i * i] = 1;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] = Math.min(dp[i], dp[j] + dp[i - j]);
    }
  }

  return dp[n];
};