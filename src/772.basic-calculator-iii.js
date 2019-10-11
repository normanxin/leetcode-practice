/*
 * [785] Basic Calculator III
 *
 * https://leetcode.com/problems/basic-calculator-iii/description/
 *
 * algorithms
 * Hard (42.40%)
 * Total Accepted:    9.7K
 * Total Submissions: 23K
 * Testcase Example:  '"1 + 1"'
 *
 * Implement a basic calculator to evaluate a simple expression string.
 * 
 * The expression string may contain open ( and closing parentheses ), the plus
 * + or minus sign -, non-negative integers and empty spaces  .
 * 
 * The expression string contains only non-negative integers, +, -, *, /
 * operators , open ( and closing parentheses ) and empty spaces  . The integer
 * division should truncate toward zero.
 * 
 * You may assume that the given expression is always valid. All intermediate
 * results will be in the range of [-2147483648, 2147483647].
 * 
 * Some examples:
 * 
 * 
 * "1 + 1" = 2
 * " 6-4 / 2 " = 4
 * "2*(5+5*2)/3+(6/2+8)" = 21
 * "(2+6* 3+5- (3*14/7+2)*5)+3"=-12
 * 
 * 
 * 
 * 
 * Note: Do not use the eval built-in library function.
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let res = 0;
  let num = 0;
  let part = 0;
  let op = '+';

  for (let i = 0; s[i]; i++) {
    if (/\d/.test(s[i])) {
      num = +(num + s[i]);
    } else if (s[i] === '(') {
      let j = i;

      for (let cnt = 0; cnt > 0 || j === i; j++) {
        switch (s[j]) {
          case '(':
            cnt++;
            break;
          case ')':
            cnt--;
            break;
        }
      }

      num = calculate(s.substring(i + 1, j - 1)); 
      i = j - 1;
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