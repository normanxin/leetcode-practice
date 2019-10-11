/*
 * @lc app=leetcode id=526 lang=javascript
 *
 * [526] Beautiful Arrangement
 *
 * https://leetcode.com/problems/beautiful-arrangement/description/
 *
 * algorithms
 * Medium (54.45%)
 * Total Accepted:    36.4K
 * Total Submissions: 66.9K
 * Testcase Example:  '2'
 *
 * Suppose you have N integers from 1 to N. We define a beautiful arrangement
 * as an array that is constructed by these N numbers successfully if one of
 * the following is true for the ith position (1 <= i <= N) in this
 * array:
 * 
 * 
 * The number at the ith position is divisible by i.
 * i is divisible by the number at the ith position.
 * 
 * 
 * 
 * 
 * Now given N, how many beautiful arrangements can you construct?
 * 
 * Example 1:
 * 
 * 
 * Input: 2
 * Output: 2
 * Explanation: 
 * 
 * The first beautiful arrangement is [1, 2]:
 * 
 * Number at the 1st position (i=1) is 1, and 1 is divisible by i (i=1).
 * 
 * Number at the 2nd position (i=2) is 2, and 2 is divisible by i (i=2).
 * 
 * The second beautiful arrangement is [2, 1]:
 * 
 * Number at the 1st position (i=1) is 2, and 2 is divisible by i (i=1).
 * 
 * Number at the 2nd position (i=2) is 1, and i (i=2) is divisible by 1.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * N is a positive integer and will not exceed 15.
 * 
 * 
 * 
 * 
 */
/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N, nums = Array(N).fill().map((_, i) => i + 1)) {
  if (N <= 0) {
    return 1;
  }

  let res = 0;

  for (let i = 0; i < N; i++) {
    if (N % nums[i] > 0 && nums[i] % N > 0) {
      continue;
    }

    [nums[i], nums[N - 1]] = [nums[N - 1], nums[i]];
    res += countArrangement(N - 1, nums);
    [nums[i], nums[N - 1]] = [nums[N - 1], nums[i]]; 
  }

  return res; 
};
