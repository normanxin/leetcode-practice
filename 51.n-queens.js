/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 *
 * https://leetcode.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (37.12%)
 * Total Accepted:    125.3K
 * Total Submissions: 337.5K
 * Testcase Example:  '4'
 *
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard
 * such that no two queens attack each other.
 * 
 * 
 * 
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 * 
 * Each solution contains a distinct board configuration of the n-queens'
 * placement, where 'Q' and '.' both indicate a queen and an empty space
 * respectively.
 * 
 * Example:
 * 
 * 
 * Input: 4
 * Output: [
 * ⁠[".Q..",  // Solution 1
 * ⁠ "...Q",
 * ⁠ "Q...",
 * ⁠ "..Q."],
 * 
 * ⁠["..Q.",  // Solution 2
 * ⁠ "Q...",
 * ⁠ "...Q",
 * ⁠ ".Q.."]
 * ]
 * Explanation: There exist two distinct solutions to the 4-queens puzzle as
 * shown above.
 * 
 * 
 */
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n, res = [],
    board = Array(n).fill().map(row => Array(n).fill('.'))) {
  if (n === 0) {
    res.push(board.map(row => row.join('')));

    return res;
  }

  for (let x = n - 1, y = 0; y < board[x].length; y++) {
    if (!validate(board, x, y)) {
      continue;
    }

    board[x][y] = 'Q';
    solveNQueens(n - 1, res, board);
    board[x][y] = '.';
  }

  return res;
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