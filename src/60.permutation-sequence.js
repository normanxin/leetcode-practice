/*
 * [60] Permutation Sequence
 *
 * https://leetcode.com/problems/permutation-sequence/description/
 *
 * algorithms
 * Medium (31.48%)
 * Total Accepted:    122.2K
 * Total Submissions: 388.1K
 * Testcase Example:  '3\n3'
 *
 * The set [1,2,3,...,n] contains a total of n! unique permutations.
 * 
 * By listing and labeling all of the permutations in order, we get the
 * following sequence for n = 3:
 * 
 * 
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 * 
 * 
 * Given n and k, return the kth permutation sequence.
 * 
 * Note:
 * 
 * 
 * Given n will be between 1 and 9 inclusive.
 * Given k will be between 1 and n! inclusive.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: n = 3, k = 3
 * Output: "213"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: n = 4, k = 9
 * Output: "2314"
 * 
 * 
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  const nums = [...'123456789'];
  let fact = 1;
  let res = '';

  for (let i = 1; i < n; i++) {
    fact *= i;
  }

  for (let m = n - 1, i = k - 1; m >= 0; i %= fact, fact /= m--) {
    const idx = Math.floor(i / fact);
  
    res += nums[idx];
    nums.splice(idx, 1);
  }

  return res;
};

getPermutation(4, 9);