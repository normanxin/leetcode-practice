/*
 * @lc app=leetcode id=516 lang=javascript
 *
 * [516] Longest Palindromic Subsequence
 *
 * https://leetcode.com/problems/longest-palindromic-subsequence/description/
 *
 * algorithms
 * Medium (48.47%)
 * Total Accepted:    73.3K
 * Total Submissions: 151.2K
 * Testcase Example:  '"bbbab"'
 *
 * 
 * Given a string s, find the longest palindromic subsequence's length in s.
 * You may assume that the maximum length of s is 1000.
 * 
 * 
 * Example 1:
 * Input: 
 * 
 * "bbbab"
 * 
 * Output: 
 * 
 * 4
 * 
 * One possible longest palindromic subsequence is "bbbb".
 * 
 * 
 * Example 2:
 * Input:
 * 
 * "cbbd"
 * 
 * Output:
 * 
 * 2
 * 
 * One possible longest palindromic subsequence is "bb".
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
const longestPalindromeSubseq = s => {
  if (!s.length) {
    return 0;
  }

  const dp = Array(s.length).fill().map((_, i) => {
    const row = Array(s.length).fill(0);

    row[i] = 1;

    return row;
  });

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < s.length; j++) {
      dp[i][j] = Math.max(
          dp[i + 1][j],
          dp[i][j - 1],
          s[i] === s[j] ? dp[i + 1][j - 1] + 2 : 0);
    }
  }

  return dp[0][s.length - 1];
};