/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 *
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (40.91%)
 * Total Accepted:    144.5K
 * Total Submissions: 353.1K
 * Testcase Example:  '"hello"'
 *
 * Write a function that takes a string as input and reverse only the vowels of
 * a string.
 * 
 * Example 1:
 * 
 * 
 * Input: "hello"
 * Output: "holle"
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "leetcode"
 * Output: "leotcede"
 * 
 * 
 * Note:
 * The vowels does not include the letter "y".
 * 
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  s = [...s];

  for (let l = 0, r = s.length - 1; l < r;) {
    const isLeftVowel = /[aeiouAEIOU]/.test(s[l]);
    const isRightVowel = /[aeiouAEIOU]/.test(s[r]); 

    if (!isLeftVowel) {
      l++;
    }

    if (!isRightVowel) {
      r--;
    }

    if (isLeftVowel && isRightVowel) {
      [s[l], s[r]] = [s[r], s[l]];
      l++;
      r--;
    }
  }

  return s.join('');
};