/*
 * [42] Trapping Rain Water
 *
 * https://leetcode.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (40.45%)
 * Total Accepted:    227.6K
 * Total Submissions: 562.5K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * Given n non-negative integers representing an elevation map where the width
 * of each bar is 1, compute how much water it is able to trap after raining.
 * 
 * 
 * The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 * In this case, 6 units of rain water (blue section) are being trapped. Thanks
 * Marcos for contributing this image!
 * 
 * Example:
 * 
 * 
 * Input: [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * 
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const lMax = [];
  const rMax = [];

  lMax[0] = height[0];
  rMax[height.length - 1] = height[height.length - 1];

  for (let i = 1, j = height.length - 2; i < height.length; i++, j--) {
    lMax[i] = Math.max(lMax[i - 1], height[i]);
    rMax[j] = Math.max(rMax[j + 1], height[j]); 
  }

  return height.reduce((acc, h, i) => acc + Math.min(lMax[i], rMax[i]) - h, 0);
};
