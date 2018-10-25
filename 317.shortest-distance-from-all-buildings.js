/*
 * [317] Shortest Distance from All Buildings
 *
 * https://leetcode.com/problems/shortest-distance-from-all-buildings/description/
 *
 * algorithms
 * Hard (35.48%)
 * Total Accepted:    29.9K
 * Total Submissions: 84.4K
 * Testcase Example:  '[[1,0,2,0,1],[0,0,0,0,0],[0,0,1,0,0]]'
 *
 * You want to build a house on an empty land which reaches all buildings in
 * the shortest amount of distance. You can only move up, down, left and right.
 * You are given a 2D grid of values 0, 1 or 2, where:
 * 
 * 
 * Each 0 marks an empty land which you can pass by freely.
 * Each 1 marks a building which you cannot pass through.
 * Each 2 marks an obstacle which you cannot pass through.
 * 
 * 
 * Example:
 * 
 * 
 * Input: [[1,0,2,0,1],[0,0,0,0,0],[0,0,1,0,0]]
 * 
 * 1 - 0 - 2 - 0 - 1
 * |   |   |   |   |
 * 0 - 0 - 0 - 0 - 0
 * |   |   |   |   |
 * 0 - 0 - 1 - 0 - 0
 * 
 * Output: 7 
 * 
 * Explanation: Given three buildings at (0,0), (0,4), (2,2), and an obstacle
 * at (0,2),
 * ⁠            the point (1,2) is an ideal empty land to build a house, as the
 * total 
 * travel distance of 3+3+1=7 is minimal. So return 7.
 * 
 * Note:
 * There will be at least one building. If it is not possible to build such
 * house according to the above rules, return -1.
 * 
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function(grid) {
  const sum = grid.map(el => [...el]);
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  let res;
  let empty = 0;
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] !== 1) {
        continue;
      }

      let queue = [[i, j]];
      let distance = 0;

      res = Infinity;

      while (queue.length) {
        const nextQueue = [];

        for (let [x, y] of queue) {
          if (grid[x][y] < 1) {
            sum[x][y] += distance;
            res = Math.min(res, sum[x][y]);
          }

          for (let [dx, dy] of dirs) {
            const [nextX, nextY] = [x + dx, y + dy];
  
            if (nextX < 0 || nextX >= grid.length 
              || nextY < 0 || nextY >= grid[0].length 
              || grid[nextX][nextY] !== empty) {
              continue;
            }
  
            grid[nextX][nextY]--;
            nextQueue.push([nextX, nextY]);
          }
        }

        queue = nextQueue;
        distance++;
      }

      empty--;
    }
  }

  return res === Infinity ? -1 : res;
};
