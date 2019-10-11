/*
 * @lc app=leetcode id=132 lang=javascript
 *
 * [132] Palindrome Partitioning II
 *
 * https://leetcode.com/problems/palindrome-partitioning-ii/description/
 *
 * algorithms
 * Hard (26.57%)
 * Total Accepted:    96K
 * Total Submissions: 361.2K
 * Testcase Example:  '"aab"'
 *
 * Given a string s, partition s such that every substring of the partition is
 * a palindrome.
 * 
 * Return the minimum cuts needed for a palindrome partitioning of s.
 * 
 * Example:
 * 
 * 
 * Input: "aab"
 * Output: 1
 * Explanation: The palindrome partitioning ["aa","b"] could be produced using
 * 1 cut.
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  if (!s) {
    return 0;
  }

  const isPalindrome = Array(s.length).fill()
      .map(el => Array(s.length).fill(false));

  for (let i = 0; i < s.length; i++) {
    isPalindrome[i][i] = true;
  }

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i + 1] !== s[i]) {
      continue;
    }
    
    isPalindrome[i][i + 1] = true;
  }

  for (let len = 2; len <= s.length; len++) {
    for (let i = 0; i + len < s.length; i++) {
      isPalindrome[i][i + len] = s[i] === s[i + len]
          && isPalindrome[i + 1][i + len - 1];
    }
  }

  const cuts = Array(s.length + 1).fill().map((_, i) => i - 1);

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
        if (!isPalindrome[j][i - 1]) {
            continue;
        }
        
        cuts[i] = Math.min(cuts[i], cuts[j] + 1);
    }
  }

  return cuts[s.length];
};