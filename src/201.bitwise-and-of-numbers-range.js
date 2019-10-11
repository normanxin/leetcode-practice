/*
 * @lc app=leetcode id=201 lang=javascript
 *
 * [201] Bitwise AND of Numbers Range
 *
 * https://leetcode.com/problems/bitwise-and-of-numbers-range/description/
 *
 * algorithms
 * Medium (36.36%)
 * Total Accepted:    86.6K
 * Total Submissions: 238K
 * Testcase Example:  '5\n7'
 *
 * Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND
 * of all numbers in this range, inclusive.
 * 
 * Example 1:
 * 
 * 
 * Input: [5,7]
 * Output: 4
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [0,1]
 * Output: 0
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  mBinary = m.toString(2);
  nBinary = n.toString(2);

  let res = '';

  for (let i = 0; i < mBinary.length; i++) {
    if (2 ** i < n - m) {
      res = `0${res}`;

      continue;
    }

    let next = 1;

    for (let j = m; j <= n; j++) {
      if (mBinary[mBinary.length - 1 - i] === '0' 
          || nBinary[nBinary.length - 1 - i] === '0') {
        next = 0;

        break;
      }
    }

    res = `${next}${res}`;
  }

  return Number.parseInt(res, 2);
};