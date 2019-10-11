/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 *
 * https://leetcode.com/problems/decode-string/description/
 *
 * algorithms
 * Medium (43.84%)
 * Total Accepted:    88.3K
 * Total Submissions: 201.4K
 * Testcase Example:  '"3[a]2[bc]"'
 *
 * 
 * Given an encoded string, return it's decoded string.
 * 
 * 
 * The encoding rule is: k[encoded_string], where the encoded_string inside the
 * square brackets is being repeated exactly k times. Note that k is guaranteed
 * to be a positive integer.
 * 
 * 
 * You may assume that the input string is always valid; No extra white spaces,
 * square brackets are well-formed, etc.
 * 
 * Furthermore, you may assume that the original data does not contain any
 * digits and that digits are only for those repeat numbers, k. For example,
 * there won't be input like 3a or 2[4].
 * 
 * 
 * Examples:
 * 
 * s = "3[a]2[bc]", return "aaabcbc".
 * s = "3[a2[c]]", return "accaccacc".
 * s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let res = '';
  let repeat = '';
  
  for (let i = 0; s[i]; i++) {
    if (/[a-zA-Z]/.test(s[i])) {
      res += s[i];
    } else if (/\d/.test(s[i])) {
      repeat += s[i];
    } else if (s[i] === '[') {
      let j = i;
  
      for (let cnt = 0;; i++) {
        if (s[i] === '[') {
          cnt++;
        } else if (s[i] === ']') {
          cnt--;
        }

        if (!cnt) {
          break;
        }
      }

      const partial = decodeString(s.substring(j + 1, i)); 

      for (let k = 0; k < repeat; k++) {
        res += partial;
      }

      repeat = '';
    }
  }

  return res;
};