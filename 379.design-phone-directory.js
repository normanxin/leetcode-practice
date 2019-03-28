/*
 * @lc app=leetcode id=379 lang=javascript
 *
 * [379] Design Phone Directory
 *
 * https://leetcode.com/problems/design-phone-directory/description/
 *
 * algorithms
 * Medium (40.00%)
 * Total Accepted:    21.2K
 * Total Submissions: 52.9K
 * Testcase Example:  '["PhoneDirectory","get","get","check","get","check","release","check"]\n[[3],[],[],[2],[],[2],[2],[2]]'
 *
 * Design a Phone Directory which supports the following operations:
 * 
 * 
 * 
 * get: Provide a number which is not assigned to anyone.
 * check: Check if a number is available or not.
 * release: Recycle or release a number.
 * 
 * 
 * 
 * Example:
 * 
 * // Init a phone directory containing a total of 3 numbers: 0, 1, and 2.
 * PhoneDirectory directory = new PhoneDirectory(3);
 * 
 * // It can return any available phone number. Here we assume it returns 0.
 * directory.get();
 * 
 * // Assume it returns 1.
 * directory.get();
 * 
 * // The number 2 is available, so return true.
 * directory.check(2);
 * 
 * // It returns 2, the only number that is left.
 * directory.get();
 * 
 * // The number 2 is no longer available, so return false.
 * directory.check(2);
 * 
 * // Release number 2 back to the pool.
 * directory.release(2);
 * 
 * // Number 2 is available again, return true.
 * directory.check(2);
 * 
 * 
 */
class PhoneDirectory {
  /**
   * Initialize your data structure here
   *       @param maxNumbers - The maximum numbers that can be stored in the phone directory.
   * @param {number} maxNumbers
   */
  constructor(maxNumbers) {
    this.maxNumbers = maxNumbers;
    this.next = this.idx = 0;
    this.recycle = Array(maxNumbers);
    this.flag = Array(maxNumbers).fill(true);
  }

  /**
   * Provide a number which is not assigned to anyone.
   *     @return - Return an available number. Return -1 if none is available.
   * @return {number}
   */
  get() {
    if (this.next === this.maxNumbers && this.idx <= 0) {
      return -1;
    }

    if (this.idx > 0) {
      const t = this.recycle[--this.idx];

      this.flag[t] = false;

      return t;
    }
    
    this.flag[this.next] = false;

    return this.next++;
  }

  /**
   * Check if a number is available or not. 
   * @param {number} number
   * @return {boolean}
   */
  check(number) {
    return number >= 0 && number < this.maxNumbers && this.flag[number];
  };

  /**
   * Recycle or release a number. 
   * @param {number} number
   * @return {void}
   */
  release(number) {
    if (number >= 0 && number < this.maxNumbers && !this.flag[number]) {
      this.recycle[this.idx++] = number;
      this.flag[number] = true;
    } 
  }
} 

/** 
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = Object.create(PhoneDirectory).createNew(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */
