/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Hard (46.53%)
 * Total Accepted:    231.9K
 * Total Submissions: 498.4K
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given a binary tree, return the postorder traversal of its nodes' values.
 * 
 * Example:
 * 
 * 
 * Input: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 * 
 * Output: [3,2,1]
 * 
 * 
 * Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  const res = [];

  if (!root) {
    return res;
  }

  for (let stack = [root], visited = new Set(); stack.length;) {
    const top = stack[stack.length - 1];

    if ((!top.left && !top.right) || visited.has(top)) {
      res.push(stack.pop().val);
    }

    if (visited.has(top)) {
      continue;
    }

    top.right && stack.push(top.right);
    top.left && stack.push(top.left);
    visited.add(top);
  }

  return res;
};
