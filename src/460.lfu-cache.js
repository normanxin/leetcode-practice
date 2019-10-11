/*
 * @lc app=leetcode id=460 lang=javascript
 *
 * [460] LFU Cache
 *
 * https://leetcode.com/problems/lfu-cache/description/
 *
 * algorithms
 * Hard (28.72%)
 * Total Accepted:    38.9K
 * Total Submissions: 135.4K
 * Testcase Example:  '["LFUCache","put","put","get","put","get","get","put","get","get","get"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[3],[4,4],[1],[3],[4]]'
 *
 * Design and implement a data structure for Least Frequently Used (LFU) cache.
 * It should support the following operations: get and put.
 * 
 * 
 * 
 * get(key) - Get the value (will always be positive) of the key if the key
 * exists in the cache, otherwise return -1.
 * put(key, value) - Set or insert the value if the key is not already present.
 * When the cache reaches its capacity, it should invalidate the least
 * frequently used item before inserting a new item. For the purpose of this
 * problem, when there is a tie (i.e., two or more keys that have the same
 * frequency), the least recently used key would be evicted.
 * 
 * 
 * Follow up:
 * Could you do both operations in O(1) time complexity?
 * 
 * Example:
 * 
 * LFUCache cache = new LFUCache( 2 capacity );
 * 
 * cache.put(1, 1);
 * cache.put(2, 2);
 * cache.get(1);       // returns 1
 * cache.put(3, 3);    // evicts key 2
 * cache.get(2);       // returns -1 (not found)
 * cache.get(3);       // returns 3.
 * cache.put(4, 4);    // evicts key 1.
 * cache.get(1);       // returns -1 (not found)
 * cache.get(3);       // returns 3
 * cache.get(4);       // returns 4
 * 
 * 
 */
class LFUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.keyFreq = new Map();
    this.freqKeys = [];
    this.minFreq = 1;
  }

  /** 
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (!this.capacity || !this.cache.has(key)) {
      return -1;
    }

    const freq = this.keyFreq.get(key);

    this.keyFreq.set(key, freq + 1);
    !this.freqKeys[freq + 1] && (this.freqKeys[freq + 1] = new Set());
    this.freqKeys[freq + 1].add(key);
    this.freqKeys[freq].delete(key);

    if (this.minFreq === freq && !this.freqKeys[freq].size) {
      this.minFreq++;
    }

    return this.cache.get(key);
  }

  /** 
   * @param {number} key 
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (!this.capacity) {
      return;
    }

    if (!this.cache.has(key)) {
      if (this.cache.size >= this.capacity) {
        const key2Delete = this.freqKeys[this.minFreq].values().next().value;

        this.cache.delete(key2Delete);
        this.keyFreq.delete(key2Delete);
        this.freqKeys[this.minFreq].delete(key2Delete);
      }

      this.cache.set(key, value);
      this.keyFreq.set(key, 1);
      !this.freqKeys[1] && (this.freqKeys[1] = new Set());
      this.freqKeys[1].add(key);
      this.minFreq = 1;
    }

    const freq = this.keyFreq.get(key);

    this.cache.set(key, value);
    this.keyFreq.set(key, freq + 1);
    !this.freqKeys[freq + 1] && (this.freqKeys[freq + 1] = new Set());
    this.freqKeys[freq + 1].add(key);
    this.freqKeys[freq].delete(key);

    if (this.minFreq === freq && !this.freqKeys[freq].size) {
      this.minFreq++;
    }
  }
}

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */