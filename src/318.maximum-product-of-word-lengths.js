/*
 * [318] Maximum Product of Word Lengths
 *
 * https://leetcode.com/problems/maximum-product-of-word-lengths/description/
 *
 * algorithms
 * Medium (46.81%)
 * Total Accepted:    70K
 * Total Submissions: 149.6K
 * Testcase Example:  '["abcw","baz","foo","bar","xtfn","abcdef"]'
 *
 * Given a string array words, find the maximum value of length(word[i]) *
 * length(word[j]) where the two words do not share common letters. You may
 * assume that each word will contain only lower case letters. If no such two
 * words exist, return 0.
 * 
 * Example 1:
 * 
 * 
 * Input: ["abcw","baz","foo","bar","xtfn","abcdef"]
 * Output: 16 
 * Explanation: The two words can be "abcw", "xtfn".
 * 
 * Example 2:
 * 
 * 
 * Input: ["a","ab","abc","d","cd","bcd","abcd"]
 * Output: 4 
 * Explanation: The two words can be "ab", "cd".
 * 
 * Example 3:
 * 
 * 
 * Input: ["a","aa","aaa","aaaa"]
 * Output: 0 
 * Explanation: No such pair of words.
 * 
 */
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  const masks = [...words].fill(0);
  let res = 0;

  for (let i = 0; i < words.length; i++) {
    for (let ch of words[i]) {
      masks[i] |= 1 << (ch.charCodeAt() - 'a'.charCodeAt()); 
    }

    for (let j = 0; j < i; j++) {
      if (masks[i] & masks[j]) {
        continue;
      }

      res = Math.max(res, words[i].length * words[j].length);
    }
  }

  return res;
};
