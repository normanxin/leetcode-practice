/*
 * [78] Subsets
 *
 * https://leetcode.com/problems/subsets/description/
 *
 * algorithms
 * Medium (49.08%)
 * Total Accepted:    299.4K
 * Total Submissions: 610.1K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a set of distinct integers, nums, return all possible subsets (the
 * power set).
 * 
 * Note: The solution set must not contain duplicate subsets.
 * 
 * Example:
 * 
 * 
 * Input: nums = [1,2,3]
 * Output:
 * [
 * ⁠ [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
 * ]
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums, res = [], path = [], idx = 0) {
  res.push([...path]);

  if (idx >= nums.length) {
    return res;
  }

  for (let i = idx; i < nums.length; i++) {
    path.push(nums[i]);
    subsets(nums, res, path, i + 1);
    path.pop();
  }

  return res;
};
