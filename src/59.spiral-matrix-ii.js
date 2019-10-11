/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 *
 * https://leetcode.com/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (44.42%)
 * Total Accepted:    122.3K
 * Total Submissions: 274.6K
 * Testcase Example:  '3'
 *
 * Given a positive integer n, generate a square matrix filled with elements
 * from 1 to n2 in spiral order.
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 8, 9, 4 ],
 * ⁠[ 7, 6, 5 ]
 * ]
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let level = 0;
  let i = 1;
  const res = Array(n).fill().map(el => []);

  for (; level < n - 1 - level; level++) {
    for (let y = level; y < n - 1 - level; y++) {
      res[level][y] = i++;
    }

    for (let x = level; x < n - 1 - level; x++) {
      res[x][n - 1 - level] = i++;
    }

    for (let y = n - 1 - level; y > level; y--) {
      res[n - 1 - level][y] = i++;
    }

    for (let x = n - 1 - level; x > level; x--) {
      res[x][level] = i++;
    }
  }

  if (level === n - 1 - level) {
    res[level][level] = i++;
  }

  return res;
};