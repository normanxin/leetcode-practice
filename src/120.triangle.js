/*
 * [120] Triangle
 *
 * https://leetcode.com/problems/triangle/description/
 *
 * algorithms
 * Medium (37.29%)
 * Total Accepted:    158.1K
 * Total Submissions: 423.9K
 * Testcase Example:  '[[2],[3,4],[6,5,7],[4,1,8,3]]'
 *
 * Given a triangle, find the minimum path sum from top to bottom. Each step
 * you may move to adjacent numbers on the row below.
 * 
 * For example, given the following triangle
 * 
 * 
 * [
 * ⁠    [2],
 * ⁠   [3,4],
 * ⁠  [6,5,7],
 * ⁠ [4,1,8,3]
 * ]
 * 
 * 
 * The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
 * 
 * Note:
 * 
 * Bonus point if you are able to do this using only O(n) extra space, where n
 * is the total number of rows in the triangle.
 * 
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const dp = [...triangle[0]];

  for (let i = 1; i < triangle.length; i++) {
    for (let j = triangle[i].length - 1; j >= 0; j--) {
      dp[j] = Math.min(
        dp[j - 1] === undefined ? Infinity : dp[j - 1], 
        dp[j] === undefined ? Infinity : dp[j]) + triangle[i][j];
    }
  }

  return Math.min(...dp);
};
