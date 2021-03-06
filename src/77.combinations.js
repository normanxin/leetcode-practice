/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 *
 * https://leetcode.com/problems/combinations/description/
 *
 * algorithms
 * Medium (44.53%)
 * Total Accepted:    172.1K
 * Total Submissions: 386.4K
 * Testcase Example:  '4\n2'
 *
 * Given two integers n and k, return all possible combinations of k numbers
 * out of 1 ... n.
 * 
 * Example:
 * 
 * 
 * Input: n = 4, k = 2
 * Output:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 * 
 * 
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k, res = [], path = [], idx = 1) {
  if (k === 0) {
    res.push([...path]);

    return res;
  }

  for (let i = idx; i <= n; i++) {
    path.push(i);
    combine(n, k - 1, res, path, i + 1);
    path.pop();
  }

  return res;
};
