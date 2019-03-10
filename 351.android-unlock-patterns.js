/*
 * @lc app=leetcode id=351 lang=javascript
 *
 * [351] Android Unlock Patterns
 *
 * https://leetcode.com/problems/android-unlock-patterns/description/
 *
 * algorithms
 * Medium (45.45%)
 * Total Accepted:    27.3K
 * Total Submissions: 60.1K
 * Testcase Example:  '1\n1'
 *
 * Given an Android 3x3 key lock screen and two integers m and n, where 1 ≤ m ≤
 * n ≤ 9, count the total number of unlock patterns of the Android lock screen,
 * which consist of minimum of m keys and maximum n keys.
 * 
 * 
 * 
 * Rules for a valid pattern:
 * 
 * 
 * Each pattern must connect at least m keys and at most n keys.
 * All the keys must be distinct.
 * If the line connecting two consecutive keys in the pattern passes through
 * any other keys, the other keys must have previously selected in the pattern.
 * No jumps through non selected key is allowed.
 * The order of keys used matters.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Explanation:
 * 
 * 
 * | 1 | 2 | 3 |
 * | 4 | 5 | 6 |
 * | 7 | 8 | 9 |
 * 
 * Invalid move: 4 - 1 - 3 - 6 
 * Line 1 - 3 passes through key 2 which had not been selected in the pattern.
 * 
 * Invalid move: 4 - 1 - 9 - 2
 * Line 1 - 9 passes through key 5 which had not been selected in the pattern.
 * 
 * Valid move: 2 - 4 - 1 - 3 - 6
 * Line 1 - 3 is valid because it passes through key 2, which had been selected
 * in the pattern
 * 
 * Valid move: 6 - 5 - 4 - 1 - 9 - 2
 * Line 1 - 9 is valid because it passes through key 5, which had been selected
 * in the pattern.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * 
 * Input: m = 1, n = 1
 * Output: 9
 * 
 * 
 * 
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var numberOfPatterns = function(m, n, res = {cnt: 0}, path = new Set()) {
  if (path.size > n) {
    return res.cnt;
  }

  if (path.size >= m && path.size <= n) {
    res.cnt++;
  }

  for (let i = 1; i <= 9; i++) {
    if (!validate(i, path)) {
      continue;
    }

    path.add(i);
    numberOfPatterns(m, n, res, path); 
    path.delete(i);
  }

  return res.cnt;
};

function validate(cur, path) {
  if (!path.size) {
    return true;
  }

  if (path.has(cur)) {
    return false;
  }

  const gaps = new Set([
    '1,3',
    '1,7',
    '1,9',
    '2,8',
    '3,1',
    '3,7',
    '3,9',
    '4,6',
    '6,4',
    '7,1',
    '7,3',
    '7,9',
    '8,2',
    '9,1',
    '9,3',
    '9,7',
  ]);
  
  const pre = [...path][path.size - 1];

  if (!gaps.has([pre, cur].join())) {
    return true;
  }

  return path.has((pre + cur) / 2);
}
