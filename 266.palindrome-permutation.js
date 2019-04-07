/*
 * @lc app=leetcode id=266 lang=javascript
 *
 * [266] Palindrome Permutation
 *
 * https://leetcode.com/problems/palindrome-permutation/description/
 *
 * algorithms
 * Easy (59.81%)
 * Total Accepted:    64.1K
 * Total Submissions: 107.1K
 * Testcase Example:  '"code"'
 *
 * Given a string, determine if a permutation of the string could form a
 * palindrome.
 * 
 * Example 1:
 * 
 * 
 * Input: "code"
 * Output: false
 * 
 * Example 2:
 * 
 * 
 * Input: "aab"
 * Output: true
 * 
 * Example 3:
 * 
 * 
 * Input: "carerac"
 * Output: true
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  const count = [...s].reduce((map, ch) => {
    !map.has(ch) && map.set(ch, 0);
    map.set(ch, map.get(ch) + 1);

    return map;
  }, new Map());

  let hasOdd = false;

  for (let val of count.values()) {
    const isOdd = val % 2 === 1;

    if (isOdd && hasOdd) {
      return false;
    }

    hasOdd = isOdd;
  }

  return true;
};
