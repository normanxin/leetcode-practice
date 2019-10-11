/*
 * @lc app=leetcode id=221 lang=javascript
 *
 * [221] Maximal Square
 *
 * https://leetcode.com/problems/maximal-square/description/
 *
 * algorithms
 * Medium (33.72%)
 * Total Accepted:    142.2K
 * Total Submissions: 421.8K
 * Testcase Example:  '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]'
 *
 * Given a 2D binary matrix filled with 0's and 1's, find the largest square
 * containing only 1's and return its area.
 * 
 * Example:
 * 
 * 
 * Input: 
 * 
 * 1 0 1 0 0
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 * 
 * Output: 4
 * 
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = matrix => {
  let res = 0;

  if (!matrix.length || !matrix[0].length) {
    return res;
  }

  const dp = Array(matrix.length + 1).fill()
      .map(row => Array(matrix[0].length + 1).fill(0));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] === '1' && 
          (dp[i + 1][j + 1] = Math.min(dp[i][j], dp[i][j + 1], dp[i + 1][j]) + 1);
      res = Math.max(dp[i + 1][j + 1] ** 2, res);
    }
  }

  return res;
};