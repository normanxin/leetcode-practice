/*
 * @lc app=leetcode id=170 lang=javascript
 *
 * [170] Two Sum III - Data structure design
 *
 * https://leetcode.com/problems/two-sum-iii-data-structure-design/description/
 *
 * algorithms
 * Easy (28.72%)
 * Total Accepted:    49K
 * Total Submissions: 170.7K
 * Testcase Example:  '["TwoSum","add","add","add","find","find"]\n[[],[1],[3],[5],[4],[7]]'
 *
 * Design and implement a TwoSum class. It should support the following
 * operations: add and find.
 * 
 * add - Add the number to an internal data structure.
 * find - Find if there exists any pair of numbers which sum is equal to the
 * value.
 * 
 * Example 1:
 * 
 * 
 * add(1); add(3); add(5);
 * find(4) -> true
 * find(7) -> false
 * 
 * 
 * Example 2:
 * 
 * 
 * add(3); add(1); add(2);
 * find(3) -> true
 * find(6) -> false
 * 
 */
class TwoSum {
  /**
   * Initialize your data structure here.
   */
  constructor() {
    this.map = new Map();
  }

  /**
   * Add the number to an internal data structure.. 
   * @param {number} number
   * @return {void}
   */
  add(number) {
    !this.map.has(number) && this.map.set(number, 0);
    this.map.set(number, this.map.get(number) + 1);
  }

  /**
   * Find if there exists any pair of numbers which sum is equal to the value. 
   * @param {number} value
   * @return {boolean}
   */
  find(value) {
    for (let [num, cnt] of this.map) {
      const diff = value - num;

      if ((diff === num && cnt > 1) || (diff !== num && this.map.has(diff))) {
        return true;
      }
    }

    return false;
  }
}

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = Object.create(TwoSum).createNew()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
