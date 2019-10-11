/*
 * @lc app=leetcode id=360 lang=javascript
 *
 * [360] Sort Transformed Array
 *
 * https://leetcode.com/problems/sort-transformed-array/description/
 *
 * algorithms
 * Medium (46.45%)
 * Total Accepted:    25.7K
 * Total Submissions: 55.3K
 * Testcase Example:  '[-4,-2,2,4]\n1\n3\n5'
 *
 * Given a sorted array of integers nums and integer values a, b and c. Apply a
 * quadratic function of the form f(x) = ax2 + bx + c to each element x in the
 * array.
 * 
 * The returned array must be in sorted order.
 * 
 * Expected time complexity: O(n)
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [-4,-2,2,4], a = 1, b = 3, c = 5
 * Output: [3,9,15,33]
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [-4,-2,2,4], a = -1, b = 3, c = 5
 * Output: [-23,-5,1,7]
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var sortTransformedArray = function(nums, a, b, c) {
  const transformed = nums.map(num => a * num ** 2 + b * num + c);
  const res = [];

  for (let l = 0, r = nums.length - 1; l <= r;) {
    if (a > 0) {
      res.unshift(transformed[l] > transformed[r] ? transformed[l++] : transformed[r--]);
    } else if (a <= 0) {
      res.push(transformed[l] < transformed[r] ? transformed[l++] : transformed[r--]);
    }
  }

  return res;
};