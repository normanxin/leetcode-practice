/*
 * @lc app=leetcode id=186 lang=javascript
 *
 * [186] Reverse Words in a String II
 *
 * https://leetcode.com/problems/reverse-words-in-a-string-ii/description/
 *
 * algorithms
 * Medium (34.83%)
 * Total Accepted:    55.9K
 * Total Submissions: 160.1K
 * Testcase Example:  '["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]'
 *
 * Given an input string , reverse the string word by word. 
 * 
 * Example:
 * 
 * 
 * Input:  ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
 * Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]
 * 
 * Note: 
 * 
 * 
 * A word is defined as a sequence of non-space characters.
 * The input string does not contain leading or trailing spaces.
 * The words are always separated by a single space.
 * 
 * 
 * Follow up: Could you do it in-place without allocating extra space?
 * 
 */
/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify str in-place instead.
 */
var reverseWords = function(str) {
  for (let lo = 0, hi = 0; hi <= str.length; hi++) {
    if (str[hi] && str[hi] !== ' ') {
      continue;
    }

    reverse(str, lo, hi);
    lo = hi + 1;
  }

  reverse(str);
};

function reverse(str, lo = 0, hi = str.length) {
  for (let i = lo, j = hi - 1; i < j; i++, j--) {
    [str[i], str[j]] = [str[j], str[i]];
  }
}
