/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 *
 * https://leetcode.com/problems/isomorphic-strings/description/
 *
 * algorithms
 * Easy (36.91%)
 * Total Accepted:    192.6K
 * Total Submissions: 521.7K
 * Testcase Example:  '"egg"\n"add"'
 *
 * Given two strings s and t, determine if they are isomorphic.
 * 
 * Two strings are isomorphic if the characters in s can be replaced to get t.
 * 
 * All occurrences of a character must be replaced with another character while
 * preserving the order of characters. No two characters may map to the same
 * character but a character may map to itself.
 * 
 * Example 1:
 * 
 * 
 * Input: s = "egg", t = "add"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "foo", t = "bar"
 * Output: false
 * 
 * Example 3:
 * 
 * 
 * Input: s = "paper", t = "title"
 * Output: true
 * 
 * Note:
 * You may assume both s and t have the same length.
 * 
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const s2t = new Map();
  const t2s = new Map();

  for (let i = 0; i < s.length; i++) {
    if (s2t.has(s[i]) !== t2s.has(t[i])
        || (s2t.has(s[i]) && s2t.get(s[i]) !== t[i])
        || (t2s.has(t[i]) && t2s.get(t[i]) !== s[i])) {
      return false;
    }

    s2t.set(s[i], t[i]);
    t2s.set(t[i], s[i]);
  }

  return true;
};