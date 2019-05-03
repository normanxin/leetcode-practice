/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 *
 * https://leetcode.com/problems/add-strings/description/
 *
 * algorithms
 * Easy (43.54%)
 * Total Accepted:    92.7K
 * Total Submissions: 212.9K
 * Testcase Example:  '"0"\n"0"'
 *
 * Given two non-negative integers num1 and num2 represented as string, return
 * the sum of num1 and num2.
 * 
 * Note:
 * 
 * The length of both num1 and num2 is < 5100.
 * Both num1 and num2 contains only digits 0-9.
 * Both num1 and num2 does not contain any leading zero.
 * You must not use any built-in BigInteger library or convert the inputs to
 * integer directly.
 * 
 * 
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let carry = 0;
  let res = '';

  num1 = [...num1].reverse();
  num2 = [...num2].reverse();

  for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
    const sum = carry + parseInt(num1[i] || 0) + parseInt(num2[i] || 0);
    
    carry = Math.floor(sum / 10);
    res = `${sum % 10}${res}`;
  }

  return `${carry > 0 ? carry : ''}${res}`;
};