/*
 * [79] Word Search
 *
 * https://leetcode.com/problems/word-search/description/
 *
 * algorithms
 * Medium (29.48%)
 * Total Accepted:    226.7K
 * Total Submissions: 768.9K
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * Given a 2D board and a word, find if the word exists in the grid.
 * 
 * The word can be constructed from letters of sequentially adjacent cell,
 * where "adjacent" cells are those horizontally or vertically neighboring. The
 * same letter cell may not be used more than once.
 * 
 * Example:
 * 
 * 
 * board =
 * [
 * ⁠ ['A','B','C','E'],
 * ⁠ ['S','F','C','S'],
 * ⁠ ['A','D','E','E']
 * ]
 * 
 * Given word = "ABCCED", return true.
 * Given word = "SEE", return true.
 * Given word = "ABCB", return false.
 * 
 * 
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      if (dfs(board, word, [x, y])) {
        return true;
      }
    }
  }

  return false;
}

function dfs(board, word, [x, y], path = [], 
  visited = [...board].map(row => [])) {
  const cur = path.join('');

  if (word === cur) {
    return true;
  }

  if (x < 0 || x >= board.length
    || y < 0 || y >= board[0].length 
    || visited[x][y] 
    || !word.startsWith(cur)) {
    return false;
  }

  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  path.push(board[x][y]);
  visited[x][y] = true;

  if (dirs.some(([dx, dy]) =>
    dfs(board, word, [x + dx, y + dy], path, visited))) {
    return true;
  }

  path.pop();
  visited[x][y] = false;

  return false;
};