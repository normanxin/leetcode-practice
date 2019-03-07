/*
 * @lc app=leetcode id=320 lang=javascript
 *
 * [320] Generalized Abbreviation
 *
 * https://leetcode.com/problems/generalized-abbreviation/description/
 *
 * algorithms
 * Medium (48.26%)
 * Total Accepted:    36.1K
 * Total Submissions: 74.8K
 * Testcase Example:  '"word"'
 *
 * Write a function to generate the generalized abbreviations of a word. 
 * 
 * Note: The order of the output does not matter.
 * 
 * Example:
 * 
 * 
 * Input: "word"
 * Output:
 * ["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d",
 * "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function(word) {
  if (!word.length) {
    return [''];
  }

  const res = [];

  for (let len = 1; len <= word.length; len++) {
    const suffixes = generateAbbreviations(word.substring(len));

    res.push(...suffixes.filter(suffix => !suffix || /\d/.test(suffix[0]))
        .map(suffix => `${word.substr(0, len)}${suffix}`), 
        ...suffixes.filter(suffix => !suffix || /\D/.test(suffix[0]))
        .map(suffix => `${len}${suffix}`));
  }

  return res;
};