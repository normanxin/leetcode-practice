/*
 * [17] Letter Combinations of a Phone Number
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (39.07%)
 * Total Accepted:    309K
 * Total Submissions: 790.8K
 * Testcase Example:  '"23"'
 *
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent.
 * 
 * A mapping of digit to letters (just like on the telephone buttons) is given
 * below. Note that 1 does not map to any letters.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 
 * Note:
 * 
 * Although the above answer is in lexicographical order, your answer could be
 * in any order you want.
 * 
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits, res = [], path = [], idx = 0) {
  if (!digits.length) {
    return res;
  }

  if (idx >= digits.length) {
    res.push(path.join(''));

    return res;
  }

  const dic = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

  for (let ch of dic[digits[idx]]) {
    path[idx] = ch;
    letterCombinations(digits, res, path, idx + 1); 
  }

  return res;
};
