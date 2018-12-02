/*
 * [200] Number of Islands
 *
 * https://leetcode.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (38.86%)
 * Total Accepted:    256.3K
 * Total Submissions: 659.6K
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of
 * islands. An island is surrounded by water and is formed by connecting
 * adjacent lands horizontally or vertically. You may assume all four edges of
 * the grid are all surrounded by water.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * 11110
 * 11010
 * 11000
 * 00000
 * 
 * Output: 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * 11000
 * 11000
 * 00100
 * 00011
 * 
 * Output: 3
 * 
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = grid => {
  const visited = new Set();
  let res = 0;
  
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      res += helper(grid, x, y, visited);
    }
  }
  
  return res;
};

function helper(grid, x, y, visited) {
  const key = `${x},${y}`;
  
  if (x < 0 || x >= grid.length
     || y < 0 || y >= grid[x].length
     || grid[x][y] === '0'
     || visited.has(key)) {
    return 0;
  }
  
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  
  for (let [dx, dy] of dirs) {
    helper(grid, x + dx, y + dy, visited.add(key));
  }
  
  return 1;
}