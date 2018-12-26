/*
 * [43] Multiply Strings
 *
 * https://leetcode.com/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (29.42%)
 * Total Accepted:    172.6K
 * Total Submissions: 586.7K
 * Testcase Example:  '"2"\n"3"'
 *
 * Given two non-negative integers num1 and num2 represented as strings, return
 * the product of num1 and num2, also represented as a string.
 * 
 * Example 1:
 * 
 * 
 * Input: num1 = "2", num2 = "3"
 * Output: "6"
 * 
 * Example 2:
 * 
 * 
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 * 
 * 
 * Note:
 * 
 * 
 * The length of both num1 and num2 is < 110.
 * Both num1 and num2 contain only digits 0-9.
 * Both num1 and num2 do not contain any leading zero, except the number 0
 * itself.
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
var multiply = function(num1, num2) {
  const res = Array(num1.length + num2.length).fill(0);

  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      res[i + j] += num1[num1.length - 1 - i] * num2[num2.length - 1 - j];
    }
  }

  for (let i = 0, carry = 0; i < res.length; i++) {
    res[i] += carry;
    carry = Math.floor(res[i] / 10);
    res[i] %= 10;
  }

  while (res[res.length - 1] === 0) {
    res.pop();
  }

  return res.length ? res.reverse().join('') : '0';
};
