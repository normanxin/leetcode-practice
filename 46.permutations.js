/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 *
 * https://leetcode.com/problems/permutations/description/
 *
 * algorithms
 * Medium (51.50%)
 * Total Accepted:    305.1K
 * Total Submissions: 592.5K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a collection of distinct integers, return all possible permutations.
 * 
 * Example:
 * 
 * 
 * Input: [1,2,3]
 * Output:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, res = [], idx = 0) {
  if (idx >= nums.length) {
    res.push([...nums]);

    return res;
  }

  for (let i = idx; i < nums.length; i++) {
    [nums[idx], nums[i]] = [nums[i], nums[idx]];
    permute(nums, res, idx + 1);
    [nums[idx], nums[i]] = [nums[i], nums[idx]];
  }

  return res;
};
