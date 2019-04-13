/*
 * @lc app=leetcode id=249 lang=javascript
 *
 * [249] Group Shifted Strings
 *
 * https://leetcode.com/problems/group-shifted-strings/description/
 *
 * algorithms
 * Medium (48.46%)
 * Total Accepted:    47.8K
 * Total Submissions: 98.6K
 * Testcase Example:  '["abc","bcd","acef","xyz","az","ba","a","z"]'
 *
 * Given a string, we can "shift" each of its letter to its successive letter,
 * for example: "abc" -> "bcd". We can keep "shifting" which forms the
 * sequence:
 * 
 * 
 * "abc" -> "bcd" -> ... -> "xyz"
 * 
 * Given a list of strings which contains only lowercase alphabets, group all
 * strings that belong to the same shifting sequence.
 * 
 * Example:
 * 
 * 
 * Input: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"],
 * Output: 
 * [
 * ⁠ ["abc","bcd","xyz"],
 * ⁠ ["az","ba"],
 * ⁠ ["acef"],
 * ⁠ ["a","z"]
 * ]
 * 
 * 
 */
/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
  return [...strings.reduce((map, str) => {
    const pattern = getPattern(str);

    !map.has(pattern) && map.set(pattern, []);
    map.get(pattern).push(str);

    return map;
  }, new Map()).values()];
};

function getPattern(str) {
  return [...str]
      .map(ch => (ch.charCodeAt() - str[0].charCodeAt() + 26) % 26).join();
}