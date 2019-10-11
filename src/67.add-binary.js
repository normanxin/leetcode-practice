/*
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (36.92%)
 * Total Accepted:    256.1K
 * Total Submissions: 693.8K
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 * 
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 
 * Example 1:
 * 
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * 
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const len = Math.max(a.length, b.length);

  a = a.padStart(len, 0);
  b = b.padStart(len, 0);

  let res = '';
  let carry = 0;
  
  for (let i = len - 1; i >= 0; i--) {
    const sum = +a[i] + +b[i] + carry;

    res = `${sum % 2}${res}`;
    carry = Math.floor(sum / 2);
  }

  return carry ? `${carry}${res}` : res;
};
