/*
 * [74] Search a 2D Matrix
 *
 * https://leetcode.com/problems/search-a-2d-matrix/description/
 *
 * algorithms
 * Medium (34.48%)
 * Total Accepted:    192.6K
 * Total Submissions: 558.5K
 * Testcase Example:  '[[1,3,5,7],[10,11,16,20],[23,30,34,50]]\n3'
 *
 * Write an efficient algorithm that searches for a value in an m x n matrix.
 * This matrix has the following properties:
 * 
 * 
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the
 * previous row.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 3
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 13
 * Output: false
 * 
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix.length || !matrix[0].length) {
    return false;
  }

  let lo = 0;
  let hi = matrix.length * matrix[0].length - 1;

  while (lo + 1 < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    const x = Math.floor(mid / matrix[0].length);
    const y = mid % matrix[0].length;

    if (matrix[x][y] === target) {
      return true;
    }

    matrix[x][y] < target ? (lo = mid) : (hi = mid);
  }

  const loX = Math.floor(lo / matrix[0].length);
  const loY = lo % matrix[0].length;
  const hiX = Math.floor(hi / matrix[0].length);
  const hiY = hi % matrix[0].length;

  return matrix[loX][loY] === target || matrix[hiX][hiY] === target;
};