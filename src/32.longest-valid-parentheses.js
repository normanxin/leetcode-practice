/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 *
 * https://leetcode.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (24.66%)
 * Total Accepted:    166.4K
 * Total Submissions: 674.8K
 * Testcase Example:  '"(()"'
 *
 * Given a string containing just the characters '(' and ')', find the length
 * of the longest valid (well-formed) parentheses substring.
 * 
 * Example 1:
 * 
 * 
 * Input: "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let res = 0;
  
  for (let l = 0, r = 0, stack = []; s[r]; r++) {
    if (s[r] === '(') {
      stack.push(r);
    } else if (s[r] === ')') {
      if (!stack.length) {
        l = r + 1;
      } else {
        stack.pop();
        res = stack.length
            ? Math.max(res, r - stack[stack.length - 1])
            : Math.max(res, r - l + 1);
      }
    }
  }
  
  return res;
};
