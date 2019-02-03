/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 *
 * https://leetcode.com/problems/word-pattern/description/
 *
 * algorithms
 * Easy (34.39%)
 * Total Accepted:    127.8K
 * Total Submissions: 371.5K
 * Testcase Example:  '"abba"\n"dog cat cat dog"'
 *
 * Given a pattern and a string str, find if str follows the same pattern.
 * 
 * Here follow means a full match, such that there is a bijection between a
 * letter in pattern and a non-empty word in str.
 * 
 * Example 1:
 * 
 * 
 * Input: pattern = "abba", str = "dog cat cat dog"
 * Output: true
 * 
 * Example 2:
 * 
 * 
 * Input:pattern = "abba", str = "dog cat cat fish"
 * Output: false
 * 
 * Example 3:
 * 
 * 
 * Input: pattern = "aaaa", str = "dog cat cat dog"
 * Output: false
 * 
 * Example 4:
 * 
 * 
 * Input: pattern = "abba", str = "dog dog dog dog"
 * Output: false
 * 
 * Notes:
 * You may assume pattern contains only lowercase letters, and str contains
 * lowercase letters separated by a single space.
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  const patternWord = new Map();
  const wordPattern = new Map();

  str = str.split(' ');

  if (pattern.length !== str.length) {
    return false;
  }
  
  for (let i = 0; pattern[i]; i++) {
    const w = patternWord.get(pattern[i]);
    const p = wordPattern.get(str[i]);

    if ((patternWord.has(pattern[i]) && w !== str[i])
        || (wordPattern.has(str[i]) && p !== pattern[i])) {
      return false;
    }

    patternWord.set(pattern[i], str[i]);
    wordPattern.set(str[i], pattern[i]);
  }

  return true;
};
