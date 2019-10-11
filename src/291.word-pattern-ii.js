/*
 * @lc app=leetcode id=291 lang=javascript
 *
 * [291] Word Pattern II
 *
 * https://leetcode.com/problems/word-pattern-ii/description/
 *
 * algorithms
 * Hard (39.89%)
 * Total Accepted:    29.5K
 * Total Submissions: 74K
 * Testcase Example:  '"abab"\n"redblueredblue"'
 *
 * Given a pattern and a string str, find if str follows the same pattern.
 * 
 * Here follow means a full match, such that there is a bijection between a
 * letter in pattern and a non-empty substring in str.
 * 
 * Example 1:
 * 
 * 
 * Input: pattern = "abab", str = "redblueredblue"
 * Output: true
 * 
 * Example 2:
 * 
 * 
 * Input: pattern = pattern = "aaaa", str = "asdasdasdasd"
 * Output: true
 * 
 * Example 3:
 * 
 * 
 * Input: pattern = "aabb", str = "xyzabcxzyabc"
 * Output: false
 * 
 * 
 * Notes:
 * You may assume both pattern and str contains only lowercase letters.
 * 
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPatternMatch = function(pattern, str,
    patternWord = new Map(), wordPattern = new Map(), pIdx = 0, sIdx = 0) {
  if (!pattern) {
    return !str.length;
  }

  if (pIdx === pattern.length && sIdx === str.length) {
    return true;
  }

  for (let si = sIdx + 1; si <= str.length; si++) {
    const p = pattern[pIdx];
    const w = str.substring(sIdx, si);
    const hasPattern = patternWord.has(p);
    const hasWord = wordPattern.has(w); 

    if ((hasPattern && patternWord.get(p) !== w)
        || (hasWord && wordPattern.get(w) !== p)) {
      continue;
    }

    if (wordPatternMatch(pattern, str,
        patternWord.set(p, w), wordPattern.set(w, p), pIdx + 1, si)) {
      return true;
    }

    if (!hasPattern) {
      patternWord.delete(p);
      wordPattern.delete(w);
    }
  }

  return false;
};