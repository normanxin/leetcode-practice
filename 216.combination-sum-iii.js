/*
 * @lc app=leetcode id=216 lang=javascript
 *
 * [216] Combination Sum III
 *
 * https://leetcode.com/problems/combination-sum-iii/description/
 *
 * algorithms
 * Medium (50.47%)
 * Total Accepted:    113.4K
 * Total Submissions: 224.6K
 * Testcase Example:  '3\n7'
 *
 * 
 * Find all possible combinations of k numbers that add up to a number n, given
 * that only numbers from 1 to 9 can be used and each combination should be a
 * unique set of numbers.
 * 
 * Note:
 * 
 * 
 * All numbers will be positive integers.
 * The solution set must not contain duplicate combinations.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: k = 3, n = 7
 * Output: [[1,2,4]]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: k = 3, n = 9
 * Output: [[1,2,6], [1,3,5], [2,3,4]]
 * 
 * 
 */
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n, res = [], path = [], start = 1) {
  const sum = path.reduce((acc, num) => acc + num, 0);

  if (path.length > k || sum > n) {
    return res;
  }

  if (path.length === k && sum === n) {
    res.push([...path]);

    return res;
  }

  for (let i = start; i <= 9; i++) {
    path.push(i);
    combinationSum3(k, n, res, path, i + 1); 
    path.pop();
  }

  return res;
};