/*
 * @lc app=leetcode id=253 lang=javascript
 *
 * [253] Meeting Rooms II
 *
 * https://leetcode.com/problems/meeting-rooms-ii/description/
 *
 * algorithms
 * Medium (43.34%)
 * Total Accepted:    171.3K
 * Total Submissions: 395.1K
 * Testcase Example:  '[[0,30],[5,10],[15,20]]'
 *
 * Given an array of meeting time intervals consisting of start and end times
 * [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms
 * required.
 * 
 * Example 1:
 * 
 * 
 * Input: [[0, 30],[5, 10],[15, 20]]
 * Output: 2
 * 
 * Example 2:
 * 
 * 
 * Input: [[7,10],[2,4]]
 * Output: 1
 * 
 * NOTE: input types have been changed on April 15, 2019. Please reset to
 * default code definition to get new method signature.
 * 
 */
/**
 * @param {number[][]} intervals
 * @return {number}
 */
const minMeetingRooms = intervals => {
  intervals.sort(([fromA, toA], [fromB, toB]) => fromA - fromB || toA - toB);

  const heap = new BinaryHeap(x => x);
  let res = 0;

  for (let [from, to] of intervals) {
    if (!heap.size() || from < heap.content[0]) {
      res++;
    } else {
      heap.pop();
    }

    heap.push(to);
  }
  
  return res;
};

class BinaryHeap {
  static heapify(arr, scoreFunction) {
    return arr.reduce((heap, el) => {
      heap.push(el);
      return heap;
    }, new BinaryHeap(scoreFunction));
  }

  constructor(scoreFunction) {
    this.content = [];
    this.scoreFunction = scoreFunction;
  }

  push(element) {
    this.content.push(element);
    this.bubbleUp(this.content.length - 1);
  }

  pop() {
    const result = this.content[0];
    const end = this.content.pop();

    if (this.content.length > 0) {
      this.content[0] = end;
      this.sinkDown(0);
    }

    return result;
  }

  remove(node) {
    const length = this.content.length;

    for (let i = 0; i < length; i++) {
      if (this.content[i] !== node) {
        continue;
      }
    
      const end = this.content.pop();

      if (i === length - 1) {
        break;
      }

      this.content[i] = end;
      this.bubbleUp(i);
      this.sinkDown(i);
      break;
    }
  }

  size() {
    return this.content.length;
  }

  bubbleUp(n) {
    const element = this.content[n];
    const score = this.scoreFunction(element);

    while (n > 0) {
      const parentN = Math.floor((n + 1) / 2) - 1;
      const parent = this.content[parentN];
    
      if (score >= this.scoreFunction(parent)) {
        break;
      }

      this.content[parentN] = element;
      this.content[n] = parent;
      n = parentN;
    }
  }

  sinkDown(n) {
    const length = this.content.length;
    const element = this.content[n];
    const elemScore = this.scoreFunction(element);
    let child1Score;
    let child2Score;

    while (true) {
      const child2N = (n + 1) * 2;
      const child1N = child2N - 1;
      let swap = null;

      if (child1N < length) {
        const child1 = this.content[child1N];
        
        child1Score = this.scoreFunction(child1);
      
        if (child1Score < elemScore) {
          swap = child1N;
        }
      }

      if (child2N < length) {
        const child2 = this.content[child2N];
        
        child2Score = this.scoreFunction(child2);

        if (child2Score < (swap === null ? elemScore : child1Score)) {
          swap = child2N;
        }
      }

      if (swap === null) {
        break;
      }

      this.content[n] = this.content[swap];
      this.content[swap] = element;
      n = swap;
    }
  }
}