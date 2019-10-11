/*
 * [35] Search Insert Position
 *
 * https://leetcode.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (40.06%)
 * Total Accepted:    328K
 * Total Submissions: 818.9K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * Given a sorted array and a target value, return the index if the target is
 * found. If not, return the index where it would be if it were inserted in
 * order.
 * 
 * You may assume no duplicates in the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,3,5,6], 5
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1,3,5,6], 2
 * Output: 1
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [1,3,5,6], 7
 * Output: 4
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: [1,3,5,6], 0
 * Output: 0
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo + 1 < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      lo = mid;
    } else {
      hi = mid;
    }
  }

  if (target <= nums[lo]) {
    return lo;
  }

  if (target <= nums[hi]) {
    return hi;
  }

  return hi + 1;
};