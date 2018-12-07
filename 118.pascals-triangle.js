/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 *
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (43.11%)
 * Total Accepted:    208.6K
 * Total Submissions: 483.9K
 * Testcase Example:  '5'
 *
 * Given a non-negative integer numRows, generate the first numRows of Pascal's
 * triangle.
 * 
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 * 
 * Example:
 * 
 * 
 * Input: 5
 * Output:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 * 
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const res = [[1]];

  for (let i = 1; i < numRows; i++) {
    res[i] = [];

    for (let j = 0; j < res[i - 1].length - 1; j++) {
      res[i][j] = res[i - 1][j] + res[i - 1][j + 1];
    }

    res[i].unshift(1);
    res[i].push(1);
  }
  
  res.length = numRows;

  return res;
};