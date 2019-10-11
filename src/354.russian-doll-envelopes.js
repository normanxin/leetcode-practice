/*
 * @lc app=leetcode id=354 lang=javascript
 *
 * [354] Russian Doll Envelopes
 *
 * https://leetcode.com/problems/russian-doll-envelopes/description/
 *
 * algorithms
 * Hard (33.79%)
 * Total Accepted:    43.7K
 * Total Submissions: 129.2K
 * Testcase Example:  '[[5,4],[6,4],[6,7],[2,3]]'
 *
 * You have a number of envelopes with widths and heights given as a pair of
 * integers (w, h). One envelope can fit into another if and only if both the
 * width and height of one envelope is greater than the width and height of the
 * other envelope.
 * 
 * What is the maximum number of envelopes can you Russian doll? (put one
 * inside other)
 * 
 * Note:
 * Rotation is not allowed.
 * 
 * Example:
 * 
 * 
 * 
 * Input: [[5,4],[6,4],[6,7],[2,3]]
 * Output: 3 
 * Explanation: The maximum number of envelopes you can Russian doll is 3
 * ([2,3] => [5,4] => [6,7]).
 * 
 * 
 * 
 */
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  const dp = Array(envelopes.length).fill(1);
  let res = 0;

  envelopes.sort(([wA, hA], [wB, hB]) => wA - wB || hA - hB);

  for (let i = 0; i < envelopes.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (envelopes[j][0] >= envelopes[i][0] 
          || envelopes[j][1] >= envelopes[i][1]) {
        continue;
      }

      dp[i] = Math.max(dp[i], dp[j] + 1);
    }

    res = Math.max(res, dp[i]);
  }

  return res;
};