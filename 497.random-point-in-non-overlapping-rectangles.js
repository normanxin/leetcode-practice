/*
 * @lc app=leetcode id=497 lang=javascript
 *
 * [497] Random Point in Non-overlapping Rectangles
 *
 * https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/description/
 *
 * algorithms
 * Medium (35.74%)
 * Total Accepted:    6.4K
 * Total Submissions: 17.9K
 * Testcase Example:  '["Solution", "pick", "pick", "pick"]\n[[[[1, 1, 5, 5]]], [], [], []]'
 *
 * Given a list of non-overlapping axis-aligned rectangles rects, write a
 * function pick which randomly and uniformily picks an integer point in the
 * space covered by the rectangles.
 * 
 * Note:
 * 
 * 
 * An integer point is a point that has integer coordinates. 
 * A point on the perimeter of a rectangle is included in the space covered by
 * the rectangles. 
 * ith rectangle = rects[i] = [x1,y1,x2,y2], where [x1, y1] are the integer
 * coordinates of the bottom-left corner, and [x2, y2] are the integer
 * coordinates of the top-right corner.
 * length and width of each rectangle does not exceed 2000.
 * 1 <= rects.length <= 100
 * pick return a point as an array of integer coordinates [p_x, p_y]
 * pick is called at most 10000 times.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 
 * ["Solution","pick","pick","pick"]
 * [[[[1,1,5,5]]],[],[],[]]
 * Output: 
 * [null,[4,1],[4,1],[3,3]]
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 
 * ["Solution","pick","pick","pick","pick","pick"]
 * [[[[-2,-2,-1,-1],[1,0,3,0]]],[],[],[],[],[]]
 * Output: 
 * [null,[-1,-2],[2,0],[-2,-1],[3,0],[-2,-2]]
 * 
 * 
 * 
 * Explanation of Input Syntax:
 * 
 * The input is two lists: the subroutines called and their arguments.
 * Solution's constructor has one argument, the array of rectangles rects. pick
 * has no arguments. Arguments are always wrapped with a list, even if there
 * aren't any.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
class Solution {
  /**
   * @param {number[][]} rects
   */
  constructor(rects) {
    this.areaSum = 0;
    this.areaToRect = rects.reduce((map, rect) => {
      const [x1, y1, x2, y2] = rect;
      const area = (x2 - x1 + 1) * (y2 - y1 + 1);
      const prevAreaSum = this.areaSum;
      const nextAreaSum = this.areaSum += area;

      return map.set(n => n >= prevAreaSum && n < nextAreaSum, rect);
    }, new Map());
  }

  /**
   * @return {number[]}
   */
  pick() {
    const n = Math.random() * this.areaSum;
    const [, [x1, y1, x2, y2]] =
        [...this.areaToRect].find(([condition]) => condition(n));

    return [
      x1 + Math.floor(Math.random() * (x2 - x1 + 1)), 
      y1 + Math.floor(Math.random() * (y2 - y1 + 1)),
    ];
  }
}

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */
