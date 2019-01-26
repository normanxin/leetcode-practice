/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 *
 * https://leetcode.com/problems/sudoku-solver/description/
 *
 * algorithms
 * Hard (35.08%)
 * Total Accepted:    114.3K
 * Total Submissions: 325.9K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 * 
 * A sudoku solution must satisfy all of the following rules:
 * 
 * 
 * Each of the digits 1-9 must occur exactly once in each row.
 * Each of the digits 1-9 must occur exactly once in each column.
 * Each of the the digits 1-9 must occur exactly once in each of the 9 3x3
 * sub-boxes of the grid.
 * 
 * 
 * Empty cells are indicated by the character '.'.
 * 
 * 
 * A sudoku puzzle...
 * 
 * 
 * ...and its solution numbers marked in red.
 * 
 * Note:
 * 
 * 
 * The given board contain only digits 1-9 and the character '.'.
 * You may assume that the given Sudoku puzzle will have a single unique
 * solution.
 * The given board size is always 9x9.
 * 
 * 
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solveSudoku(board) {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y] !== '.') {
        continue;
      }

      for (let i = 1; i <= 9; i++) {
        const ch = i.toString();

        if (!validate(board, x, y, ch)) {
          continue;
        }

        board[x][y] = ch;

        if (solveSudoku(board)) {
          return true;
        }

        board[x][y] = '.';
      }

      return false;
    }
  }

  return true;
}

function validate(board, x, y, ch) {
  if (board[x].indexOf(ch) > -1) {
    return false;
  }

  if (board.map(row => row[y]).indexOf(ch) > -1) {
    return false;
  }

  const startX = Math.floor(x / 3) * 3;
  const startY = Math.floor(y / 3) * 3;

  for (let i = startX; i < startX + 3; i++) {
    for (let j = startY; j < startY + 3; j++) {
      if (board[i][j] === ch) {
        return false;
      }
    }
  }

  return true;
}