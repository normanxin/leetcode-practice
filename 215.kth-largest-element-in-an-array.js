/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 *
 * https://leetcode.com/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (49.01%)
 * Total Accepted:    411K
 * Total Submissions: 837.3K
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * Find the kth largest element in an unsorted array. Note that it is the kth
 * largest element in the sorted order, not the kth distinct element.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,2,1,5,6,4] and k = 2
 * Output: 5
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,2,3,1,2,4,5,5,6] and k = 4
 * Output: 4
 * 
 * Note: 
 * You may assume k is always valid, 1 ≤ k ≤ array's length.
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  const minHeap = nums.reduce((heap, num) => {
    if (heap.size() < k) {
      heap.push(num);

      return heap;
    }

    if (heap.content[0] >= num) {
      return heap;
    }

    heap.pop();
    heap.push(num);

    return heap;
  }, new BinaryHeap(x => x));

  return minHeap.content[0];
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