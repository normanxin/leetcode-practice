/*
 * [308] Range Sum Query 2D - Mutable
 *
 * https://leetcode.com/problems/range-sum-query-2d-mutable/description/
 *
 * algorithms
 * Hard (28.67%)
 * Total Accepted:    28.2K
 * Total Submissions: 98.3K
 * Testcase Example:  '["NumMatrix","sumRegion","update","sumRegion"]\n[[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[3,2,2],[2,1,4,3]]'
 *
 * Given a 2D matrix matrix, find the sum of the elements inside the rectangle
 * defined by its upper left corner (row1, col1) and lower right corner (row2,
 * col2).
 * 
 * 
 * 
 * The above rectangle (with the red border) is defined by (row1, col1) = (2,
 * 1) and (row2, col2) = (4, 3), which contains sum = 8.
 * 
 * 
 * Example:
 * 
 * Given matrix = [
 * ⁠ [3, 0, 1, 4, 2],
 * ⁠ [5, 6, 3, 2, 1],
 * ⁠ [1, 2, 0, 1, 5],
 * ⁠ [4, 1, 0, 1, 7],
 * ⁠ [1, 0, 3, 0, 5]
 * ]
 * 
 * sumRegion(2, 1, 4, 3) -> 8
 * update(3, 2, 2)
 * sumRegion(2, 1, 4, 3) -> 10
 * 
 * 
 * 
 * Note:
 * 
 * The matrix is only modifiable by the update function.
 * You may assume the number of calls to update and sumRegion function is
 * distributed evenly.
 * You may assume that row1 ≤ row2 and col1 ≤ col2.
 * 
 * 
 */
class NumMatrix {
  /**
   * @param {number[][]} matrix
   */
  constructor(matrix) {
    if (!matrix.length || !matrix[0].length) {
      return;
    }

    this.mat = Array(matrix.length + 1).fill().map(el => Array(matrix[0].length + 1).fill(0));
    this.bit = Array(matrix.length + 1).fill().map(el => Array(matrix[0].length + 1).fill(0));
    
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        this.update(i, j, matrix[i][j]);
      }
    }
  }
  
  /** 
   * @param {number} row1 
   * @param {number} col1 
   * @param {number} row2 
   * @param {number} col2
   * @return {number}
   */
  sumRegion(row1, col1, row2, col2) {
    return this.getSum(row2 + 1, col2 + 1) - this.getSum(row1, col2 + 1) - this.getSum(row2 + 1, col1) + this.getSum(row1, col1);
  }

  update(row, col, val) {
    const diff = val - this.mat[row + 1][col + 1];

    for (let i = row + 1; i < this.mat.length; i += i & -i) {
      for (let j = col + 1; j < this.mat[i].length; j += j & -j) {
        this.bit[i][j] += diff;
      }
    }

    this.mat[row + 1][col + 1] = val;
  }

  getSum(row, col) {
    let res = 0;

    for (let i = row; i > 0; i -= i & -i) {
        for (let j = col; j > 0; j -= j & -j) {
          res += this.bit[i][j];
        }
    }

    return res;
  } 
}

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * obj.update(row,col,val)
 * var param_2 = obj.sumRegion(row1,col1,row2,col2)
 */
