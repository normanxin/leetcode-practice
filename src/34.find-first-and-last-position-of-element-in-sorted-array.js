/*
 * [34] Find First and Last Position of Element in Sorted Array
 *
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (32.42%)
 * Total Accepted:    243.7K
 * Total Submissions: 751.7K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * Given an array of integers nums sorted in ascending order, find the starting
 * and ending position of a given target value.
 * 
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * 
 * If the target is not found in the array, return [-1, -1].
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  return [searchLo(nums, target), searchHi(nums, target)];
};

function searchLo(nums, target) {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo + 1 < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    nums[mid] < target ? (lo = mid) : (hi = mid);
  }

  if (nums[lo] === target) {
    return lo;
  }

  if (nums[hi] === target) {
    return hi;
  }

  return -1;
}

function searchHi(nums, target) {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo + 1 < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    nums[mid] <= target ? (lo = mid) : (hi = mid);
  }

  if (nums[hi] === target) {
    return hi;
  }

  if (nums[lo] === target) {
    return lo;
  }

  return -1;
}
