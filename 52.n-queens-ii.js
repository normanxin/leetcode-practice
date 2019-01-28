/*
 * @lc app=leetcode id=52 lang=javascript
 *
 * [52] N-Queens II
 *
 * https://leetcode.com/problems/n-queens-ii/description/
 *
 * algorithms
 * Hard (50.21%)
 * Total Accepted:    90.6K
 * Total Submissions: 180.4K
 * Testcase Example:  '4'
 *
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard
 * such that no two queens attack each other.
 * 
 * 
 * 
 * Given an integer n, return the number of distinct solutions to the n-queens
 * puzzle.
 * 
 * Example:
 * 
 * 
 * Input: 4
 * Output: 2
 * Explanation: There are two distinct solutions to the 4-queens puzzle as
 * shown below.
 * [
 * [".Q..",  // Solution 1
 * "...Q",
 * "Q...",
 * "..Q."],
 * 
 * ["..Q.",  // Solution 2
 * "Q...",
 * "...Q",
 * ".Q.."]
 * ]
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n, res = {cnt: 0},
  board = Array(n).fill().map(row => Array(n).fill('.'))) {
  
  if (n === 0) {
    return ++res.cnt;
  }

  for (let x = n - 1, y = 0; y < board[x].length; y++) {
    if (!validate(board, x, y)) {
      continue;
    }

    board[x][y] = 'Q';
    totalNQueens(n - 1, res, board);
    board[x][y] = '.';
  }

  return res.cnt;
};

function validate(board, x, y) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '.') {
        continue;
      }

      if (i === x || j === y || Math.abs(x - i) === Math.abs(y - j)) {
        return false;
      }
    }
  }

  return true;
}