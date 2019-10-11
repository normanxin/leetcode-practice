/*
 * [40] Combination Sum II
 *
 * https://leetcode.com/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (38.77%)
 * Total Accepted:    184.4K
 * Total Submissions: 475.6K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * Given a collection of candidate numbers (candidates) and a target number
 * (target), find all unique combinations in candidates where the candidate
 * numbers sums to target.
 * 
 * Each number in candidates may only be used once in the combination.
 * 
 * Note:
 * 
 * 
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: candidates = [10,1,2,7,6,1,5], target = 8,
 * A solution set is:
 * [
 * ⁠ [1, 7],
 * ⁠ [1, 2, 5],
 * ⁠ [2, 6],
 * ⁠ [1, 1, 6]
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: candidates = [2,5,2,1,2], target = 5,
 * A solution set is:
 * [
 * [1,2,2],
 * [5]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target, res = [], path = [], idx = 0) {
  if (target < 0) {
    return res;
  }

  if (target === 0) {
    path.length > 0 && res.push([...path]);

    return res;
  }

  candidates = candidates.sort((a, b) => a - b);

  for (let i = idx; i < candidates.length; i++) {
    if (i > idx && candidates[i] === candidates[i - 1]) {
      continue;
    }

    path.push(candidates[i]);
    combinationSum2(candidates, target - candidates[i], res, path, i + 1);
    path.pop();
  }

  return res;
};
