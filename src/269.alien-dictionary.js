/*
 * @lc app=leetcode id=269 lang=javascript
 *
 * [269] Alien Dictionary
 *
 * https://leetcode.com/problems/alien-dictionary/description/
 *
 * algorithms
 * Hard (30.03%)
 * Total Accepted:    67.6K
 * Total Submissions: 225.3K
 * Testcase Example:  '["wrt","wrf","er","ett","rftt"]'
 *
 * There is a new alien language which uses the latin alphabet. However, the
 * order among letters are unknown to you. You receive a list of non-empty
 * words from the dictionary, where words are sorted lexicographically by the
 * rules of this new language. Derive the order of letters in this language.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * [
 * ⁠ "wrt",
 * ⁠ "wrf",
 * ⁠ "er",
 * ⁠ "ett",
 * ⁠ "rftt"
 * ]
 * 
 * Output: "wertf"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * [
 * ⁠ "z",
 * ⁠ "x"
 * ]
 * 
 * Output: "zx"
 * 
 * 
 * Example 3:
 * 
 * 
 * Input:
 * [
 * ⁠ "z",
 * ⁠ "x",
 * ⁠ "z"
 * ] 
 * 
 * Output: "" 
 * 
 * Explanation: The order is invalid, so return "".
 * 
 * 
 * Note:
 * 
 * 
 * You may assume all letters are in lowercase.
 * You may assume that if a is a prefix of b, then a must appear before b in
 * the given dictionary.
 * If the order is invalid, return an empty string.
 * There may be multiple valid order of letters, return any one of them is
 * fine.
 * 
 * 
 */
/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
  let res = '';
  
  if (!words || !words.length) {
    return res;
  }

  const map = [...words[0]]
      .reduce((map, ch) => map.set(ch, new Set()), new Map());

  for (let i = 1; i < words.length; i++) {
    for (let j = 0, firstDiff = true; j < words[i].length; j++) {
      if (words[i - 1][j] === words[i][j]) {
        continue;
      }

      !map.has(words[i][j]) && map.set(words[i][j], new Set());

      if (firstDiff) {
        words[i - 1][j] && map.get(words[i][j]).add(words[i - 1][j]);
        firstDiff = false;
      }
    }
  }

  const queue = [];

  for (let [k, v] of map) {
    if (v.size > 0) {
      continue;
    }

    queue.push(k);
    map.delete(k);
  }

  while (queue.length) {
    const cur = queue.shift();

    res += cur;

    for (let [k, v] of map) {
      if (!v.delete(cur)) {
        continue;
      }

      if (v.size === 0) {
        map.delete(k);
        queue.push(k);
      }
    }
  }

  return !map.size ? res : '';
};