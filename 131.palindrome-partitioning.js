/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 *
 * https://leetcode.com/problems/palindrome-partitioning/description/
 *
 * algorithms
 * Medium (38.31%)
 * Total Accepted:    141.8K
 * Total Submissions: 370.2K
 * Testcase Example:  '"aab"'
 *
 * Given a string s, partition s such that every substring of the partition is
 * a palindrome.
 * 
 * Return all possible palindrome partitioning of s.
 * 
 * Example:
 * 
 * 
 * Input: "aab"
 * Output:
 * [
 * ⁠ ["aa","b"],
 * ⁠ ["a","a","b"]
 * ]
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s, res = [], path = [], idx = 0) {
  if (idx >= s.length) {
    res.push([...path]);

    return res;
  }

  for (let i = idx + 1; i <= s.length; i++) {
    const candidate = s.substring(idx, i);

    if (candidate !== [...candidate].reverse().join('')) {
      continue;
    }

    path.push(candidate);
    partition(s, res, path, i);
    path.pop();
  }

  return res;
};
