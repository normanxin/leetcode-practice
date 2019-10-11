/*
 * [91] Decode Ways
 *
 * https://leetcode.com/problems/decode-ways/description/
 *
 * algorithms
 * Medium (21.35%)
 * Total Accepted:    217.4K
 * Total Submissions: 1M
 * Testcase Example:  '"12"'
 *
 * A message containing letters from A-Z is being encoded to numbers using the
 * following mapping:
 * 
 * 
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * 
 * 
 * Given a non-empty string containing only digits, determine the total number
 * of ways to decode it.
 * 
 * Example 1:
 * 
 * 
 * Input: "12"
 * Output: 2
 * Explanation: It could be decoded as "AB" (1 2) or "L" (12).
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "226"
 * Output: 3
 * Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2
 * 6).
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const dp = Array(s.length + 1).fill(0);

  dp[0] = 1;

  for (let i = 1; i <= s.length; i++) {
    s[i - 1] !== '0' && (dp[i] += dp[i - 1]);

    const candidate = s.substring(i - 2, i);

    if (candidate >= 10 && candidate <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[s.length];
};
