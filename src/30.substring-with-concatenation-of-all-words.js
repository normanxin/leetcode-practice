/*
 * @lc app=leetcode id=30 lang=javascript
 *
 * [30] Substring with Concatenation of All Words
 *
 * https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/
 *
 * algorithms
 * Hard (22.86%)
 * Total Accepted:    118.7K
 * Total Submissions: 519K
 * Testcase Example:  '"barfoothefoobarman"\n["foo","bar"]'
 *
 * You are given a string, s, and a list of words, words, that are all of the
 * same length. Find all starting indices of substring(s) in s that is a
 * concatenation of each word in words exactly once and without any intervening
 * characters.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * ⁠ s = "barfoothefoobarman",
 * ⁠ words = ["foo","bar"]
 * Output: [0,9]
 * Explanation: Substrings starting at index 0 and 9 are "barfoor" and "foobar"
 * respectively.
 * The output order does not matter, returning [9,0] is fine too.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * ⁠ s = "wordgoodgoodgoodbestword",
 * ⁠ words = ["word","good","best","word"]
 * Output: []
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  const res = [];

  if (!words.length) {
    return res;
  }

  const map = words.reduce((map, word) => {
    !map.has(word) && map.set(word, 0);
    map.set(word, map.get(word) + 1);

    return map;
  }, new Map());

  for (let i = 0; i < words[0].length; i++) {
    for (let l = i, r = i, cnt = 0, mapCopy = new Map(map); s[l];) {
      while (cnt < words.length && s[r]) {
        const word = s.substr(r, words[0].length);

        r += words[0].length;

        if (!mapCopy.has(word)) {
          l = r;
          cnt = 0;
          mapCopy = new Map(map);
          break;
        }

        mapCopy.get(word) > 0 && cnt++;
        mapCopy.set(word, mapCopy.get(word) - 1);
        
        if (mapCopy.get(word) < 0) {
          break;
        }
      }
      
      cnt === words.length && res.push(l);
      
      if (l === r) {
        continue;
      }

      for (let t = l; [...mapCopy].some(([_, v]) => v < 0) || t === l;) {
        const word = s.substr(l, words[0].length);

        mapCopy.get(word) >= 0 && cnt--;
        mapCopy.set(word, mapCopy.get(word) + 1);
        l += words[0].length;
      }
    }
  }

  return res;
};