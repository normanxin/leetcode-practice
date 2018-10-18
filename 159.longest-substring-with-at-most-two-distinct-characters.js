/*
 * [159] Longest Substring with At Most Two Distinct Characters
 *
 * https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/description/
 *
 * algorithms
 * Hard (44.09%)
 * Total Accepted:    50.3K
 * Total Submissions: 114K
 * Testcase Example:  '"eceba"'
 *
 * Given a string s , find the length of the longest substring t  that contains
 * at most 2 distinct characters.
 * 
 * Example 1:
 * 
 * 
 * Input: "eceba"
 * Output: 3
 * Explanation: t is "ece" which its length is 3.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "ccaabbb"
 * Output: 5
 * Explanation: t is "aabbb" which its length is 5.
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
  const map = new Map();
  let res = 0;

  for (let l = 0, r = 0; s[l]; l++) {
    for (; s[r] && map.size <= 2; r++) {
      if (map.size === 2 && !map.has(s[r])) {
        break;
      }

      !map.has(s[r]) && map.set(s[r], 0);
      map.set(s[r], map.get(s[r]) + 1);
    }

    res = Math.max(res, r - l);
    map.set(s[l], map.get(s[l]) - 1);
    !map.get(s[l]) && map.delete(s[l]);
  }

  return res;
};
