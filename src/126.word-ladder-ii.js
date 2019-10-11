/*
 * @lc app=leetcode id=126 lang=javascript
 *
 * [126] Word Ladder II
 *
 * https://leetcode.com/problems/word-ladder-ii/description/
 *
 * algorithms
 * Hard (16.75%)
 * Total Accepted:    107.6K
 * Total Submissions: 642.1K
 * Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
 *
 * Given two words (beginWord and endWord), and a dictionary's word list, find
 * all shortest transformation sequence(s) from beginWord to endWord, such
 * that:
 * 
 * 
 * Only one letter can be changed at a time
 * Each transformed word must exist in the word list. Note that beginWord is
 * not a transformed word.
 * 
 * 
 * Note:
 * 
 * 
 * Return an empty list if there is no such transformation sequence.
 * All words have the same length.
 * All words contain only lowercase alphabetic characters.
 * You may assume no duplicates in the word list.
 * You may assume beginWord and endWord are non-empty and are not the same.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input:
 * beginWord = "hit",
 * endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"]
 * 
 * Output:
 * [
 * ⁠ ["hit","hot","dot","dog","cog"],
 * ["hit","hot","lot","log","cog"]
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 * 
 * Output: []
 * 
 * Explanation: The endWord "cog" is not in wordList, therefore no possible
 * transformation.
 * 
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  const paths = new Map().set(beginWord, [[beginWord]]);

  wordList = new Set(wordList);

  for (let queue = [beginWord]; queue.length;) {
    const next = [];
  
    for (let word of queue) {
      for (let i = 0; word[i]; i++) {
        const wArr = [...word];

        for (let j = 'a'.charCodeAt(); j <= 'z'.charCodeAt(); j++) {
          const ch = String.fromCharCode(j);

          wArr[i] = ch;

          const candidate = wArr.join('');
          const isShortest = paths.has(candidate) &&
              paths.get(candidate)[0].length < paths.get(word)[0].length + 1;

          if (!wordList.has(candidate) || candidate === word || isShortest) {
            continue;
          }

          if (!paths.has(candidate)) {
            paths.set(candidate, []);
            next.push(candidate); 
          } 
  
          for (let path of paths.get(word)) {
            paths.get(candidate).push([...path, candidate]);
          }
        }
      }
    }

    queue = next;
  }

  return paths.get(endWord) || [];
};