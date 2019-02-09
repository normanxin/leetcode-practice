/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
 *
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/description/
 *
 * algorithms
 * Hard (29.12%)
 * Total Accepted:    168.9K
 * Total Submissions: 580.3K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a non-empty binary tree, find the maximum path sum.
 * 
 * For this problem, a path is defined as any sequence of nodes from some
 * starting node to any node in the tree along the parent-child connections.
 * The path must contain at least one node and does not need to go through the
 * root.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,3]
 * 
 * ⁠      1
 * ⁠     / \
 * ⁠    2   3
 * 
 * Output: 6
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [-10,9,20,null,null,15,7]
 * 
 * -10
 * / \
 * 9  20
 * /  \
 * 15   7
 * 
 * Output: 42
 * 
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
var maxPathSum = function(root) {
  if (!root) {
    return -Infinity;
  }

  const lMax = maxPathSum(root.left);
  const rMax = maxPathSum(root.right);
  
  root.lPathSum = root.left
      ? Math.max(root.left.val
          + Math.max(root.left.lPathSum, root.left.rPathSum), 0)
      : 0;
  root.rPathSum = root.right
      ? Math.max(root.right.val
          + Math.max(root.right.lPathSum, root.right.rPathSum), 0)
      : 0;
  
  return Math.max(root.val + root.lPathSum + root.rPathSum, lMax, rMax);
};
