/*
 * [340] Longest Substring with At Most K Distinct Characters
 *
 * https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/description/
 *
 * algorithms
 * Hard (38.39%)
 * Total Accepted:    51.8K
 * Total Submissions: 135K
 * Testcase Example:  '"eceba"\n2'
 *
 * Given a string, find the length of the longest substring T that contains at
 * most k distinct characters.
 * 
 * Example 1:
 * 
 * 
 * 
 * Input: s = "eceba", k = 2
 * Output: 3
 * Explanation: T is "ece" which its length is 3.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "aa", k = 1
 * Output: 2
 * Explanation: T is "aa" which its length is 2.
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  const map = new Map();
  let res = 0;
  
  for (let l = 0, r = 0; s[l]; l++) {
    for (; s[r] && map.size <= k; r++) {
      if (map.size === k && !map.has(s[r])) {
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