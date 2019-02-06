/*
 * @lc app=leetcode id=99 lang=javascript
 *
 * [99] Recover Binary Search Tree
 *
 * https://leetcode.com/problems/recover-binary-search-tree/description/
 *
 * algorithms
 * Hard (33.63%)
 * Total Accepted:    109.2K
 * Total Submissions: 324.8K
 * Testcase Example:  '[1,3,null,null,2]'
 *
 * Two elements of a binary search tree (BST) are swapped by mistake.
 * 
 * Recover the tree without changing its structure.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,3,null,null,2]
 * 
 * 1
 * /
 * 3
 * \
 * 2
 * 
 * Output: [3,1,null,null,2]
 * 
 * 3
 * /
 * 1
 * \
 * 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,1,4,null,null,2]
 * 
 * ⁠ 3
 * ⁠/ \
 * 1   4
 * /
 * 2
 * 
 * Output: [2,1,4,null,null,3]
 * 
 * ⁠ 2
 * ⁠/ \
 * 1   4
 * /
 * ⁠ 3
 * 
 * 
 * Follow up:
 * 
 * 
 * A solution using O(n) space is pretty straight forward.
 * Could you devise a constant space solution?
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  let first;
  let second;
  let parent;
  
  for (let cur = root, pre = null; cur;) {
    if (!cur.left) {
      if (parent && parent.val > cur.val) {
        !first && (first = parent);
        second = cur;
      }

      parent = cur;
      cur = cur.right;
    } else {
      pre = cur.left;

      while (pre.right && pre.right !== cur) {
        pre = pre.right;
      }

      if (!pre.right) {
        pre.right = cur;
        cur = cur.left;
      } else {
        pre.right = null;

        if (parent.val > cur.val) {
          !first && (first = parent);
          second = cur;
        }

        parent = cur;
        cur = cur.right;
      }
    }
  }

  [first.val, second.val] = [second.val, first.val];
};
