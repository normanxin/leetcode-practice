/*
 * @lc app=leetcode id=211 lang=javascript
 *
 * [211] Add and Search Word - Data structure design
 *
 * https://leetcode.com/problems/add-and-search-word-data-structure-design/description/
 *
 * algorithms
 * Medium (29.15%)
 * Total Accepted:    104.8K
 * Total Submissions: 359.4K
 * Testcase Example:  '["WordDictionary","addWord","addWord","addWord","search","search","search","search"]\n[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]'
 *
 * Design a data structure that supports the following two operations:
 * 
 * 
 * void addWord(word)
 * bool search(word)
 * 
 * 
 * search(word) can search a literal word or a regular expression string
 * containing only letters a-z or .. A . means it can represent any one
 * letter.
 * 
 * Example:
 * 
 * 
 * addWord("bad")
 * addWord("dad")
 * addWord("mad")
 * search("pad") -> false
 * search("bad") -> true
 * search(".ad") -> true
 * search("b..") -> true
 * 
 * 
 * Note:
 * You may assume that all words are consist of lowercase letters a-z.
 * 
 */
class WordDictionary {
  /**
   * Initialize your data structure here.
   */
  constructor() {
    this.root = {children: new Map()};
  }

  /**
   * Adds a word into the data structure. 
   * @param {string} word
   * @return {void}
   */
  addWord(word, root = this.root, index = 0) {
    if (index === word.length) {
      root.isEnd = true;
  
      return;
    }

    !root.children.has(word[index])
        && root.children.set(word[index], {children: new Map()});
    this.addWord(word, root.children.get(word[index]), index + 1);
  }

  /**
   * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
   * @param {string} word
   * @return {boolean}
   */
  search(word, root = this.root, index = 0) {
    if (index === word.length) {
      return !!root.isEnd;
    }

    if (word[index] !== '.' && !root.children.has(word[index])) {
      return false; 
    }
    
    return word[index] === '.'
        ? [...root.children.values()]
            .some(v => this.search(word, v, index + 1))
        : this.search(word, root.children.get(word[index]), index + 1);
  }
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
