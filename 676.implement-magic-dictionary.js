/*
 * [676] Implement Magic Dictionary
 *
 * https://leetcode.com/problems/implement-magic-dictionary/description/
 *
 * algorithms
 * Medium (49.72%)
 * Total Accepted:    18.8K
 * Total Submissions: 37.8K
 * Testcase Example:  '["MagicDictionary", "buildDict", "search", "search", "search", "search"]\n[[], [["hello","leetcode"]], ["hello"], ["hhllo"], ["hell"], ["leetcoded"]]'
 *
 * 
 * Implement a magic directory with buildDict, and search methods.
 * 
 * 
 * 
 * For the method buildDict, you'll be given a list of non-repetitive words to
 * build a dictionary.
 * 
 * 
 * 
 * For the method search, you'll be given a word, and judge whether if you
 * modify exactly one character into another character in this word, the
 * modified word is in the dictionary you just built.
 * 
 * 
 * Example 1:
 * 
 * Input: buildDict(["hello", "leetcode"]), Output: Null
 * Input: search("hello"), Output: False
 * Input: search("hhllo"), Output: True
 * Input: search("hell"), Output: False
 * Input: search("leetcoded"), Output: False
 * 
 * 
 * 
 * Note:
 * 
 * You may assume that all the inputs are consist of lowercase letters a-z.
 * For contest purpose, the test data is rather small by now. You could think
 * about highly efficient algorithm after the contest.
 * Please remember to RESET your class variables declared in class
 * MagicDictionary, as static/class variables are persisted across multiple
 * test cases. Please see here for more details.
 * 
 * 
 */
class MagicDictionary {
  /**
   * Initialize your data structure here.
   */
  MagicDictionary() {
    this.set = new Set();
  }

  /**
   * Build a dictionary through a list of words 
   * @param {string[]} dict
   * @return {void}
   */
  buildDict(dict) {
    this.set = new Set(dict);
  }

  /**
   * Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    word = word.split('');

    for (let i = 0; word[i]; i++) {
      const orig = word[i];

      for (let c = 'a'.charCodeAt(); c <= 'z'.charCodeAt(); c++) {
        const ch = String.fromCharCode(c);

        if (ch === orig) {
          continue;
        }

        word[i] = ch;

        if (this.set.has(word.join(''))) {
          return true;
        }
      }

      word[i] = orig;
    }

    return false;
  }
} 

const m = new MagicDictionary();
m.buildDict(["hello","leetcode"]);
m.search('hhllo'); 


/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = Object.create(MagicDictionary).createNew()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */
