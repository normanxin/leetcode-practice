/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
 *
 * https://leetcode.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (44.66%)
 * Total Accepted:    205.5K
 * Total Submissions: 460.2K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * Given a binary tree, return all root-to-leaf paths.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * 
 * 
 * Input:
 * 
 * ⁠  1
 * ⁠/   \
 * 2     3
 * ⁠\
 * ⁠ 5
 * 
 * Output: ["1->2->5", "1->3"]
 * 
 * Explanation: All root-to-leaf paths are: 1->2->5, 1->3
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
 * @return {string[]}
 */
var binaryTreePaths = function(root, res = [], path = []) {
  if (!root) {
    return res;
  }

  path.push(root.val);

  if (!root.left && !root.right) {
    res.push(path.join('->'));
  }

  if (root.left) {
    binaryTreePaths(root.left, res, path);
    path.pop();
  }
  
  if (root.right) {
    binaryTreePaths(root.right, res, path);
    path.pop();
  }

  return res;
};
