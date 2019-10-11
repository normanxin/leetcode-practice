/*
 * @lc app=leetcode id=140 lang=javascript
 *
 * [140] Word Break II
 *
 * https://leetcode.com/problems/word-break-ii/description/
 *
 * algorithms
 * Hard (26.43%)
 * Total Accepted:    144.1K
 * Total Submissions: 545.1K
 * Testcase Example:  '"catsanddog"\n["cat","cats","and","sand","dog"]'
 *
 * Given a non-empty string s and a dictionary wordDict containing a list of
 * non-empty words, add spaces in s to construct a sentence where each word is
 * a valid dictionary word. Return all such possible sentences.
 * 
 * Note:
 * 
 * 
 * The same word in the dictionary may be reused multiple times in the
 * segmentation.
 * You may assume the dictionary does not contain duplicate words.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input:
 * s = "catsanddog"
 * wordDict = ["cat", "cats", "and", "sand", "dog"]
 * Output:
 * [
 * "cats and dog",
 * "cat sand dog"
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * s = "pineapplepenapple"
 * wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
 * Output:
 * [
 * "pine apple pen apple",
 * "pineapple pen apple",
 * "pine applepen apple"
 * ]
 * Explanation: Note that you are allowed to reuse a dictionary word.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input:
 * s = "catsandog"
 * wordDict = ["cats", "dog", "sand", "and", "cat"]
 * Output:
 * []
 * 
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  const res = [];
  const isWord = Array(s.length).fill().map(row => []);
  
  for (let lo = 0; s[lo]; lo++) {
    for (let hi = lo; s[hi]; hi++) {
      isWord[lo][hi] = wordDict.includes(s.substring(lo, hi + 1));
    }
  }
  
  const possible = [];
  
  possible[s.length] = true;
  
  for (let i = s.length - 1; s[i]; i--) {
    for (let j = i; s[j]; j++) {
      if (isWord[i][j] && possible[j + 1]) {
        possible[i] = true;
        break;
      }
    }
  }
  
  helper(s, res, isWord, possible);
  
  return res;
};

function helper(s, res, isWord, possible, path = [], idx = 0) {
  if (!possible[idx]) {
    return;
  }
  
  if (idx === s.length) {
    res.push(path.join(' '));

    return;
  }
  
  for (let i = idx; s[i]; i++) {
    if (!isWord[idx][i]) {
      continue;
    }
      
    path.push(s.substring(idx, i + 1));
    helper(s, res, isWord, possible, path, i + 1);
    path.pop();
  }
}