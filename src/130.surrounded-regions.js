/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 *
 * https://leetcode.com/problems/surrounded-regions/description/
 *
 * algorithms
 * Medium (21.33%)
 * Total Accepted:    123.8K
 * Total Submissions: 580.3K
 * Testcase Example:  '[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]'
 *
 * Given a 2D board containing 'X' and 'O' (the letter O), capture all regions
 * surrounded by 'X'.
 * 
 * A region is captured by flipping all 'O's into 'X's in that surrounded
 * region.
 * 
 * Example:
 * 
 * 
 * X X X X
 * X O O X
 * X X O X
 * X O X X
 * 
 * 
 * After running your function, the board should be:
 * 
 * 
 * X X X X
 * X X X X
 * X X X X
 * X O X X
 * 
 * 
 * Explanation:
 * 
 * Surrounded regions shouldn’t be on the border, which means that any 'O' on
 * the border of the board are not flipped to 'X'. Any 'O' that is not on the
 * border and it is not connected to an 'O' on the border will be flipped to
 * 'X'. Two cells are connected if they are adjacent cells connected
 * horizontally or vertically.
 * 
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      if (x !== 0 && x !== board.length - 1 && y !== 0 && y !== board[0].length - 1) {
        continue;
      }

      dfs(board, [x, y]);
    }
  }

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      board[x][y] = board[x][y] === '#' ? 'O' : 'X';
    }
  }
};

function dfs(board, [x, y]) {
  if (x < 0 || x >= board.length 
    || y < 0 || y >= board[0].length 
    || board[x][y] !== 'O') {
    return;
  }

  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  board[x][y] = '#';

  for (let [dx, dy] of dirs) {
    dfs(board, [x + dx, y + dy]);
  }
}