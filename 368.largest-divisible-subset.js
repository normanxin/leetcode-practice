/*
 * @lc app=leetcode id=368 lang=javascript
 *
 * [368] Largest Divisible Subset
 *
 * https://leetcode.com/problems/largest-divisible-subset/description/
 *
 * algorithms
 * Medium (34.95%)
 * Total Accepted:    47.4K
 * Total Submissions: 135.7K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a set of distinct positive integers, find the largest subset such that
 * every pair (Si, Sj) of elements in this subset satisfies:
 * 
 * Si % Sj = 0 or Sj % Si = 0.
 * 
 * If there are multiple solutions, return any subset is fine.
 * 
 * Example 1:
 * 
 * 
 * 
 * Input: [1,2,3]
 * Output: [1,2] (of course, [1,3] will also be ok)
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1,2,4,8]
 * Output: [1,2,4,8]
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  const res = [];

  if (!nums.length) {
    return res;
  }

  const refs = nums.map((_, i) => i);
  const cnts = [...nums].fill(1);
  let max = 1;
  let pos = 0;

  nums = [...nums].sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] > 0 || cnts[i] > cnts[j]) {
        continue;
      }

      refs[i] = j;
      cnts[i] = cnts[j] + 1;
      cnts[i] > max && (pos = i);
      max = Math.max(max, cnts[i]);
    }
  }

  for (let i = pos;; i = refs[i]) {
    res.push(nums[i]);

    if (i === refs[i]) {
      break;
    }
  }

  return res;
};