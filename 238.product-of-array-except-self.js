/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 *
 * https://leetcode.com/problems/product-of-array-except-self/description/
 *
 * algorithms
 * Medium (56.03%)
 * Total Accepted:    286.3K
 * Total Submissions: 511K
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given an array nums of n integers where n > 1,  return an array output such
 * that output[i] is equal to the product of all the elements of nums except
 * nums[i].
 * 
 * Example:
 * 
 * 
 * Input:  [1,2,3,4]
 * Output: [24,12,8,6]
 * 
 * 
 * Note: Please solve it without division and in O(n).
 * 
 * Follow up:
 * Could you solve it with constant space complexity? (The output array does
 * not count as extra space for the purpose of space complexity analysis.)
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = nums => {
  const res = [];
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    res[i] = product;
    product *= nums[i];
  }

  product = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= product;
    product *= nums[i];
  }

  return res;
};
