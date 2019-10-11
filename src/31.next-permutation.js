/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 *
 * https://leetcode.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (29.70%)
 * Total Accepted:    198.9K
 * Total Submissions: 669.3K
 * Testcase Example:  '[1,2,3]'
 *
 * Implement next permutation, which rearranges numbers into the
 * lexicographically next greater permutation of numbers.
 * 
 * If such arrangement is not possible, it must rearrange it as the lowest
 * possible order (ie, sorted in ascending order).
 * 
 * The replacement must be in-place and use only constant extra memory.
 * 
 * Here are some examples. Inputs are in the left-hand column and its
 * corresponding outputs are in the right-hand column.
 * 
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 * 
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let i = nums.length - 2;
  let j = nums.length - 1;

  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i < 0) {
    nums.reverse();

    return;
  }

  while (nums[j] <= nums[i]) {
    j--;
  }

  [nums[i], nums[j]] = [nums[j], nums[i]];
  reverse(nums, i + 1);
};

function reverse(nums, lo = 0, hi = nums.length - 1) {
  for (; lo < hi; lo++, hi--) {
    [nums[lo], nums[hi]] = [nums[hi], nums[lo]];
  }
}