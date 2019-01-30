/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 *
 * https://leetcode.com/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (29.51%)
 * Total Accepted:    203.8K
 * Total Submissions: 690.5K
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * Given a string S and a string T, find the minimum window in S which will
 * contain all the characters in T in complexity O(n).
 * 
 * Example:
 * 
 * 
 * Input: S = "ADOBECODEBANC", T = "ABC"
 * Output: "BANC"
 * 
 * 
 * Note:
 * 
 * 
 * If there is no such window in S that covers all characters in T, return the
 * empty string "".
 * If there is such window, you are guaranteed that there will always be only
 * one unique minimum window in S.
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const map = [...t].reduce((map, ch) => {
    !map.has(ch) && map.set(ch, 0);
    map.set(ch, map.get(ch) + 1);

    return map;
  }, new Map());
  let res = '';

  for (let l = 0, r = 0, cnt = 0; s[l]; l++) {
    for (; s[r] && cnt < t.length; r++) {
      if (!map.has(s[r])) {
        continue;
      }

      map.set(s[r], map.get(s[r]) - 1);
      map.get(s[r]) >= 0 && cnt++;
    }

    if (cnt === t.length && (!res.length || r - l < res.length)) {
      res = s.substring(l, r);
    }

    if (!map.has(s[l])) {
      continue;
    }

    map.set(s[l], map.get(s[l]) + 1);
    map.get(s[l]) > 0 && cnt--;
  }

  return res;
};