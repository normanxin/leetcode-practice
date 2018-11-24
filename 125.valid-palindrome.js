/*
 * [125] Valid Palindrome
 *
 * https://leetcode.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (29.07%)
 * Total Accepted:    285.4K
 * Total Submissions: 981.7K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * Given a string, determine if it is a palindrome, considering only
 * alphanumeric characters and ignoring cases.
 * 
 * Note: For the purpose of this problem, we define empty string as valid
 * palindrome.
 * 
 * Example 1:
 * 
 * 
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "race a car"
 * Output: false
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  for (let l = 0, r = s.length - 1; l < r;) {
    if (/\W/.test(s[l])) {
      l++;
      continue;
    }

    if (/\W/.test(s[r])) {
      r--;
      continue;
    }

    if (s[l].toUpperCase() !== s[r].toUpperCase()) {
      return false;
    }

    l++;
    r--;
  }

  return true;
};
