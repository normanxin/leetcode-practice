/*
 * @lc app=leetcode id=259 lang=javascript
 *
 * [259] 3Sum Smaller
 *
 * https://leetcode.com/problems/3sum-smaller/description/
 *
 * algorithms
 * Medium (44.38%)
 * Total Accepted:    47.8K
 * Total Submissions: 107.7K
 * Testcase Example:  '[-2,0,1,3]\n2'
 *
 * Given an array of n integers nums and a target, find the number of index
 * triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i]
 * + nums[j] + nums[k] < target.
 * 
 * Example:
 * 
 * 
 * Input: nums = [-2,0,1,3], and target = 2
 * Output: 2 
 * Explanation: Because there are two triplets which sums are less than
 * 2:
 * [-2,0,1]
 * ⁠            [-2,0,3]
 * 
 * 
 * Follow up: Could you solve it in O(n2) runtime?
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
  let res = 0;

  nums.sort((a, b) => a - b);

  for (let i = 0; i <= nums.length - 3; i++) {
    for (let j = i + 1, k = nums.length - 1; j < k;) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum < target) {
        res += (k - j);
        j++;
      } else {
        k--;
      }
    }
  }

  return res;
};