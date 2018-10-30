/*
 * [873] Guess the Word
 *
 * https://leetcode.com/problems/guess-the-word/description/
 *
 * algorithms
 * Hard (38.35%)
 * Total Accepted:    7.4K
 * Total Submissions: 19.3K
 * Testcase Example:  '"acckzz"\n["acckzz","ccbazz","eiowzz","abcczz"]\n10'
 *
 * This problem is an interactive problem new to the LeetCode platform.
 * 
 * We are given a word list of unique words, each word is 6 letters long, and
 * one word in this list is chosen as secret.
 * 
 * You may call master.guess(word) to guess a word.  The guessed word should
 * have type string and must be from the original list with 6 lowercase
 * letters.
 * 
 * This function returns an integer type, representing the number of exact
 * matches (value and position) of your guess to the secret word.  Also, if
 * your guess is not in the given wordlist, it will return -1 instead.
 * 
 * For each test case, you have 10 guesses to guess the word. At the end of any
 * number of calls, if you have made 10 or less calls to master.guess and at
 * least one of these guesses was the secret, you pass the testcase.
 * 
 * Besides the example test case below, there will be 5 additional test cases,
 * each with 100 words in the word list.  The letters of each word in those
 * testcases were chosen independently at random from 'a' to 'z', such that
 * every word in the given word lists is unique.
 * 
 * 
 * Example 1:
 * Input: secret = "acckzz", wordlist = ["acckzz","ccbazz","eiowzz","abcczz"]
 * 
 * Explanation:
 * 
 * master.guess("aaaaaa") returns -1, because "aaaaaa" is not in wordlist.
 * master.guess("acckzz") returns 6, because "acckzz" is secret and has all 6
 * matches.
 * master.guess("ccbazz") returns 3, because "ccbazz" has 3 matches.
 * master.guess("eiowzz") returns 2, because "eiowzz" has 2 matches.
 * master.guess("abcczz") returns 4, because "abcczz" has 4 matches.
 * 
 * We made 5 calls to master.guess and one of them was the secret, so we pass
 * the test case.
 * 
 * 
 * Note:  Any solutions that attempt to circumvent the judge will result in
 * disqualification.
 * 
 */
/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
const findSecretWord = (wordlist, master) => {
  for (let i = 0; i < 10; i++) {
    const typical = findTypical(wordlist);
    const guess = master.guess(typical);

    if (guess === 6) {
      return;
    }

    wordlist = wordlist.filter(word => diff(typical, word) === 6 - guess);
  }
};

function findTypical(wordlist) {
  let maxPos = 0;
  let maxCnt = 0;
  let maxCh;
  
  const counts = wordlist.reduce((arr, word) => {
    for (let i = 0; i < 6; i++) {
      !arr[i].has(word[i]) && arr[i].set(word[i], 0);
      arr[i].set(word[i], arr[i].get(word[i]) + 1);
    }

    return arr;
  }, Array(6).fill().map(el => new Map()));

  for (let i = 0; i < 6; i++) {
    for (let [ch, cnt] of counts[i]) {
      if (cnt <= maxCnt) {
        continue;
      }

      maxPos = i;
      maxCnt = cnt;
      maxCh = ch;
    }
  }

  return wordlist.find(word => word[maxPos] === maxCh);
}

function diff(a, b) {
  let res = 0;

  for (let i = 0; i < 6; i++) {
    if (a[i] === b[i]) {
      continue;
    }

    res++;
  }

  return res;
}