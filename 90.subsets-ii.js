/*
 * [90] Subsets II
 *
 * https://leetcode.com/problems/subsets-ii/description/
 *
 * algorithms
 * Medium (40.44%)
 * Total Accepted:    175.9K
 * Total Submissions: 434.9K
 * Testcase Example:  '[1,2,2]'
 *
 * Given a collection of integers that might contain duplicates, nums, return
 * all possible subsets (the power set).
 * 
 * Note: The solution set must not contain duplicate subsets.
 * 
 * Example:
 * 
 * 
 * Input: [1,2,2]
 * Output:
 * [
 * ⁠ [2],
 * ⁠ [1],
 * ⁠ [1,2,2],
 * ⁠ [2,2],
 * ⁠ [1,2],
 * ⁠ []
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums, res = [], path = [], idx = 0) {
  res.push([...path]);

  if (idx >= nums.length) {
    return res;
  }

  idx === 0 && nums.sort((a, b) => a - b);

  for (let i = idx; i < nums.length; i++) {
    if (i > idx && nums[i] === nums[i - 1]) {
      continue;
    }

    path.push(nums[i]);
    subsetsWithDup(nums, res, path, i + 1);
    path.pop(); 
  }

  return res;
};
