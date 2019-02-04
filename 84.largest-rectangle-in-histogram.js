/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 *
 * https://leetcode.com/problems/largest-rectangle-in-histogram/description/
 *
 * algorithms
 * Hard (29.94%)
 * Total Accepted:    154.4K
 * Total Submissions: 515.2K
 * Testcase Example:  '[2,1,5,6,2,3]'
 *
 * Given n non-negative integers representing the histogram's bar height where
 * the width of each bar is 1, find the area of largest rectangle in the
 * histogram.
 * 
 * 
 * 
 * 
 * Above is a histogram where width of each bar is 1, given height =
 * [2,1,5,6,2,3].
 * 
 * 
 * 
 * 
 * The largest rectangle is shown in the shaded area, which has area = 10
 * unit.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: [2,1,5,6,2,3]
 * Output: 10
 * 
 * 
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let res = 0;

  heights = [...heights, 0];
  heights.reduce((stack, height, i) => {
    while (stack.length && heights[stack[stack.length - 1]] >= height) {
      const cur = stack.pop();
      
      res = Math.max(res, heights[cur] *
          (stack.length ? (i - 1 - stack[stack.length - 1]) : i));
    }

    stack.push(i);

    return stack;
  }, []);
  
  return res;
};