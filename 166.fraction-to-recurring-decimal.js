/*
 * @lc app=leetcode id=166 lang=javascript
 *
 * [166] Fraction to Recurring Decimal
 *
 * https://leetcode.com/problems/fraction-to-recurring-decimal/description/
 *
 * algorithms
 * Medium (18.84%)
 * Total Accepted:    78.3K
 * Total Submissions: 415.4K
 * Testcase Example:  '1\n2'
 *
 * Given two integers representing the numerator and denominator of a fraction,
 * return the fraction in string format.
 * 
 * If the fractional part is repeating, enclose the repeating part in
 * parentheses.
 * 
 * Example 1:
 * 
 * 
 * Input: numerator = 1, denominator = 2
 * Output: "0.5"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: numerator = 2, denominator = 1
 * Output: "2"
 * 
 * Example 3:
 * 
 * 
 * Input: numerator = 2, denominator = 3
 * Output: "0.(6)"
 * 
 * 
 */
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  const sign = numerator * denominator < 0 ? '-' : '';
  const map = new Map();

  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);

  const integerPart = Math.floor(numerator / denominator);
  let fractionPart = '';
  let remain = numerator % denominator;

  for (let fi = 0; remain && !map.has(remain); fi++) {
    const n = remain * 10;

    map.set(remain, fi);
    fractionPart += Math.floor(n / denominator);
    remain = n % denominator;
  }

  if (!fractionPart) {
    return `${sign}${integerPart}`;
  }

  if (map.has(remain)) {
    const pos = map.get(remain);

    fractionPart = `${fractionPart.substring(0, pos)}(${fractionPart.substring(pos)})`;
  }

  return `${sign}${integerPart}.${fractionPart}`;
};
