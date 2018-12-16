/*
 * [161] One Edit Distance
 *
 * https://leetcode.com/problems/one-edit-distance/description/
 *
 * algorithms
 * Medium (31.30%)
 * Total Accepted:    64.7K
 * Total Submissions: 206.7K
 * Testcase Example:  '"ab"\n"acb"'
 *
 * Given two strings s and t, determine if they are both one edit distance
 * apart.
 * 
 * Note: 
 * 
 * There are 3 possiblities to satisify one edit distance apart:
 * 
 * 
 * Insert a character into s to get t
 * Delete a character from s to get t
 * Replace a character of s to get t
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: s = "ab", t = "acb"
 * Output: true
 * Explanation: We can insert 'c' into s to get t.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "cab", t = "ad"
 * Output: false
 * Explanation: We cannot get t from s by only one step.
 * 
 * Example 3:
 * 
 * 
 * Input: s = "1203", t = "1213"
 * Output: true
 * Explanation: We can replace '0' with '1' to get t.
 * 
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
  let hasDiff = false;

  for (let si = 0, ti = 0; s[si] || t[ti];) {
    if (s[si] !== t[ti] && hasDiff) {
      return false;
    }

    if (s[si] === t[ti]) {
      si++;
      ti++;
      continue;
    }

    hasDiff = true;

    if (s.length <= t.length) {
      ti++;
    }
    
    if (s.length >= t.length) {
      si++;
    }
  }

  return hasDiff;
};
