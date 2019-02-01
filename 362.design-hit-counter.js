/*
 * @lc app=leetcode id=362 lang=javascript
 *
 * [362] Design Hit Counter
 *
 * https://leetcode.com/problems/design-hit-counter/description/
 *
 * algorithms
 * Medium (57.63%)
 * Total Accepted:    37K
 * Total Submissions: 64.2K
 * Testcase Example:  '["HitCounter","hit","hit","hit","getHits","hit","getHits","getHits"]\n[[],[1],[2],[3],[4],[300],[300],[301]]'
 *
 * Design a hit counter which counts the number of hits received in the past 5
 * minutes.
 * 
 * Each function accepts a timestamp parameter (in seconds granularity) and you
 * may assume that calls are being made to the system in chronological order
 * (ie, the timestamp is monotonically increasing). You may assume that the
 * earliest timestamp starts at 1.
 * 
 * It is possible that several hits arrive roughly at the same time.
 * 
 * Example:
 * 
 * 
 * HitCounter counter = new HitCounter();
 * 
 * // hit at timestamp 1.
 * counter.hit(1);
 * 
 * // hit at timestamp 2.
 * counter.hit(2);
 * 
 * // hit at timestamp 3.
 * counter.hit(3);
 * 
 * // get hits at timestamp 4, should return 3.
 * counter.getHits(4);
 * 
 * // hit at timestamp 300.
 * counter.hit(300);
 * 
 * // get hits at timestamp 300, should return 4.
 * counter.getHits(300);
 * 
 * // get hits at timestamp 301, should return 3.
 * counter.getHits(301); 
 * 
 * 
 * Follow up:
 * What if the number of hits per second could be very large? Does your design
 * scale?
 */
class HitCounter {
  /**
   * Initialize your data structure here.
   */
  constructor() {
    this.timestamps = [];
    this.hits = [];
  }

  /**
   * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity). 
   * @param {number} timestamp
   * @return {void}
   */
  hit(timestamp) {
    const idx = timestamp % 300;

    if (this.timestamps[idx] !== timestamp) {
      this.timestamps[idx] = timestamp;
      this.hits[idx] = 0;
    }

    this.hits[idx]++;
  }

  /**
   * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity). 
   * @param {number} timestamp
   * @return {number}
   */
  getHits(timestamp) {
    return this.hits.reduce((acc, hit, i) => 
        acc + (timestamp - this.timestamps[i] < 300 ? hit : 0), 0);
  }
}

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = Object.create(HitCounter).createNew()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
