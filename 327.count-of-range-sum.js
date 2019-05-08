/*
 * @lc app=leetcode id=327 lang=javascript
 *
 * [327] Count of Range Sum
 *
 * https://leetcode.com/problems/count-of-range-sum/description/
 *
 * algorithms
 * Hard (32.54%)
 * Total Accepted:    30.9K
 * Total Submissions: 94.9K
 * Testcase Example:  '[-2,5,-1]\n-2\n2'
 *
 * Given an integer array nums, return the number of range sums that lie in
 * [lower, upper] inclusive.
 * Range sum S(i, j) is defined as the sum of the elements in nums between
 * indices i and j (i ≤ j), inclusive.
 * 
 * Note:
 * A naive algorithm of O(n2) is trivial. You MUST do better than that.
 * 
 * Example:
 * 
 * 
 * Input: nums = [-2,5,-1], lower = -2, upper = 2,
 * Output: 3 
 * Explanation: The three ranges are : [0,0], [2,2], [0,2] and their respective
 * sums are: -2, -1, 2.
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
  const sum = nums.reduce((arr, num, i) => {
    arr[i + 1] = arr[i] + num;

    return arr;
  }, [0]);

  
  return mergeSort(sum, lower, upper, 0, nums.length + 1);
};

function mergeSort(sum, lower, upper, low, high) {
  if (high - low <= 1) {
    return 0;
  }

  const mid = low + Math.floor((high - low) / 2);
  let m = mid;
  let n = mid;
  let cnt = mergeSort(sum, lower, upper, low, mid)
      + mergeSort(sum, lower, upper, mid, high);

  for (let i = low; i < mid; i++) {
    while (m < high && sum[m] - sum[i] < lower) {
      m++;
    }

    while (n < high && sum[n] - sum[i] <= upper) {
      n++;
    }

    cnt += n - m;
  }
        
  const arr1 = sum.slice(low, mid);
  const arr2 = sum.slice(mid, high);

  for (let i = low, c1 = 0, c2 = 0; i < high; i++) {
    sum[i] = c2 >= arr2.length || arr1[c1] < arr2[c2] ? arr1[c1++] : arr2[c2++];
  }

  return cnt;
}