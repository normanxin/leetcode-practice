/*
 * @lc app=leetcode id=95 lang=javascript
 *
 * [95] Unique Binary Search Trees II
 *
 * https://leetcode.com/problems/unique-binary-search-trees-ii/description/
 *
 * algorithms
 * Medium (33.86%)
 * Total Accepted:    119.6K
 * Total Submissions: 353.3K
 * Testcase Example:  '3'
 *
 * Given an integer n, generate all structurally unique BST's (binary search
 * trees) that store values 1 ... n.
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output:
 * [
 * [1,null,3,2],
 * [3,2,null,1],
 * [3,1,null,null,2],
 * [2,1,3],
 * [1,null,2,null,3]
 * ]
 * Explanation:
 * The above output corresponds to the 5 unique BST's shown below:
 * 
 * ⁠  1         3     3      2      1
 * ⁠   \       /     /      / \      \
 * ⁠    3     2     1      1   3      2
 * ⁠   /     /       \                 \
 * ⁠  2     1         2                 3
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n, m = 1) {
  const res = [];

  if (n < m) {
    return res;
  }

  for (let i = m; i <= n; i++) {
    const ls = generateTrees(i - 1, m);
    const rs = generateTrees(n, i + 1);

    !ls.length && ls.push(null);
    !rs.length && rs.push(null);

    for (let l of ls) {
      for (let r of rs) {
        const root = new TreeNode(i);

        root.left = l;
        root.right = r;
        res.push(root);
      }
    }
  }

  return res;
};