/*
 * @lc app=leetcode id=254 lang=javascript
 *
 * [254] Factor Combinations
 *
 * https://leetcode.com/problems/factor-combinations/description/
 *
 * algorithms
 * Medium (43.94%)
 * Total Accepted:    49.9K
 * Total Submissions: 113.4K
 * Testcase Example:  '1'
 *
 * Numbers can be regarded as product of its factors. For example,
 * 
 * 
 * 8 = 2 x 2 x 2;
 * ⁠ = 2 x 4.
 * 
 * 
 * Write a function that takes an integer n and return all possible
 * combinations of its factors.
 * 
 * Note:
 * 
 * 
 * You may assume that n is always positive.
 * Factors should be greater than 1 and less than n.
 * 
 * 
 * Example 1: 
 * 
 * 
 * Input: 1
 * Output: []
 * 
 * 
 * Example 2: 
 * 
 * 
 * Input: 37
 * Output:[]
 * 
 * Example 3: 
 * 
 * 
 * Input: 12
 * Output:
 * [
 * ⁠ [2, 6],
 * ⁠ [2, 2, 3],
 * ⁠ [3, 4]
 * ]
 * 
 * Example 4: 
 * 
 * 
 * Input: 32
 * Output:
 * [
 * ⁠ [2, 16],
 * ⁠ [2, 2, 8],
 * ⁠ [2, 2, 2, 4],
 * ⁠ [2, 2, 2, 2, 2],
 * ⁠ [2, 4, 4],
 * ⁠ [4, 8]
 * ]
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function(n, res = [], path = [], start = 2) {
  if (n === 1) {
    path.length > 1 && res.push([...path]);

    return res;
  }

  for (let i = start; i <= n; i++) {
    if (n % i > 0) {
      continue;
    }

    path.push(i);
    getFactors(n / i, res, path, i);
    path.pop();
  }

  return res;
};