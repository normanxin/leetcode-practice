/*
 * [212] Word Search II
 *
 * https://leetcode.com/problems/word-search-ii/description/
 *
 * algorithms
 * Hard (26.67%)
 * Total Accepted:    88.5K
 * Total Submissions: 331.9K
 * Testcase Example:  '[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]\n["oath","pea","eat","rain"]'
 *
 * Given a 2D board and a list of words from the dictionary, find all words in
 * the board.
 * 
 * Each word must be constructed from letters of sequentially adjacent cell,
 * where "adjacent" cells are those horizontally or vertically neighboring. The
 * same letter cell may not be used more than once in a word.
 * 
 * Example:
 * 
 * 
 * Input: 
 * words = ["oath","pea","eat","rain"] and board =
 * [
 * ⁠ ['o','a','a','n'],
 * ⁠ ['e','t','a','e'],
 * ⁠ ['i','h','k','r'],
 * ⁠ ['i','f','l','v']
 * ]
 * 
 * Output: ["eat","oath"]
 * 
 * 
 * Note:
 * You may assume that all inputs are consist of lowercase letters a-z.
 */
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  const trie = words.reduce((trie, word) => {
    trie.insert(word);

    return trie;
  }, new Trie());

  const res = new Set();

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      dfs(board, trie, res, [x, y]);
    }
  }

  return [...res];
};

function dfs(board, trie, res, [x, y], path = [], visited = board.map(row => [])) {
  const candidate = path.join('');

  if (trie.search(candidate)) {
    res.add(candidate);
  }

  if (x < 0 || x >= board.length
    || y < 0 || y >= board[0].length
    || (candidate && !trie.startsWith(candidate))
    || visited[x][y]) {
    return res;    
  }

  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  path.push(board[x][y]);
  visited[x][y] = true;

  for (let [dx, dy] of dirs) {
    dfs(board, trie, res, [x + dx, y + dy], path, visited);
  }

  visited[x][y] = false;
  path.pop();

  return res;
}

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