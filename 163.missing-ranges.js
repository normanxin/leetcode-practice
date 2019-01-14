/*
 * @lc app=leetcode id=163 lang=javascript
 *
 * [163] Missing Ranges
 *
 * https://leetcode.com/problems/missing-ranges/description/
 *
 * algorithms
 * Medium (22.90%)
 * Total Accepted:    49.7K
 * Total Submissions: 216.9K
 * Testcase Example:  '[0,1,3,50,75]\n0\n99'
 *
 * Given a sorted integer array nums, where the range of elements are in the
 * inclusive range [lower, upper], return its missing ranges.
 * 
 * Example:
 * 
 * 
 * Input: nums = [0, 1, 3, 50, 75], lower = 0 and upper = 99,
 * Output: ["2", "4->49", "51->74", "76->99"]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
  nums = nums.filter(el => el >= lower && el <= upper);

  const res = [];

  if (!nums.length) {
    res.push(lower === upper ? `${lower}` : `${lower}->${upper}`);
  }

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] === 2) {
      res.push(`${nums[i] + 1}`);
    } else if (nums[i + 1] - nums[i] > 2) {
      res.push(`${nums[i] + 1}->${nums[i + 1] - 1}`);
    }
  }
  
  if (nums[0] - lower === 1) {
    res.unshift(`${lower}`);
  }

  if (nums[0] - lower > 1) {
    res.unshift(`${lower}->${nums[0] - 1}`);
  }

  if (upper - nums[nums.length - 1] === 1) {
    res.push(`${upper}`);
  }

  if (upper - nums[nums.length - 1] > 1) {
    res.push(`${nums[nums.length - 1] + 1}->${upper}`);
  }

  return res;
};