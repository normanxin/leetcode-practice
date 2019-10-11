/*
 * @lc app=leetcode id=227 lang=javascript
 *
 * [227] Basic Calculator II
 *
 * https://leetcode.com/problems/basic-calculator-ii/description/
 *
 * algorithms
 * Medium (34.28%)
 * Total Accepted:    123.5K
 * Total Submissions: 360.4K
 * Testcase Example:  '"3+2*2"'
 *
 * Implement a basic calculator to evaluate a simple expression string.
 * 
 * The expression string contains only non-negative integers, +, -, *, /
 * operators and empty spaces  . The integer division should truncate toward
 * zero.
 * 
 * Example 1:
 * 
 * 
 * Input: "3+2*2"
 * Output: 7
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: " 3/2 "
 * Output: 1
 * 
 * Example 3:
 * 
 * 
 * Input: " 3+5 / 2 "
 * Output: 5
 * 
 * 
 * Note:
 * 
 * 
 * You may assume that the given expression is always valid.
 * Do not use the eval built-in library function.
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
const calculate = s => {
  let res = 0;
  let num = 0;
  let part = 0;
  let op = '+';

  for (let i = 0; s[i]; i++) {
    if (/\d/.test(s[i])) {
      num = +(num + s[i]);
    }
    
    if (/[\+\-\*\/]/.test(s[i]) || i === s.length - 1) {
      switch (op) {
        case '+':
          part += num;
          break;
        case '-':
          part -= num;
          break;
        case '*':
          part *= num;
          break;
        case '/':
          part = ~~(part / num);
          break;
      }

      if (s[i] === '+' || s[i] === '-' || i === s.length - 1) {
        res += part;
        part = 0;
      }

      num = 0;
      op = s[i];
    }
  } 

  return res;  
};
