/*
 * @lc app=leetcode id=173 lang=javascript
 *
 * [173] Binary Search Tree Iterator
 *
 * https://leetcode.com/problems/binary-search-tree-iterator/description/
 *
 * algorithms
 * Medium (45.28%)
 * Total Accepted:    166.3K
 * Total Submissions: 367.3K
 * Testcase Example:  '[]'
 *
 * Implement an iterator over a binary search tree (BST). Your iterator will be
 * initialized with the root node of a BST.
 * 
 * Calling next() will return the next smallest number in the BST.
 * 
 * Note: next() and hasNext() should run in average O(1) time and uses O(h)
 * memory, where h is the height of the tree. 
 * 
 * Credits:Special thanks to @ts for adding this problem and creating all test
 * cases.
 */
/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

class BSTIterator {
  /**
   * @constructor
   * @param {TreeNode} root - root of the binary search tree
   */
  constructor(root) {
    this.stack = [];
    
    for (; root; root = root.left) {
      this.stack.push(root);
    }
  }

  /**
   * @this BSTIterator
   * @returns {boolean} - whether we have a next smallest number
   */
  hasNext() {
    return this.stack.length > 0;
  }

  /**
   * @this BSTIterator
   * @returns {number} - the next smallest number
   */
  next() {
    if (!this.hasNext()) {
      return null;
    }

    const res = this.stack.pop();

    for (let node = res.right; node; node = node.left) {
      this.stack.push(node);
    }

    return res.val;
  }
}

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
