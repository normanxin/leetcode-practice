/*
 * @lc app=leetcode id=246 lang=javascript
 *
 * [246] Strobogrammatic Number
 *
 * https://leetcode.com/problems/strobogrammatic-number/description/
 *
 * algorithms
 * Easy (41.95%)
 * Total Accepted:    49.8K
 * Total Submissions: 118.7K
 * Testcase Example:  '"69"'
 *
 * A strobogrammatic number is a number that looks the same when rotated 180
 * degrees (looked at upside down).
 * 
 * Write a function to determine if a number is strobogrammatic. The number is
 * represented as a string.
 * 
 * Example 1:
 * 
 * 
 * Input:  "69"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:  "88"
 * Output: true
 * 
 * Example 3:
 * 
 * 
 * Input:  "962"
 * Output: false
 * 
 */
/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
  const map = new Map([
    ['0', '0'],
    ['1', '1'],
    ['6', '9'],
    ['8', '8'],
    ['9', '6'],
  ]);

  for (let l = 0, r = num.length - 1; l <= r; l++, r--) {
    if (map.get(num[l]) !== num[r]) {
      return false;
    }
  }

  return true;
};