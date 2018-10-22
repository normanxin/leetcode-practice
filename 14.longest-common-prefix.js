/*
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.07%)
 * Total Accepted:    341.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * Note:
 * 
 * All given inputs are in lowercase letters a-z.
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) {
    return '';
  }

  let lo = 0;
  let hi = Math.min(...strs.map(str => str.length)) - 1;

  while (lo + 1 < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    const prefix = strs[0].substring(0, mid + 1);

    strs.every(str => str.substring(0, mid + 1) === prefix)
      ? (lo = mid)
      : (hi = mid);
  }

  let prefix = strs[0].substring(0, hi + 1);

  if (strs.every(str => str.substring(0, hi + 1) === prefix)) {
    return prefix;
  }

  prefix = strs[0].substring(0, lo + 1);

  if (strs.every(str => str.substring(0, lo + 1) === prefix)) {
    return prefix;
  }

  return '';
};