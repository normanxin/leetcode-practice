/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 *
 * https://leetcode.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (28.49%)
 * Total Accepted:    221.1K
 * Total Submissions: 776K
 * Testcase Example:  '10'
 *
 * Count the number of prime numbers less than a non-negative number, n.
 * 
 * Example:
 * 
 * 
 * Input: 10
 * Output: 4
 * Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  const prime = Array(n).fill(true);
  let res = 0;

  for (let i = 2; i < n; i++) {
    if (!prime[i]) {
      continue;
    }

    res++;

    for (let j = 2; i * j < n; j++) {
      prime[i * j] = false;
    }
  }

  return res;
};
