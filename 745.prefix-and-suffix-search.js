/*
 * @lc app=leetcode id=745 lang=javascript
 *
 * [745] Prefix and Suffix Search
 *
 * https://leetcode.com/problems/prefix-and-suffix-search/description/
 *
 * algorithms
 * Hard (28.36%)
 * Total Accepted:    9.9K
 * Total Submissions: 35K
 * Testcase Example:  '["WordFilter","f"]\n[[["apple"]], ["a","e"]]'
 *
 * 
 * Given many words, words[i] has weight i.
 * 
 * Design a class WordFilter that supports one function, WordFilter.f(String
 * prefix, String suffix).
 * It will return the word with given prefix and suffix with maximum weight.
 * If no word exists, return -1.
 * 
 * 
 * Examples:
 * 
 * Input:
 * WordFilter(["apple"])
 * WordFilter.f("a", "e") // returns 0
 * WordFilter.f("b", "") // returns -1
 * 
 * 
 * Note:
 * 
 * words has length in range [1, 15000].
 * For each test case, up to words.length queries WordFilter.f may be made.
 * words[i] has length in range [1, 10].
 * prefix, suffix have lengths in range [0, 10].
 * words[i] and prefix, suffix queries consist of lowercase letters only.
 * 
 * 
 */
class WordFilter {
  /**
   * @param {string[]} words
   */
  constructor(words) {
    this.map = words.reduce((map, word, i) => {
      for (let pi = 0; pi <= word.length; pi++) {
        for (let fi = 0; fi <= word.length; fi++) {
          map.set(`${word.substring(0, pi)}#${word.substring(fi)}`, i);
        }
      }

      return map;
    }, new Map());
  }

  /** 
   * @param {string} prefix 
   * @param {string} suffix
   * @return {number}
   */
  f(prefix, suffix) {
    const res = this.map.get(`${prefix}#${suffix}`);

    return res !== undefined ? res : -1;
  }
}

/** 
 * Your WordFilter object will be instantiated and called as such:
 * var obj = Object.create(WordFilter).createNew(words)
 * var param_1 = obj.f(prefix,suffix)
 */
