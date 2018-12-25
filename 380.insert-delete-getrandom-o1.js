/*
 * [380] Insert Delete GetRandom O(1)
 *
 * https://leetcode.com/problems/insert-delete-getrandom-o1/description/
 *
 * algorithms
 * Medium (41.38%)
 * Total Accepted:    88.9K
 * Total Submissions: 214.8K
 * Testcase Example:  '["RandomizedSet","insert","remove","insert","getRandom","remove","insert","getRandom"]\n[[],[1],[2],[2],[],[1],[2],[]]'
 *
 * Design a data structure that supports all following operations in average
 * O(1) time.
 * 
 * 
 * 
 * insert(val): Inserts an item val to the set if not already present.
 * remove(val): Removes an item val from the set if present.
 * getRandom: Returns a random element from current set of elements. Each
 * element must have the same probability of being returned.
 * 
 * 
 * 
 * Example:
 * 
 * // Init an empty set.
 * RandomizedSet randomSet = new RandomizedSet();
 * 
 * // Inserts 1 to the set. Returns true as 1 was inserted successfully.
 * randomSet.insert(1);
 * 
 * // Returns false as 2 does not exist in the set.
 * randomSet.remove(2);
 * 
 * // Inserts 2 to the set, returns true. Set now contains [1,2].
 * randomSet.insert(2);
 * 
 * // getRandom should return either 1 or 2 randomly.
 * randomSet.getRandom();
 * 
 * // Removes 1 from the set, returns true. Set now contains [2].
 * randomSet.remove(1);
 * 
 * // 2 was already in the set, so return false.
 * randomSet.insert(2);
 * 
 * // Since 2 is the only number in the set, getRandom always return 2.
 * randomSet.getRandom();
 * 
 * 
 */
class RandomizedSet {
  /**
   * Initialize your data structure here.
   */
  constructor() {
    this.map = new Map();
    this.values = [];
  }

  /**
   * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    if (this.map.has(val)) {
      return false;
    }

    this.map.set(val, this.values.length);
    this.values.push(val);

    return true;
  }

  /**
   * Removes a value from the set. Returns true if the set contained the specified element. 
   * @param {number} val
   * @return {boolean}
   */
  remove(val) {
    if (!this.values.length || !this.map.has(val)) {
      return false;
    }
    
    const idx = this.map.get(val);

    [this.values[idx], this.values[this.values.length - 1]] =
      [this.values[this.values.length - 1], this.values[idx]];
    this.map.set(this.values[idx], idx);
    this.values.length--;
    this.map.delete(val);
    
    return true;
  }

  /**
   * Get a random element from the set.
   * @return {number}
   */
  getRandom() {
    return this.values[Math.floor(this.values.length * Math.random())];
  }
}

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
