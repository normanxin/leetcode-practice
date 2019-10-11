/*
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (50.72%)
 * Total Accepted:    256.9K
 * Total Submissions: 506.5K
 * Testcase Example:  '3'
 *
 * 
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 * 
 * 
 * 
 * For example, given n = 3, a solution set is:
 * 
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n, m = n, res = [], path = []) {
  if (n === 0 && m === 0) {
    path.length > 0 && res.push(path.join(''));

    return res;
  }

  if (n > 0) {
    path.push('(');
    generateParenthesis(n - 1, m, res, path);
    path.pop();
  }

  if (n < m) {
    path.push(')');
    generateParenthesis(n, m - 1, res, path);
    path.pop(); 
  }

  return res;
};
