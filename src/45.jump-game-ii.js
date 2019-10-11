/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 *
 * https://leetcode.com/problems/jump-game-ii/description/
 *
 * algorithms
 * Hard (27.08%)
 * Total Accepted:    148.7K
 * Total Submissions: 549.3K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * Given an array of non-negative integers, you are initially positioned at the
 * first index of the array.
 * 
 * Each element in the array represents your maximum jump length at that
 * position.
 * 
 * Your goal is to reach the last index in the minimum number of jumps.
 * 
 * Example:
 * 
 * 
 * Input: [2,3,1,1,4]
 * Output: 2
 * Explanation: The minimum number of jumps to reach the last index is 2.
 * ⁠   Jump 1 step from index 0 to 1, then 3 steps to the last index.
 * 
 * Note:
 * 
 * You can assume that you can always reach the last index.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let step = 0;

  for (let queue = [nums.length - 1], visited = new Set().add(nums.length - 1);     queue.length;) {
    const next = [];

    for (let idx of queue) {
      if (idx === 0) {
        return step;
      }

      for (let i = idx - 1; i >= 0; i--) {
        if (i + nums[i] < idx || visited.has(i)) {
          continue;
        }

        next.push(i);
        visited.add(i);
      }
    }

    step++;
    queue = next;
  }

  return step;
};