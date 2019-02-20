/*
 * @lc app=leetcode id=149 lang=javascript
 *
 * [149] Max Points on a Line
 *
 * https://leetcode.com/problems/max-points-on-a-line/description/
 *
 * algorithms
 * Hard (15.51%)
 * Total Accepted:    111.5K
 * Total Submissions: 718.9K
 * Testcase Example:  '[[1,1],[2,2],[3,3]]'
 *
 * Given n points on a 2D plane, find the maximum number of points that lie on
 * the same straight line.
 * 
 * Example 1:
 * 
 * 
 * Input: [[1,1],[2,2],[3,3]]
 * Output: 3
 * Explanation:
 * ^
 * |
 * |        o
 * |     o
 * |  o  
 * +------------->
 * 0  1  2  3  4
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
 * Output: 4
 * Explanation:
 * ^
 * |
 * |  o
 * |     o        o
 * |        o
 * |  o        o
 * +------------------->
 * 0  1  2  3  4  5  6
 * 
 * 
 */
/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function(points) {
  let res = 0;

  for (let i = 0; i < points.length; i++) {
    const map = new Map();
    let duplicate = 1;

    for (let j = i + 1; j < points.length; j++) {
      if (points[i].x === points[j].x && points[i].y === points[j].y) {
        duplicate++;
        continue;
      }

      let dx = points[j].x - points[i].x;
      let dy = points[j].y - points[i].y;
      const d = gcd(dx, dy);
      
      dx /= d;
      dy /= d;

      let key = [...map.keys()].find(([x, y]) => x === dx && y === dy);
  
      if (!key) {
        key = [dx, dy];
        map.set(key, 0);
      }

      map.set(key, map.get(key) + 1);
    }

    const lineCnts = [...map.values()].map(v => v + duplicate);

    res = Math.max(res, duplicate, ...lineCnts);
  }

  return res;
};

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}