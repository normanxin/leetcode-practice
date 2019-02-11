/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 *
 * https://leetcode.com/problems/longest-consecutive-sequence/description/
 *
 * algorithms
 * Hard (40.67%)
 * Total Accepted:    187.2K
 * Total Submissions: 460.3K
 * Testcase Example:  '[100,4,200,1,3,2]'
 *
 * Given an unsorted array of integers, find the length of the longest
 * consecutive elements sequence.
 * 
 * Your algorithm should run in O(n) complexity.
 * 
 * Example:
 * 
 * 
 * Input: [100, 4, 200, 1, 3, 2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4].
 * Therefore its length is 4.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const set = nums.reduce((set, num) => set.add(num), new Set());

  return nums.reduce((res, num) => {
    if (!set.delete(num)) {
      return res;
    }

    let pre = num - 1;
    let next = num + 1;

    while (set.delete(pre)) {
      pre--;
    }

    while (set.delete(next)) {
      next++;
    }

    return Math.max(res, next - pre - 1);
  }, 0);
};