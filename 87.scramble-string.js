/*
 * @lc app=leetcode id=87 lang=javascript
 *
 * [87] Scramble String
 *
 * https://leetcode.com/problems/scramble-string/description/
 *
 * algorithms
 * Hard (30.96%)
 * Total Accepted:    85.1K
 * Total Submissions: 275K
 * Testcase Example:  '"great"\n"rgeat"'
 *
 * Given a string s1, we may represent it as a binary tree by partitioning it
 * to two non-empty substrings recursively.
 * 
 * Below is one possible representation of s1 = "great":
 * 
 * 
 * ⁠   great
 * ⁠  /    \
 * ⁠ gr    eat
 * ⁠/ \    /  \
 * g   r  e   at
 * ⁠          / \
 * ⁠         a   t
 * 
 * 
 * To scramble the string, we may choose any non-leaf node and swap its two
 * children.
 * 
 * For example, if we choose the node "gr" and swap its two children, it
 * produces a scrambled string "rgeat".
 * 
 * 
 * ⁠   rgeat
 * ⁠  /    \
 * ⁠ rg    eat
 * ⁠/ \    /  \
 * r   g  e   at
 * ⁠          / \
 * ⁠         a   t
 * 
 * 
 * We say that "rgeat" is a scrambled string of "great".
 * 
 * Similarly, if we continue to swap the children of nodes "eat" and "at", it
 * produces a scrambled string "rgtae".
 * 
 * 
 * ⁠   rgtae
 * ⁠  /    \
 * ⁠ rg    tae
 * ⁠/ \    /  \
 * r   g  ta  e
 * ⁠      / \
 * ⁠     t   a
 * 
 * 
 * We say that "rgtae" is a scrambled string of "great".
 * 
 * Given two strings s1 and s2 of the same length, determine if s2 is a
 * scrambled string of s1.
 * 
 * Example 1:
 * 
 * 
 * Input: s1 = "great", s2 = "rgeat"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s1 = "abcde", s2 = "caebd"
 * Output: false
 * 
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  if (s1 === s2) {
    return true;
  }

  const dp = Array(s1.length).fill().map(
      el => Array(s1.length).fill().map(
      el => Array(s1.length + 1).fill(false)));
  
  for (let i = s1.length - 1; i >= 0; i--) {
    for (let j = s1.length - 1; j >= 0; j--) {
      for (let k = 1; k <= s1.length - Math.max(i, j); k++) {
        if (s1.substr(i, k) === s2.substr(j, k)) {
          dp[i][j][k] = true;
        } else {
          for (let t = 1; t < k; t++) {
            if ((dp[i][j][t] && dp[i + t][j + t][k - t])
                || (dp[i][j + k - t][t] && dp[i + t][j][k - t])) {
              dp[i][j][k] = true;
              break;
            }
          }
        }
      }
    }
  }

  return dp[0][0][s1.length];
};