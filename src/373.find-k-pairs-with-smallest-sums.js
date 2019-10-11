/*
 * @lc app=leetcode id=373 lang=javascript
 *
 * [373] Find K Pairs with Smallest Sums
 *
 * https://leetcode.com/problems/find-k-pairs-with-smallest-sums/description/
 *
 * algorithms
 * Medium (34.43%)
 * Total Accepted:    73.8K
 * Total Submissions: 214.3K
 * Testcase Example:  '[1,7,11]\n[2,4,6]\n3'
 *
 * You are given two integer arrays nums1 and nums2 sorted in ascending order
 * and an integer k.
 * 
 * Define a pair (u,v) which consists of one element from the first array and
 * one element from the second array.
 * 
 * Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.
 * 
 * Example 1:
 * 
 * 
 * Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
 * Output: [[1,2],[1,4],[1,6]] 
 * Explanation: The first 3 pairs are returned from the sequence: 
 * [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
 * 
 * Example 2:
 * 
 * 
 * Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
 * Output: [1,1],[1,1]
 * Explanation: The first 2 pairs are returned from the sequence: 
 * [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
 * 
 * Example 3:
 * 
 * 
 * Input: nums1 = [1,2], nums2 = [3], k = 3
 * Output: [1,3],[2,3]
 * Explanation: All possible pairs are returned from the sequence: [1,3],[2,3]
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
const kSmallestPairs = (nums1, nums2, k) => {
  const heap = new BinaryHeap(([a, b]) => -(a + b));

  for (let i1 = 0; i1 < nums1.length; i1++) {
    for (let i2 = 0; i2 < nums2.length; i2++) {
      if (heap.size() < k) {
        heap.push([nums1[i1], nums2[i2]]);
      } else {
        const [a, b] = heap.content[0];
        
        if (nums1[i1] + nums2[i2] >= a + b) {
          continue;
        }

        heap.pop();
        heap.push([nums1[i1], nums2[i2]]);
      }
    }
  }

  return heap.content;
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