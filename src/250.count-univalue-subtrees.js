/*
 * @lc app=leetcode id=250 lang=javascript
 *
 * [250] Count Univalue Subtrees
 *
 * https://leetcode.com/problems/count-univalue-subtrees/description/
 *
 * algorithms
 * Medium (47.65%)
 * Total Accepted:    33.9K
 * Total Submissions: 71.2K
 * Testcase Example:  '[5,1,5,5,5,null,5]'
 *
 * Given a binary tree, count the number of uni-value subtrees.
 * 
 * A Uni-value subtree means all nodes of the subtree have the same value.
 * 
 * Example :
 * 
 * 
 * Input:  root = [5,1,5,5,5,null,5]
 * 
 * ⁠             5
 * ⁠            / \
 * ⁠           1   5
 * ⁠          / \   \
 * ⁠         5   5   5
 * 
 * Output: 4
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
var countUnivalSubtrees = function(root) {
  if (!root) {
    return 0;
  }

  let res = countUnivalSubtrees(root.left) + countUnivalSubtrees(root.right);

  root.isUnivalueTree =
      (root.left
        ? root.left.isUnivalueTree && root.val === root.left.val
        : true)
      && (root.right
        ? root.right.isUnivalueTree && root.val === root.right.val
        : true);

  return res + root.isUnivalueTree; 
};
