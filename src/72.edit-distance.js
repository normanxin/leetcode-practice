/*
 * @lc app=leetcode id=72 lang=javascript
 *
 * [72] Edit Distance
 *
 * https://leetcode.com/problems/edit-distance/description/
 *
 * algorithms
 * Hard (35.48%)
 * Total Accepted:    147.9K
 * Total Submissions: 416.5K
 * Testcase Example:  '"horse"\n"ros"'
 *
 * Given two words word1 and word2, find the minimum number of operations
 * required to convert word1 to word2.
 * 
 * You have the following 3 operations permitted on a word:
 * 
 * 
 * Insert a character
 * Delete a character
 * Replace a character
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: word1 = "horse", word2 = "ros"
 * Output: 3
 * Explanation: 
 * horse -> rorse (replace 'h' with 'r')
 * rorse -> rose (remove 'r')
 * rose -> ros (remove 'e')
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: word1 = "intention", word2 = "execution"
 * Output: 5
 * Explanation: 
 * intention -> inention (remove 't')
 * inention -> enention (replace 'i' with 'e')
 * enention -> exention (replace 'n' with 'x')
 * exention -> exection (replace 'n' with 'c')
 * exection -> execution (insert 'u')
 * 
 * 
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const dp = Array(word1.length + 1).fill()
    .map(row => Array(word2.length + 1).fill(0));

  for (let i = 0; i <= word1.length; i++) {
    dp[i][0] = i;
  }

  for (let i = 0; i <= word2.length; i++) {
    dp[0][i] = i;
  }

  for (let x = 1; x <= word1.length; x++) {
    for (let y = 1; y <= word2.length; y++) {
      dp[x][y] = word1[x - 1] === word2[y - 1] 
        ? dp[x - 1][y - 1] 
        : Math.min(dp[x - 1][y], dp[x][y - 1], dp[x - 1][y - 1]) + 1;
    }
  }

  return dp[word1.length][word2.length];
};