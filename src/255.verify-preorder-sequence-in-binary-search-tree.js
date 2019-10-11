/*
 * @lc app=leetcode id=255 lang=javascript
 *
 * [255] Verify Preorder Sequence in Binary Search Tree
 *
 * https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/description/
 *
 * algorithms
 * Medium (42.71%)
 * Total Accepted:    32.6K
 * Total Submissions: 76.3K
 * Testcase Example:  '[5,2,6,1,3]'
 *
 * Given an array of numbers, verify whether it is the correct preorder
 * traversal sequence of a binary search tree.
 * 
 * You may assume each number in the sequence is unique.
 * 
 * Consider the following binary search tree: 
 * 
 * 
 * ⁠    5
 * ⁠   / \
 * ⁠  2   6
 * ⁠ / \
 * ⁠1   3
 * 
 * Example 1:
 * 
 * 
 * Input: [5,2,6,1,3]
 * Output: false
 * 
 * Example 2:
 * 
 * 
 * Input: [5,2,1,3,6]
 * Output: true
 * 
 * Follow up:
 * Could you do it using only constant space complexity?
 * 
 */
/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function(preorder) {
  let low = -Infinity;
  let i = -1;

  for (let n of preorder) {
    if (n < low) {
      return false;
    }

    while (i >= 0 && n > preorder[i]) {
      low = preorder[i--];
    }

    preorder[++i] = n;
  }
  
  return true;  
};