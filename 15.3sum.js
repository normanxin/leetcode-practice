/*
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (22.51%)
 * Total Accepted:    429.1K
 * Total Submissions: 1.9M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate triplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const res = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1, k = nums.length - 1; j < k;) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        j++;
        continue;
      }

      if (nums[k] === nums[k + 1]) {
        k--;
        continue;
      }

      const sum = nums[i] + nums[j] + nums[k];

      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
      }
    }
  }

  return res;
};