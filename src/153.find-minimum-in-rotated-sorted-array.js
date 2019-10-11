/*
 * [153] Find Minimum in Rotated Sorted Array
 *
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (42.03%)
 * Total Accepted:    241.9K
 * Total Submissions: 575.6K
 * Testcase Example:  '[3,4,5,1,2]'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 * 
 * (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
 * 
 * Find the minimum element.
 * 
 * You may assume no duplicate exists in the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,4,5,1,2] 
 * Output: 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [4,5,6,7,0,1,2]
 * Output: 0
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (nums[0] <= nums[nums.length - 1]) {
    return nums[0];
  }

  let lo = 0;
  let hi = nums.length - 1;

  while (lo + 1 < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    nums[mid] < nums[0] ? (hi = mid) : (lo = mid);
  }

  return Math.min(nums[lo], nums[hi]);
};
