/*
 * [302] Smallest Rectangle Enclosing Black Pixels
 *
 * https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/description/
 *
 * algorithms
 * Hard (47.96%)
 * Total Accepted:    20.2K
 * Total Submissions: 42.1K
 * Testcase Example:  '[["0","0","1","0"],["0","1","1","0"],["0","1","0","0"]]\n0\n2'
 *
 * An image is represented by a binary matrix with 0 as a white pixel and 1 as
 * a black pixel. The black pixels are connected, i.e., there is only one black
 * region. Pixels are connected horizontally and vertically. Given the location
 * (x, y) of one of the black pixels, return the area of the smallest
 * (axis-aligned) rectangle that encloses all black pixels.
 * 
 * Example:
 * 
 * 
 * Input:
 * [
 * ⁠ "0010",
 * ⁠ "0110",
 * ⁠ "0100"
 * ]
 * and x = 0, y = 2
 * 
 * Output: 6
 * 
 * 
 */
/**
 * @param {character[][]} image
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minArea = function(image, x, y) {
  const {minX, maxX, minY, maxY} = dfs(image, [x, y]);

  return (maxX - minX + 1) * (maxY - minY + 1);
};

function dfs(image, [x, y], 
  visited = image.map(row => []), 
  boundary = {minX: x, maxX: x, minY: y, maxY: y}) {
  if (x < 0 || x >= image.length
    || y < 0 || y >= image[x].length
    || image[x][y] !== '1' || visited[x][y]) {
    return boundary;
  } 

  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  visited[x][y] = true;
  boundary.minX = Math.min(boundary.minX, x);
  boundary.maxX = Math.max(boundary.maxX, x);
  boundary.minY = Math.min(boundary.minY, y);
  boundary.maxY = Math.max(boundary.maxY, y);

  for (let [dx, dy] of dirs) {
    dfs(image, [x + dx, y + dy], visited, boundary);
  }

  return boundary;
}
