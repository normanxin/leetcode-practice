/*
 * @lc app=leetcode id=272 lang=javascript
 *
 * [272] Closest Binary Search Tree Value II
 *
 * https://leetcode.com/problems/closest-binary-search-tree-value-ii/description/
 *
 * algorithms
 * Hard (43.65%)
 * Total Accepted:    33.3K
 * Total Submissions: 76.2K
 * Testcase Example:  '[4,2,5,1,3]\n3.714286\n2'
 *
 * Given a non-empty binary search tree and a target value, find k values in
 * the BST that are closest to the target.
 * 
 * Note:
 * 
 * 
 * Given target value is a floating point.
 * You may assume k is always valid, that is: k ≤ total nodes.
 * You are guaranteed to have only one unique set of k values in the BST that
 * are closest to the target.
 * 
 * 
 * Example:
 * 
 * 
 * Input: root = [4,2,5,1,3], target = 3.714286, and k = 2
 * 
 * ⁠   4
 * ⁠  / \
 * ⁠ 2   5
 * ⁠/ \
 * 1   3
 * 
 * Output: [4,3]
 * 
 * Follow up:
 * Assume that the BST is balanced, could you solve it in less than O(n)
 * runtime (where n = total nodes)?
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
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
var closestKValues = function(root, target, k, res = []) {
  if (!root) {
    return res;
  };
        
  closestKValues(root.left, target, k, res);

  if (res.length >= k
      && Math.abs(root.val - target) >= Math.abs(res[0] - target)) {
    return res;
  }

  if (res.length >= k
      && Math.abs(root.val - target) < Math.abs(res[0] - target)) {
    res.shift();
  }

  res.push(root.val);
  closestKValues(root.right, target, k, res);
  
  return res;
};
