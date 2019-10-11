/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 *
 * https://leetcode.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (28.99%)
 * Total Accepted:    195.6K
 * Total Submissions: 672.7K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * Given a matrix of m x n elements (m rows, n columns), return all elements of
 * the matrix in spiral order.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * Output: [1,2,3,6,9,8,7,4,5]
 * 
 * 
 * Example 2:
 * 
 * Input:
 * [
 * ⁠ [1, 2, 3, 4],
 * ⁠ [5, 6, 7, 8],
 * ⁠ [9,10,11,12]
 * ]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const res = [];

  if (!matrix.length || !matrix[0].length) {
    return res;
  }

  let level = 0;

  for (; level < matrix.length - 1 - level 
      && level < matrix[0].length - 1 - level; level++) {
    for (let y = level; y < matrix[0].length - 1 - level; y++) {
      res.push(matrix[level][y]);
    }

    for (let x = level; x < matrix.length - 1 - level; x++) {
      res.push(matrix[x][matrix[0].length - 1 - level]);
    }

    for (let y = matrix[0].length - 1 - level; y > level; y--) {
      res.push(matrix[matrix.length - 1 - level][y]);
    }

    for (let x = matrix.length - 1 - level; x > level; x--) {
      res.push(matrix[x][level]);
    }
  }

  if (level === matrix.length - 1 - level) {
    for (let y = level; y < matrix[0].length - level; y++) {
      res.push(matrix[level][y]);
    }
  } else if (level === matrix[0].length - 1 - level) {
    for (let x = level; x < matrix.length - level; x++) {
      res.push(matrix[x][level]);
    }
  }

  return res;
};