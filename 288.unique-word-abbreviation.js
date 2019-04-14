/*
 * @lc app=leetcode id=288 lang=javascript
 *
 * [288] Unique Word Abbreviation
 *
 * https://leetcode.com/problems/unique-word-abbreviation/description/
 *
 * algorithms
 * Medium (19.77%)
 * Total Accepted:    40.7K
 * Total Submissions: 205.8K
 * Testcase Example:  '["ValidWordAbbr","isUnique","isUnique","isUnique","isUnique"]\n[[["deer","door","cake","card"]],["dear"],["cart"],["cane"],["make"]]'
 *
 * An abbreviation of a word follows the form <first letter><number><last
 * letter>. Below are some examples of word abbreviations:
 * 
 * 
 * a) it                      --> it    (no abbreviation)
 * 
 * ⁠    1
 * ⁠    ↓
 * b) d|o|g                   --> d1g
 * 
 * ⁠             1    1  1
 * ⁠    1---5----0----5--8
 * ⁠    ↓   ↓    ↓    ↓  ↓    
 * c) i|nternationalizatio|n  --> i18n
 * 
 * ⁠             1
 * ⁠    1---5----0
 * ↓   ↓    ↓
 * d) l|ocalizatio|n          --> l10n
 * 
 * 
 * Assume you have a dictionary and given a word, find whether its abbreviation
 * is unique in the dictionary. A word's abbreviation is unique if no other
 * word from the dictionary has the same abbreviation.
 * 
 * Example:
 * 
 * 
 * Given dictionary = [ "deer", "door", "cake", "card" ]
 * 
 * isUnique("dear") -> false
 * isUnique("cart") -> true
 * isUnique("cane") -> false
 * isUnique("make") -> true
 * 
 * 
 */
class ValidWordAbbr {
  /**
   * @param {string[]} dictionary
   */
  constructor(dictionary) {
    this.dictionary = new Set(dictionary);
    this.abbr = [...this.dictionary].reduce((map, word) => {
      const abbr = this.getAbbr(word);

      !map.has(abbr) && map.set(abbr, 0);

      return map.set(abbr, map.get(abbr) + 1);
    }, new Map());
  }

  /** 
   * @param {string} word
   * @return {boolean}
   */
  isUnique(word) {
    const abbr = this.getAbbr(word);

    return !this.abbr.has(abbr)
      || (this.dictionary.has(word) && this.abbr.get(abbr) === 1);
  }

  getAbbr(word) {
    if (word.length < 3) {
      return word;
    }

    return `${word[0]}${word.substring(1, word.length - 1).length}${word[word.length - 1]}`;
  }
}

/** 
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = new ValidWordAbbr(dictionary)
 * var param_1 = obj.isUnique(word)
 */