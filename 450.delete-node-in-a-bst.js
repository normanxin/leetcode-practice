/*
 * @lc app=leetcode id=450 lang=javascript
 *
 * [450] Delete Node in a BST
 *
 * https://leetcode.com/problems/delete-node-in-a-bst/description/
 *
 * algorithms
 * Medium (40.63%)
 * Total Accepted:    76.1K
 * Total Submissions: 187.4K
 * Testcase Example:  '[5,3,6,2,4,null,7]\n3'
 *
 * Given a root node reference of a BST and a key, delete the node with the
 * given key in the BST. Return the root node reference (possibly updated) of
 * the BST.
 * 
 * Basically, the deletion can be divided into two stages:
 * 
 * Search for a node to remove.
 * If the node is found, delete the node.
 * 
 * 
 * 
 * Note: Time complexity should be O(height of tree).
 * 
 * Example:
 * 
 * root = [5,3,6,2,4,null,7]
 * key = 3
 * 
 * ⁠   5
 * ⁠  / \
 * ⁠ 3   6
 * ⁠/ \   \
 * 2   4   7
 * 
 * Given key to delete is 3. So we find the node with value 3 and delete it.
 * 
 * One valid answer is [5,4,6,2,null,null,7], shown in the following BST.
 * 
 * ⁠   5
 * ⁠  / \
 * ⁠ 4   6
 * ⁠/     \
 * 2       7
 * 
 * Another valid answer is [5,2,6,null,4,null,7].
 * 
 * ⁠   5
 * ⁠  / \
 * ⁠ 2   6
 * ⁠  \   \
 * ⁠   4   7
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
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = (root, key) => {
  let cur = root;
  let pre;

  while (cur && cur.val !== key) {
    pre = cur;
    cur = cur.val > key ? cur.left : cur.right;
  }

  if (!cur) {
    return root;
  }

  if (!pre) {
    return del(cur);
  }

  if (pre.left && pre.left === cur) {
    pre.left = del(cur);
  } else {
    pre.right = del(cur);
  }


  return root;
};

function del(node) {
  const { left, right } = node;

  if (!left && !right) {
    return null;
  }

  if (!left || !right) {
    return left || right;
  }

  let pre = node;
  let cur = node.right;

  while (cur.left) {
    pre = cur;
    cur = cur.left;
  }

  node.val = cur.val;
  pre === node ? (node.right = cur.right) : (pre.left = cur.right);

  return node;
}