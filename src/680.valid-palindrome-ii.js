/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 *
 * https://leetcode.com/problems/valid-palindrome-ii/description/
 *
 * algorithms
 * Easy (34.54%)
 * Total Accepted:    82.1K
 * Total Submissions: 237.8K
 * Testcase Example:  '"aba"'
 *
 * 
 * Given a non-empty string s, you may delete at most one character.  Judge
 * whether you can make it a palindrome.
 * 
 * 
 * Example 1:
 * 
 * Input: "aba"
 * Output: True
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: "abca"
 * Output: True
 * Explanation: You could delete the character 'c'.
 * 
 * 
 * 
 * Note:
 * 
 * The string will only contain lowercase characters a-z.
 * The maximum length of the string is 50000.
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s, start = 0, end = s.length - 1,
    { hasDeleted = false } = {}) {
  if (!s || start >= end) {
    return true;
  }

  if (hasDeleted && s[start] !== s[end]) {
    return false;
  }

  if (s[start] === s[end]) {
    return validPalindrome(s, start + 1, end - 1, { hasDeleted });
  }

  return validPalindrome(s, start + 1, end, { hasDeleted: true })
      || validPalindrome(s, start, end - 1, { hasDeleted: true });
};
