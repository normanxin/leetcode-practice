/*
 * [18] 4Sum
 *
 * https://leetcode.com/problems/4sum/description/
 *
 * algorithms
 * Medium (28.85%)
 * Total Accepted:    193.9K
 * Total Submissions: 672.1K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * Given an array nums of n integers and an integer target, are there elements
 * a, b, c, and d in nums such that a + b + c + d = target? Find all unique
 * quadruplets in the array which gives the sum of target.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate quadruplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
 * 
 * A solution set is:
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const res = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      for (let m = j + 1, n = nums.length - 1; m < n;) {
        if (m > j + 1 && nums[m] === nums[m - 1]) {
          m++;
          continue;
        }

        if (nums[n] === nums[n + 1]) {
          n--;
          continue;
        }

        const sum = nums[i] + nums[j] + nums[m] + nums[n];

        if (sum < target) {
          m++;
        } else if (sum > target) {
          n--;
        } else {
          res.push([nums[i], nums[j], nums[m], nums[n]]);
          m++;
          n--;
        }
      }
    }
  }

  return res;
};
