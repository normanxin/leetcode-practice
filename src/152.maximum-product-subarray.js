/*
 * [152] Maximum Product Subarray
 *
 * https://leetcode.com/problems/maximum-product-subarray/description/
 *
 * algorithms
 * Medium (27.91%)
 * Total Accepted:    173.9K
 * Total Submissions: 623K
 * Testcase Example:  '[2,3,-2,4]'
 *
 * Given an integer array nums, find the contiguous subarray within an array
 * (containing at least one number) which has the largest product.
 * 
 * Example 1:
 * 
 * 
 * Input: [2,3,-2,4]
 * Output: 6
 * Explanation: [2,3] has the largest product 6.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [-2,0,-1]
 * Output: 0
 * Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (!nums.length) {
    return 0;
  }

  let res = nums[0];
  let max = nums[0];
  let min = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const preMax = max;
    const preMin = min;

    max = Math.max(nums[i], preMax * nums[i], preMin * nums[i]);
    min = Math.min(nums[i], preMax * nums[i], preMin * nums[i]); 
    res = Math.max(res, max);
  }

  return res;
};
