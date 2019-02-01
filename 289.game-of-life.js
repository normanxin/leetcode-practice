/*
 * @lc app=leetcode id=289 lang=javascript
 *
 * [289] Game of Life
 *
 * https://leetcode.com/problems/game-of-life/description/
 *
 * algorithms
 * Medium (42.60%)
 * Total Accepted:    96.7K
 * Total Submissions: 226.9K
 * Testcase Example:  '[[0,1,0],[0,0,1],[1,1,1],[0,0,0]]'
 *
 * According to the Wikipedia's article: "The Game of Life, also known simply
 * as Life, is a cellular automaton devised by the British mathematician John
 * Horton Conway in 1970."
 * 
 * Given a board with m by n cells, each cell has an initial state live (1) or
 * dead (0). Each cell interacts with its eight neighbors (horizontal,
 * vertical, diagonal) using the following four rules (taken from the above
 * Wikipedia article):
 * 
 * 
 * Any live cell with fewer than two live neighbors dies, as if caused by
 * under-population.
 * Any live cell with two or three live neighbors lives on to the next
 * generation.
 * Any live cell with more than three live neighbors dies, as if by
 * over-population..
 * Any dead cell with exactly three live neighbors becomes a live cell, as if
 * by reproduction.
 * 
 * 
 * Write a function to compute the next state (after one update) of the board
 * given its current state. The next state is created by applying the above
 * rules simultaneously to every cell in the current state, where births and
 * deaths occur simultaneously.
 * 
 * Example:
 * 
 * 
 * Input: 
 * [
 * [0,1,0],
 * [0,0,1],
 * [1,1,1],
 * [0,0,0]
 * ]
 * Output: 
 * [
 * [0,0,0],
 * [1,0,1],
 * [0,1,1],
 * [0,1,0]
 * ]
 * 
 * 
 * Follow up:
 * 
 * 
 * Could you solve it in-place? Remember that the board needs to be updated at
 * the same time: You cannot update some cells first and then use their updated
 * values to update other cells.
 * In this question, we represent the board using a 2D array. In principle, the
 * board is infinite, which would cause problems when the active area
 * encroaches the border of the array. How would you address these problems?
 * 
 * 
 */
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      let cnt = 0;

      for (let i = x - 1; i <= x + 1; i++) {
        for (let j = y - 1; j <= y + 1; j++) {
          if (i === x && j === y 
              || (i < 0 || i >= board.length)
              || (j < 0 || j >= board[i].length)) {
            continue;
          }

          board[i][j] > 0 && cnt++;
        }
      }

      if (board[x][y] === 0 && cnt === 3) {
        board[x][y] = -1;
      } else if (board[x][y] === 1 && (cnt < 2 || cnt > 3)) {
        board[x][y] = 2;
      }
    }
  }

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      board[x][y] = Math.abs(board[x][y] % 2);
    }
  }
};