/*
 * @lc app=leetcode id=361 lang=javascript
 *
 * [361] Bomb Enemy
 *
 * https://leetcode.com/problems/bomb-enemy/description/
 *
 * algorithms
 * Medium (41.90%)
 * Total Accepted:    29.6K
 * Total Submissions: 70.5K
 * Testcase Example:  '[["0","E","0","0"],["E","0","W","E"],["0","E","0","0"]]'
 *
 * Given a 2D grid, each cell is either a wall 'W', an enemy 'E' or empty '0'
 * (the number zero), return the maximum enemies you can kill using one bomb.
 * The bomb kills all the enemies in the same row and column from the planted
 * point until it hits the wall since the wall is too strong to be destroyed.
 * Note: You can only put the bomb at an empty cell.
 * 
 * Example:
 * 
 * 
 * 
 * Input: [["0","E","0","0"],["E","0","W","E"],["0","E","0","0"]]
 * Output: 3 
 * Explanation: For the given grid,
 * 
 * 0 E 0 0 
 * E 0 W E 
 * 0 E 0 0
 * 
 * Placing a bomb at (1,1) kills 3 enemies.
 * 
 * 
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (grid[x][y] !== 'E') {
        continue;
      }

      for (let i = x - 1; i >= 0 && grid[i][y] !== 'W'; i--) {
        if (isNaN(grid[i][y])) {
          continue;
        }

        grid[i][y] = +grid[i][y] + 1;
      }

      for (let i = x + 1; i < grid.length && grid[i][y] !== 'W'; i++) {
        if (isNaN(grid[i][y])) {
          continue;
        }

        grid[i][y] = +grid[i][y] + 1;
      }

      for (let i = y - 1; i >= 0 && grid[x][i] !== 'W'; i--) {
        if (isNaN(grid[x][i])) {
          continue;
        }

        grid[x][i] = +grid[x][i] + 1;
      }

      for (let i = y + 1; i < grid[x].length && grid[x][i] !== 'W'; i++) {
        if (isNaN(grid[x][i])) {
          continue;
        }

        grid[x][i] = +grid[x][i] + 1;
      }
    }
  }

  let res = 0;

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (isNaN(grid[x][y])) {
        continue;
      }

      res = Math.max(res, grid[x][y]);
    }
  }

  return res;
};