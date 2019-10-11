/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 *
 * https://leetcode.com/problems/divide-two-integers/description/
 *
 * algorithms
 * Medium (15.81%)
 * Total Accepted:    165.3K
 * Total Submissions: 1M
 * Testcase Example:  '10\n3'
 *
 * Given two integers dividend and divisor, divide two integers without using
 * multiplication, division and mod operator.
 * 
 * Return the quotient after dividing dividend by divisor.
 * 
 * The integer division should truncate toward zero.
 * 
 * Example 1:
 * 
 * 
 * Input: dividend = 10, divisor = 3
 * Output: 3
 * 
 * Example 2:
 * 
 * 
 * Input: dividend = 7, divisor = -3
 * Output: -2
 * 
 * Note:
 * 
 * 
 * Both dividend and divisor will be 32-bit signed integers.
 * The divisor will never be 0.
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of
 * this problem, assume that your function returns 231 − 1 when the division
 * result overflows.
 * 
 * 
 */
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (dividend === -2147483648 && divisor === -1) {
    return 2147483647;
  }

  if (divisor === 0) {
    return NaN;
  }

  const isNegative = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0);
  let sign = isNegative ? -1 : 1;

  dividend = Math.abs(dividend);  
  divisor = Math.abs(divisor);

  let lo = 0;
  let hi = dividend;

  while (lo + 1 < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    const candidate = mid * divisor;

    if (candidate === dividend) {
      return mid * sign;
    }

    candidate < dividend ? (lo = mid) : (hi = mid);
  }

  if (hi * divisor <= dividend) {
    return hi * sign;
  }

  return lo * sign;
};