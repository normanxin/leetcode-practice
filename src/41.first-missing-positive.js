/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 *
 * https://leetcode.com/problems/first-missing-positive/description/
 *
 * algorithms
 * Hard (27.92%)
 * Total Accepted:    183.1K
 * Total Submissions: 655.9K
 * Testcase Example:  '[1,2,0]'
 *
 * Given an unsorted integer array, find the smallest missing positive
 * integer.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,0]
 * Output: 3
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,4,-1,1]
 * Output: 2
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [7,8,9,11,12]
 * Output: 1
 * 
 * 
 * Note:
 * 
 * Your algorithm should run in O(n) time and uses constant extra space.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    while (i !== nums[i] && nums[i] > 0 && nums[i] !== nums[nums[i]]) {
      const num = nums[i];

      [nums[i], nums[num]] = [nums[num], nums[i]];
    }
  }

  let res;

  for (res = 1; res < nums.length; res++) {
    if (res !== nums[res]) {
      return res;
    }
  }

  return res;
};