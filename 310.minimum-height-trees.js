/*
 * @lc app=leetcode id=310 lang=javascript
 *
 * [310] Minimum Height Trees
 *
 * https://leetcode.com/problems/minimum-height-trees/description/
 *
 * algorithms
 * Medium (29.71%)
 * Total Accepted:    59.1K
 * Total Submissions: 199.1K
 * Testcase Example:  '4\n[[1,0],[1,2],[1,3]]'
 *
 * For an undirected graph with tree characteristics, we can choose any node as
 * the root. The result graph is then a rooted tree. Among all possible rooted
 * trees, those with minimum height are called minimum height trees (MHTs).
 * Given such a graph, write a function to find all the MHTs and return a list
 * of their root labels.
 * 
 * Format
 * The graph contains n nodes which are labeled from 0 to n - 1. You will be
 * given the number n and a list of undirected edges (each edge is a pair of
 * labels).
 * 
 * You can assume that no duplicate edges will appear in edges. Since all edges
 * are undirected, [0, 1] is the same as [1, 0] and thus will not appear
 * together in edges.
 * 
 * Example 1 :
 * 
 * 
 * Input: n = 4, edges = [[1, 0], [1, 2], [1, 3]]
 * 
 * ⁠       0
 * ⁠       |
 * ⁠       1
 * ⁠      / \
 * ⁠     2   3 
 * 
 * Output: [1]
 * 
 * 
 * Example 2 :
 * 
 * 
 * Input: n = 6, edges = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]
 * 
 * ⁠    0  1  2
 * ⁠     \ | /
 * ⁠       3
 * ⁠       |
 * ⁠       4
 * ⁠       |
 * ⁠       5 
 * 
 * Output: [3, 4]
 * 
 * Note:
 * 
 * 
 * According to the definition of tree on Wikipedia: “a tree is an undirected
 * graph in which any two vertices are connected by exactly one path. In other
 * words, any connected graph without simple cycles is a tree.”
 * The height of a rooted tree is the number of edges on the longest downward
 * path between the root and a leaf.
 * 
 * 
 */
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  if (n === 1) {
    return [0]; 
  }

  const adj = edges.reduce((map, [a, b]) => {
    !map.has(a) && map.set(a, new Set());
    !map.has(b) && map.set(b, new Set());
    map.get(a).add(b);
    map.get(b).add(a);

    return map;
  }, new Map());
  let leaves = [...adj].filter(([_, v]) => v.size === 1).map(([k]) => k);

  while (n > 2) {
    leaves.forEach(leaf => adj.delete(leaf)); 

    const newLeaves = leaves.reduce((arr, leaf) => {
      for (let [k, v] of adj) {
        if (!v.delete(leaf)) {
          continue;
        }

        v.size === 1 && arr.push(k); 
      }

      return arr;
    }, []);

    n -= leaves.length;
    leaves = newLeaves;
  }
 
  return leaves;
};