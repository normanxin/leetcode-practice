/*
 * [659] Split Array into Consecutive Subsequences
 *
 * https://leetcode.com/problems/split-array-into-consecutive-subsequences/description/
 *
 * algorithms
 * Medium (37.86%)
 * Total Accepted:    13.5K
 * Total Submissions: 35.7K
 * Testcase Example:  '[1,2,3,3,4,5]'
 *
 * You are given an integer array sorted in ascending order (may contain
 * duplicates), you need to split them into several subsequences, where each
 * subsequences consist of at least 3 consecutive integers. Return whether you
 * can make such a split.
 * 
 * Example 1:
 * 
 * Input: [1,2,3,3,4,5]
 * Output: True
 * Explanation:
 * You can split them into two consecutive subsequences : 
 * 1, 2, 3
 * 3, 4, 5
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: [1,2,3,3,4,4,5,5]
 * Output: True
 * Explanation:
 * You can split them into two consecutive subsequences : 
 * 1, 2, 3, 4, 5
 * 3, 4, 5
 * 
 * 
 * 
 * Example 3:
 * 
 * Input: [1,2,3,4,4,5]
 * Output: False
 * 
 * 
 * 
 * Note:
 * 
 * The length of the input is in range of [1, 10000]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  const freq = new Map(), need = new Map();

  for (let num of nums) {
    !freq.has(num) && freq.set(num, 0);
    freq.set(num, freq.get(num) + 1);
  }

  for (let num of nums) {
    if (freq.get(num) === 0) {
      continue;
    } else if (need.get(num) > 0) {
      !need.has(num) && need.set(num, 0);
      !need.has(num + 1) && need.set(num + 1, 0);
      need.set(num, need.get(num) - 1);
      need.set(num + 1, need.get(num + 1) + 1);
    } else if (freq.get(num + 1) > 0 && freq.get(num + 2) > 0) {
      freq.has(num + 1) && freq.set(num + 1, freq.get(num + 1) - 1);
      freq.has(num + 2) && freq.set(num + 2, freq.get(num + 2) - 1);
      !need.has(num + 3) && need.set(num + 3, 0);
      need.set(num + 3, need.get(num + 3) + 1);
    } else {
      return false;
    }
  
    freq.has(num) && freq.set(num, freq.get(num) - 1);
  }
  return true;
};
