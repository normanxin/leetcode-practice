/*
 * @lc app=leetcode id=311 lang=javascript
 *
 * [311] Sparse Matrix Multiplication
 *
 * https://leetcode.com/problems/sparse-matrix-multiplication/description/
 *
 * algorithms
 * Medium (56.02%)
 * Total Accepted:    64K
 * Total Submissions: 114.3K
 * Testcase Example:  '[[1,0,0],[-1,0,3]]\n[[7,0,0],[0,0,0],[0,0,1]]'
 *
 * Given two sparse matrices A and B, return the result of AB.
 * 
 * You may assume that A's column number is equal to B's row number.
 * 
 * Example:
 * 
 * 
 * Input:
 * 
 * A = [
 * ⁠ [ 1, 0, 0],
 * ⁠ [-1, 0, 3]
 * ]
 * 
 * B = [
 * ⁠ [ 7, 0, 0 ],
 * ⁠ [ 0, 0, 0 ],
 * ⁠ [ 0, 0, 1 ]
 * ]
 * 
 * Output:
 * 
 * ⁠    |  1 0 0 |   | 7 0 0 |   |  7 0 0 |
 * AB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |
 * ⁠                 | 0 0 1 |
 * 
 * 
 */
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function(A, B) {
  const res = Array(A.length).fill().map(el => Array(B[0].length).fill(0));

  for (let i = 0; i < A.length; ++i) {
    for (let k = 0; k < A[0].length; ++k) {
      if (A[i][k] === 0) {
        continue;
      }

      for (let j = 0; j < B[0].length; j++) {
        if (B[k][j] === 0) {
          continue;
        }

        res[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return res;
};
