/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 *
 * https://leetcode.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (32.86%)
 * Total Accepted:    168.2K
 * Total Submissions: 511.9K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in
 * the diagram below).
 * 
 * The robot can only move either down or right at any point in time. The robot
 * is trying to reach the bottom-right corner of the grid (marked 'Finish' in
 * the diagram below).
 * 
 * Now consider if some obstacles are added to the grids. How many unique paths
 * would there be?
 * 
 * 
 * 
 * An obstacle and empty space is marked as 1 and 0 respectively in the grid.
 * 
 * Note: m and n will be at most 100.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * [
 * [0,0,0],
 * [0,1,0],
 * [0,0,0]
 * ]
 * Output: 2
 * Explanation:
 * There is one obstacle in the middle of the 3x3 grid above.
 * There are two ways to reach the bottom-right corner:
 * 1. Right -> Right -> Down -> Down
 * 2. Down -> Down -> Right -> Right
 * 
 * 
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = obstacleGrid => {
  if (!obstacleGrid.length || !obstacleGrid[0].length) {
    return 0;
  }

  const dp = Array(obstacleGrid[0].length + 1).fill(0);

  dp[1] = 1 - obstacleGrid[0][0]; 

  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 1; j <= obstacleGrid[0].length; j++) {
      dp[j] = obstacleGrid[i][j - 1] === 0 ? dp[j - 1] + dp[j] : 0; 
    }
  }

  return dp[dp.length - 1];
};
