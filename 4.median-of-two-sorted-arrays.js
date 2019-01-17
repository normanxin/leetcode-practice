/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (24.60%)
 * Total Accepted:    341.6K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * 
 * Find the median of the two sorted arrays. The overall run time complexity
 * should be O(log (m+n)).
 * 
 * You may assume nums1 and nums2 cannot be both empty.
 * 
 * Example 1:
 * 
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * The median is 2.0
 * 
 * 
 * Example 2:
 * 
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * The median is (2 + 3)/2 = 2.5
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const total = nums1.length + nums2.length;
  const half = Math.ceil(total / 2);
  const m = find(nums1, nums2, 0, 0, half);
  const n = total % 2 === 1 ? m : find(nums1, nums2, 0, 0, half + 1);

  return (m + n) / 2;
};

function find(nums1, nums2, i1, i2, n) {
  if (n === 1) {
    return Math.min(nums1[i1] || Infinity, nums2[i2] || Infinity);
  }

  if (i1 >= nums1.length) {
    return nums2[i2 + n - 1];
  }

  if (i2 >= nums2.length) {
    return nums1[i1 + n - 1];
  }

  const half = Math.floor(n / 2);
  const mid1 = nums1[i1 + half - 1] !== undefined ? i1 + half - 1 : nums1.length - 1;
  const mid2 = nums2[i2 + half - 1] !== undefined ? i2 + half - 1 : nums2.length - 1;

  return nums1[mid1] < nums2[mid2]
    ? find(nums1, nums2, i1 + half, i2, n - mid1 + i1 - 1)
    : find(nums1, nums2, i1, i2 + half, n - mid2 + i2 - 1);
}
