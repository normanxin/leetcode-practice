/*
 * @lc app=leetcode id=333 lang=javascript
 *
 * [333] Largest BST Subtree
 *
 * https://leetcode.com/problems/largest-bst-subtree/description/
 *
 * algorithms
 * Medium (32.31%)
 * Total Accepted:    27.5K
 * Total Submissions: 85.1K
 * Testcase Example:  '[10,5,15,1,8,null,7]'
 *
 * Given a binary tree, find the largest subtree which is a Binary Search Tree
 * (BST), where largest means subtree with largest number of nodes in it.
 * 
 * Note:
 * A subtree must include all of its descendants.
 * 
 * Example:
 * 
 * 
 * Input: [10,5,15,1,8,null,7]
 * 
 * ⁠  10 
 * ⁠  / \ 
 * ⁠ 5  15 
 * ⁠/ \   \ 
 * 1   8   7
 * 
 * Output: 3
 * Explanation: The Largest BST Subtree in this case is the highlighted one.
 * ⁠            The return value is the subtree's size, which is 3.
 * 
 * 
 * Follow up:
 * Can you figure out ways to solve it with O(n) time complexity?
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var largestBSTSubtree = function(root) {
  return helper(root)[2];
};

function helper(root) {
  if (!root) {
    return [Infinity, -Infinity, 0];
  }

  const left = helper(root.left);
  const right = helper(root.right);

  if (root.val > left[1] && root.val < right[0]) {
    return [
      Math.min(root.val, left[0]),
      Math.max(root.val, right[1]),
      left[2] + right[2] + 1,
    ];
  }
  
  return [-Infinity, Infinity, Math.max(left[2], right[2])];
}
