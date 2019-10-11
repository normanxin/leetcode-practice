/*
 * [81] Search in Rotated Sorted Array II
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/
 *
 * algorithms
 * Medium (32.43%)
 * Total Accepted:    147.4K
 * Total Submissions: 454.5K
 * Testcase Example:  '[2,5,6,0,0,1,2]\n0'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 * 
 * (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).
 * 
 * You are given a target value to search. If found in the array return true,
 * otherwise return false.
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [2,5,6,0,0,1,2], target = 0
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [2,5,6,0,0,1,2], target = 3
 * Output: false
 * 
 * Follow up:
 * 
 * 
 * This is a follow up problem to Search in Rotated Sorted Array, where nums
 * may contain duplicates.
 * Would this affect the run-time complexity? How and why?
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo + 1 < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] === target || nums[lo] === target || nums[hi] === target) {
      return true;
    }

    if ((nums[mid] > nums[lo] && target > nums[lo]) 
      || (nums[mid] < nums[lo] && target < nums[lo])) {
      nums[mid] < target ? (lo = mid) : (hi = mid);
    } else if (nums[mid] > nums[lo] && target < nums[lo]) {
      lo = mid;
    } else if (nums[mid] < nums[lo] && target > nums[lo]) {
      hi = mid;
    } else if (nums[mid] === nums[lo]) {
      lo++;
    }
  }

  return nums[lo] === target || nums[hi] === target;
};
