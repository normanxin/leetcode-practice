/*
 * @lc app=leetcode id=679 lang=javascript
 *
 * [679] 24 Game
 *
 * https://leetcode.com/problems/24-game/description/
 *
 * algorithms
 * Hard (40.75%)
 * Total Accepted:    14.7K
 * Total Submissions: 36.1K
 * Testcase Example:  '[4,1,8,7]'
 *
 * 
 * You have 4 cards each containing a number from 1 to 9.  You need to judge
 * whether they could operated through *, /, +, -, (, ) to get the value of
 * 24.
 * 
 * 
 * Example 1:
 * 
 * Input: [4, 1, 8, 7]
 * Output: True
 * Explanation: (8-4) * (7-1) = 24
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: [1, 2, 1, 2]
 * Output: False
 * 
 * 
 * 
 * Note:
 * 
 * The division operator / represents real division, not integer division.  For
 * example, 4 / (1 - 2/3) = 12.
 * Every operation done is between two numbers.  In particular, we cannot use -
 * as a unary operator.  For example, with [1, 1, 1, 1] as input, the
 * expression -1 - 1 - 1 - 1 is not allowed.
 * You cannot concatenate numbers together.  For example, if the input is [1,
 * 2, 1, 2], we cannot write this as 12 + 12.
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function(nums) {
  if (nums.length === 1) {
    return Math.abs(nums[0] - 24) < 1e-13;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const next = [...nums];

      next.splice(next.indexOf(nums[i]), 1);
      next.splice(next.indexOf(nums[j]), 1);

      next.push(nums[i] + nums[j]);

      if (judgePoint24(next)) {
        return true;
      }

      next.pop();

      next.push(nums[i] - nums[j]);

      if (judgePoint24(next)) {
        return true;
      }

      next.pop();
      
      next.push(nums[j] - nums[i]);

      if (judgePoint24(next)) {
        return true;
      }

      next.pop();
      
      next.push(nums[i] * nums[j]);

      if (judgePoint24(next)) {
        return true;
      }

      next.pop();
      
      next.push(nums[i] / nums[j]);

      if (judgePoint24(next)) {
        return true;
      }

      next.pop();

      next.push(nums[j] / nums[i]);

      if (judgePoint24(next)) {
        return true;
      }

      next.pop();
    }
  }

  return false;
};