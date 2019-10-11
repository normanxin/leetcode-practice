/*
 * [208] Implement Trie (Prefix Tree)
 *
 * https://leetcode.com/problems/implement-trie-prefix-tree/description/
 *
 * algorithms
 * Medium (34.12%)
 * Total Accepted:    138.8K
 * Total Submissions: 406.8K
 * Testcase Example:  '["Trie","insert","search","search","startsWith","insert","search"]\n[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]'
 *
 * Implement a trie with insert, search, and startsWith methods.
 * 
 * Example:
 * 
 * 
 * Trie trie = new Trie();
 * 
 * trie.insert("apple");
 * trie.search("apple");   // returns true
 * trie.search("app");     // returns false
 * trie.startsWith("app"); // returns true
 * trie.insert("app");   
 * trie.search("app");     // returns true
 * 
 * 
 * Note:
 * 
 * 
 * You may assume that all inputs are consist of lowercase letters a-z.
 * All inputs are guaranteed to be non-empty strings.
 * 
 * 
 */
class Trie {
  /**
   * Initialize your data structure here.
   */
  constructor() {
    this.root = {children: new Map()};
  }

  /**
   * Inserts a word into the trie. 
   * @param {string} word
   * @return {void}
   */
  insert(word, root = this.root, index = 0) {
    if (index === word.length) {
      root.isEnd = true;

      return;
    }

    !root.children.has(word[index]) && root.children.set(word[index], {children: new Map()});
    this.insert(word, root.children.get(word[index]), index + 1);
  }

  /**
   * Returns if the word is in the trie. 
   * @param {string} word
   * @return {boolean}
   */
  search(word, root = this.root, index = 0) {
    if (index === word.length) {
      return !!root.isEnd;
    }

    if (!root.children.has(word[index])) {
      return false;
    }

    return this.search(word, root.children.get(word[index]), index + 1);
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix. 
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix, root = this.root, index = 0) {
    if (index === prefix.length) {
      return true;
    }

    if (!root.children.has(prefix[index])) {
      return false;
    }
  
    return this.startsWith(prefix, root.children.get(prefix[index]), index + 1);
  }
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */