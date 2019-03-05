/*
 * @lc app=leetcode id=301 lang=javascript
 *
 * [301] Remove Invalid Parentheses
 *
 * https://leetcode.com/problems/remove-invalid-parentheses/description/
 *
 * algorithms
 * Hard (38.42%)
 * Total Accepted:    110K
 * Total Submissions: 286.4K
 * Testcase Example:  '"()())()"'
 *
 * Remove the minimum number of invalid parentheses in order to make the input
 * string valid. Return all possible results.
 * 
 * Note: The input string may contain letters other than the parentheses ( and
 * ).
 * 
 * Example 1:
 * 
 * 
 * Input: "()())()"
 * Output: ["()()()", "(())()"]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "(a)())()"
 * Output: ["(a)()()", "(a())()"]
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: ")("
 * Output: [""]
 * 
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  const res = [];

  for (let queue = new Set([s]); queue.size;) {
    const next = new Set();

    for (let candidate of queue) {
      validate(candidate) && res.push(candidate);

      for (let i = 0; candidate[i]; i++) {
        if (candidate[i] !== '(' && candidate[i] !== ')') {
          continue;
        }

        next.add(candidate.substring(0, i) + candidate.substring(i + 1));
      }
    }

    if (res.length) {
      return res;
    }

    queue = next;
  }

  return res;
};

function validate(s) {
  let cnt = 0;

  for (let ch of s) {
    if (ch === '(') {
      cnt++;
    } else if (ch === ')') {
      cnt--;
    }

    if (cnt < 0) {
      return false;
    }
  }

  return !cnt;
}