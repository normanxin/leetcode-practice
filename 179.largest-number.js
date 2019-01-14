/*
 * @lc app=leetcode id=179 lang=javascript
 *
 * [179] Largest Number
 *
 * https://leetcode.com/problems/largest-number/description/
 *
 * algorithms
 * Medium (24.92%)
 * Total Accepted:    115.9K
 * Total Submissions: 465.1K
 * Testcase Example:  '[10,2]'
 *
 * Given a list of non negative integers, arrange them such that they form the
 * largest number.
 * 
 * Example 1:
 * 
 * 
 * Input: [10,2]
 * Output: "210"
 * 
 * Example 2:
 * 
 * 
 * Input: [3,30,34,5,9]
 * Output: "9534330"
 * 
 * 
 * Note: The result may be very large, so you need to return a string instead
 * of an integer.
 * 
 */
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  const res = nums.map(num => num.toString()).sort((a, b) => {
    const cA = `${a}${b}`;
    const cB = `${b}${a}`; 

    if (cA > cB) {
      return -1;
    }

    if (cA < cB) {
      return 1;
    }

    return 0;
  }).join('');

  return +res[0] === 0 ? '0' : res;
};