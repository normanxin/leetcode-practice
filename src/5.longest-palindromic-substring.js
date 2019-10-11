/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (25.89%)
 * Total Accepted:    431K
 * Total Submissions: 1.7M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 * 
 * Example 1:
 * 
 * 
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "cbbd"
 * Output: "bb"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let res = '';

  for (let i = 0; s[i]; i++) {
    for (let lo = i, hi = i; s[lo] && s[hi] && s[lo] === s[hi]; lo--, hi++) {
      if (hi - lo + 1 <= res.length) {
        continue;
      }

      res = s.substring(lo, hi + 1);
    }

    if (s[i] !== s[i - 1]) {
      continue;
    }

    for (let lo = i - 1, hi = i; s[lo] && s[hi] && s[lo] === s[hi];
        lo--, hi++) {
      if (hi - lo + 1 <= res.length) {
        continue;
      }

      res = s.substring(lo, hi + 1);
    }
  }

  return res;
};
