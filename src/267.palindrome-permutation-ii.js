/*
 * [267] Palindrome Permutation II
 *
 * https://leetcode.com/problems/palindrome-permutation-ii/description/
 *
 * algorithms
 * Medium (32.91%)
 * Total Accepted:    22.8K
 * Total Submissions: 69.3K
 * Testcase Example:  '"aabb"'
 *
 * Given a string s, return all the palindromic permutations (without
 * duplicates) of it. Return an empty list if no palindromic permutation could
 * be form.
 * 
 * Example 1:
 * 
 * 
 * Input: "aabb"
 * Output: ["abba", "baab"]
 * 
 * Example 2:
 * 
 * 
 * Input: "abc"
 * Output: []
 * 
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function(s) {
  const map = [...s].reduce((map, c) => {
    !map.has(c) && map.set(c, 0);
    map.set(c, map.get(c) + 1);

    return map;
  }, new Map());
  const res = new Set();
  const half = [];
  let mid = '';
  
  for (let [k, v] of map) {
    if (v === s.length) {
      return [...res.add(s)];
    }

    if (v % 2 === 1 && mid) {
      return [...res];
    }

    if (v % 2 === 1) {
      mid = k;
    }
    
    half.push(...Array(Math.floor(v / 2)).fill(k));
  }

  return helper(half, res, mid);
};

function helper(half, res, mid, idx = 0) {
  if (idx >= half.length) {
    const left = half.join('');
    const right = left.split('').reverse().join('');

    res.add(`${left}${mid}${right}`);
  
    return [...res];
  }

  for (let i = idx; i < half.length; i++) {
    [half[idx], half[i]] = [half[i], half[idx]];
    helper(half, res, mid, idx + 1);
    [half[idx], half[i]] = [half[i], half[idx]]; 
  }

  return [...res];
}