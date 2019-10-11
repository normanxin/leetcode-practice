/*
 * @lc app=leetcode id=286 lang=javascript
 *
 * [286] Walls and Gates
 *
 * https://leetcode.com/problems/walls-and-gates/description/
 *
 * algorithms
 * Medium (48.48%)
 * Total Accepted:    68.6K
 * Total Submissions: 141.5K
 * Testcase Example:  '[[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]'
 *
 * You are given a m x n 2D grid initialized with these three possible
 * values.
 * 
 * 
 * -1 - A wall or an obstacle.
 * 0 - A gate.
 * INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to
 * represent INF as you may assume that the distance to a gate is less than
 * 2147483647.
 * 
 * 
 * Fill each empty room with the distance to its nearest gate. If it is
 * impossible to reach a gate, it should be filled with INF.
 * 
 * Example: 
 * 
 * Given the 2D grid:
 * 
 * 
 * INF  -1  0  INF
 * INF INF INF  -1
 * INF  -1 INF  -1
 * ⁠ 0  -1 INF INF
 * 
 * 
 * After running your function, the 2D grid should be:
 * 
 * 
 * ⁠ 3  -1   0   1
 * ⁠ 2   2   1  -1
 * ⁠ 1  -1   2  -1
 * ⁠ 0  -1   3   4
 * 
 * 
 */
/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  for (let x = 0; x < rooms.length; x++) {
    for (let y = 0; y < rooms[x].length; y++) {
      if (rooms[x][y]) {
        continue;
      }

      for (let queue = [[x, y]], dist = 0; queue.length; dist++) {
        const next = [];
        
        for (let [curX, curY] of queue) {
          rooms[curX][curY] = dist;

          for (let [dx, dy] of dirs) {
            const nextX = curX + dx;
            const nextY = curY + dy;

            if (nextX < 0 || nextX >= rooms.length
                || nextY < 0 || nextY >= rooms[nextX].length
                || rooms[nextX][nextY] <= 0
                || rooms[nextX][nextY] <= dist + 1) {
              continue;
            }

            next.push([nextX, nextY]);
          }
        }

        queue = next;
      }
    }
  }
};