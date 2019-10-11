/*
 * @lc app=leetcode id=305 lang=javascript
 *
 * [305] Number of Islands II
 *
 * https://leetcode.com/problems/number-of-islands-ii/description/
 *
 * algorithms
 * Hard (42.12%)
 * Total Accepted:    55.7K
 * Total Submissions: 132.2K
 * Testcase Example:  '3\n3\n[[0,0],[0,1],[1,2],[2,1]]'
 *
 * A 2d grid map of m rows and n columns is initially filled with water. We may
 * perform an addLand operation which turns the water at position (row, col)
 * into a land. Given a list of positions to operate, count the number of
 * islands after each addLand operation. An island is surrounded by water and
 * is formed by connecting adjacent lands horizontally or vertically. You may
 * assume all four edges of the grid are all surrounded by water.
 * 
 * Example:
 * 
 * 
 * Input: m = 3, n = 3, positions = [[0,0], [0,1], [1,2], [2,1]]
 * Output: [1,1,2,3]
 * 
 * 
 * Explanation:
 * 
 * Initially, the 2d grid grid is filled with water. (Assume 0 represents water
 * and 1 represents land).
 * 
 * 
 * 0 0 0
 * 0 0 0
 * 0 0 0
 * 
 * 
 * Operation #1: addLand(0, 0) turns the water at grid[0][0] into a land.
 * 
 * 
 * 1 0 0
 * 0 0 0   Number of islands = 1
 * 0 0 0
 * 
 * 
 * Operation #2: addLand(0, 1) turns the water at grid[0][1] into a land.
 * 
 * 
 * 1 1 0
 * 0 0 0   Number of islands = 1
 * 0 0 0
 * 
 * 
 * Operation #3: addLand(1, 2) turns the water at grid[1][2] into a land.
 * 
 * 
 * 1 1 0
 * 0 0 1   Number of islands = 2
 * 0 0 0
 * 
 * 
 * Operation #4: addLand(2, 1) turns the water at grid[2][1] into a land.
 * 
 * 
 * 1 1 0
 * 0 0 1   Number of islands = 3
 * 0 1 0
 * 
 * 
 * Follow up:
 * 
 * Can you do it in time complexity O(k log mn), where k is the length of the
 * positions?
 * 
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
var numIslands2 = function(m, n, positions) {
  const res = [];
  const roots = Array(m * n).fill(-1);
  const dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]];
  let cnt = 0;

  for (let [x, y] of positions) {
    const id = n * x + y;

    if (roots[id] === -1) {
      roots[id] = id;
      cnt++;
    }

    for (let [dx, dy] of dirs) {
      const curX = x + dx;
      const curY = y + dy;
      const curId = n * curX + curY;

      if (curX < 0 
          || curX >= m 
          || curY < 0 
          || curY >= n 
          || roots[curId] === -1) {
        continue;
      }

      const p = findRoot(roots, curId);
      const q = findRoot(roots, id);

      if (p !== q) {
        roots[p] = q;
        cnt--;
      }
    }

    res.push(cnt);
  }

  return res;
};

function findRoot(roots, id) {
  return id === roots[id] ? id : findRoot(roots, roots[id]);
}