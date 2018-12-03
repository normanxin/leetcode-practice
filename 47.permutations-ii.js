/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 *
 * https://leetcode.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (37.87%)
 * Total Accepted:    203K
 * Total Submissions: 536.1K
 * Testcase Example:  '[1,1,2]'
 *
 * Given a collection of numbers that might contain duplicates, return all
 * possible unique permutations.
 * 
 * Example:
 * 
 * 
 * Input: [1,1,2]
 * Output:
 * [
 * ⁠ [1,1,2],
 * ⁠ [1,2,1],
 * ⁠ [2,1,1]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums, res = [], visited = new Set(), idx = 0) {
  if (idx >= nums.length) {
    const pattern = nums.join();

    !visited.has(pattern) && res.push([...nums]);
    visited.add(pattern);

    return res;
  }

  for (let i = idx; i < nums.length; i++) {
    [nums[idx], nums[i]] = [nums[i], nums[idx]];
    permuteUnique(nums, res, visited, idx + 1);
    [nums[idx], nums[i]] = [nums[i], nums[idx]];
  }

  return res;
};