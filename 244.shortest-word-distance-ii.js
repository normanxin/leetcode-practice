/*
 * @lc app=leetcode id=244 lang=javascript
 *
 * [244] Shortest Word Distance II
 *
 * https://leetcode.com/problems/shortest-word-distance-ii/description/
 *
 * algorithms
 * Medium (46.58%)
 * Total Accepted:    45.7K
 * Total Submissions: 98K
 * Testcase Example:  '["WordDistance","shortest","shortest"]\n[[["practice","makes","perfect","coding","makes"]],["coding","practice"],["makes","coding"]]'
 *
 * Design a class which receives a list of words in the constructor, and
 * implements a method that takes two words word1 and word2 and return the
 * shortest distance between these two words in the list. Your method will be
 * called repeatedly many times with different parameters. 
 * 
 * Example:
 * Assume that words = ["practice", "makes", "perfect", "coding", "makes"].
 * 
 * 
 * Input: word1 = “coding”, word2 = “practice”
 * Output: 3
 * 
 * 
 * 
 * Input: word1 = "makes", word2 = "coding"
 * Output: 1
 * 
 * Note:
 * You may assume that word1 does not equal to word2, and word1 and word2 are
 * both in the list.
 * 
 */
class WordDistance {
  /**
   * @param {string[]} words
   */
  constructor(words) {
    this.map = words.reduce((map, word, i) => {
      !map.has(word) && map.set(word, []);
      map.get(word).push(i);

      return map;
    }, new Map());
  }

  /** 
   * @param {string} word1 
   * @param {string} word2
   * @return {number}
   */
  shortest(word1, word2) {
    const indice1 = this.map.get(word1);
    const indice2 = this.map.get(word2);
    let res = Infinity;

    for (let i1 = 0, i2 = 0; i1 < indice1.length && i2 < indice2.length;) {
      const diff = indice1[i1] - indice2[i2];

      res = Math.min(res, Math.abs(diff));
      diff < 0 ? i1++ : i2++;
    }

    return res;
  }
} 

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(words)
 * var param_1 = obj.shortest(word1,word2)
 */
