/*
 * [281] Zigzag Iterator
 *
 * https://leetcode.com/problems/zigzag-iterator/description/
 *
 * algorithms
 * Medium (54.20%)
 * Total Accepted:    44.6K
 * Total Submissions: 82.3K
 * Testcase Example:  '[1,2]\n[3,4,5,6]'
 *
 * Given two 1d vectors, implement an iterator to return their elements
 * alternately.
 * 
 * Example:
 * 
 * 
 * Input:
 * v1 = [1,2]
 * v2 = [3,4,5,6] 
 * 
 * Output: [1,3,2,4,5,6]
 * 
 * Explanation: By calling next repeatedly until hasNext returns
 * false, 
 * the order of elements returned by next should be: [1,3,2,4,5,6].
 * 
 * Follow up: What if you are given k 1d vectors? How well can your code be
 * extended to such cases?
 * 
 * Clarification for the follow up question:
 * The "Zigzag" order is not clearly defined and is ambiguous for k > 2 cases.
 * If "Zigzag" does not look right to you, replace "Zigzag" with "Cyclic". For
 * example:
 * 
 * 
 * Input:
 * [1,2,3]
 * [4,5,6,7]
 * [8,9]
 * 
 * Output: [1,4,8,2,5,9,3,6,7].
 * 
 * 
 */
class ZigzagIterator {
  /**
   * @constructor
   * @param {Integer[]} v1
   * @param {Integer[]} v1
   */
  constructor(v1, v2) {
    this.v = [v1, v2];
    this.i = this.j = 0;
  }

  /**
   * @this ZigzagIterator
   * @returns {boolean}
   */
  hasNext() {
    if (this.i >= this.v[0].length) {
      this.i = Infinity;
    }
    
    if (this.j >= this.v[1].length) {
      this.j = Infinity;
    }
    
    return this.i < Infinity || this.j < Infinity;
  }

  /**
   * @this ZigzagIterator
   * @returns {integer}
   */
  next() {
    return this.i <= this.j ? this.v[0][this.i++] : this.v[1][this.j++];
  }
}

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
