/*
 * [887] Minimum Cost to Hire K Workers
 *
 * https://leetcode.com/problems/minimum-cost-to-hire-k-workers/description/
 *
 * algorithms
 * Hard (44.11%)
 * Total Accepted:    7K
 * Total Submissions: 16K
 * Testcase Example:  '[10,20,5]\n[70,50,30]\n2'
 *
 * There are N workers.  The i-th worker has a quality[i] and a minimum wage
 * expectation wage[i].
 * 
 * Now we want to hire exactly K workers to form a paid group.  When hiring a
 * group of K workers, we must pay them according to the following rules:
 * 
 * 
 * Every worker in the paid group should be paid in the ratio of their quality
 * compared to other workers in the paid group.
 * Every worker in the paid group must be paid at least their minimum wage
 * expectation.
 * 
 * 
 * Return the least amount of money needed to form a paid group satisfying the
 * above conditions.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: quality = [10,20,5], wage = [70,50,30], K = 2
 * Output: 105.00000
 * Explanation: We pay 70 to 0-th worker and 35 to 2-th worker.
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: quality = [3,1,10,10,1], wage = [4,8,2,2,7], K = 3
 * Output: 30.66667
 * Explanation: We pay 4 to 0-th worker, 13.33333 to 2-th and 3-th workers
 * seperately. 
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 1 <= K <= N <= 10000, where N = quality.length = wage.length
 * 1 <= quality[i] <= 10000
 * 1 <= wage[i] <= 10000
 * Answers within 10^-5 of the correct answer will be considered correct.
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} K
 * @return {number}
 */
const mincostToHireWorkers = (quality, wage, K) => {
  const worker = quality
      .map((q, i) => ({q, r: wage[i] / quality[i]}))
      .sort(({r: a}, {r: b}) => a - b);
  const heap = new BinaryHeap(x => -x);
  let res = Infinity;
  let qSum = 0;

  for (let {q, r} of worker) {
    heap.push(q);
    qSum += q;
    heap.size() > K && (qSum -= heap.pop());
    heap.size() === K && (res = Math.min(res, r * qSum));
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