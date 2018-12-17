/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 *
 * https://leetcode.com/problems/min-stack/description/
 *
 * algorithms
 * Easy (34.39%)
 * Total Accepted:    244.5K
 * Total Submissions: 711K
 * Testcase Example:  '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]'
 *
 * 
 * Design a stack that supports push, pop, top, and retrieving the minimum
 * element in constant time.
 * 
 * 
 * push(x) -- Push element x onto stack.
 * 
 * 
 * pop() -- Removes the element on top of the stack.
 * 
 * 
 * top() -- Get the top element.
 * 
 * 
 * getMin() -- Retrieve the minimum element in the stack.
 * 
 * 
 * 
 * 
 * Example:
 * 
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> Returns -3.
 * minStack.pop();
 * minStack.top();      --> Returns 0.
 * minStack.getMin();   --> Returns -2.
 * 
 * 
 */
class MinStack {
  /**
   * initialize your data structure here.
   */
  constructor() {
    this.dataStack = [];
    this.minStack = [];
  }

  /** 
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.dataStack.push(x);

    if (!this.minStack.length || x <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(x);
    }
  }

  /**
   * @return {void}
   */
  pop() {
    const res = this.dataStack.pop();
    
    if (res === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }

    return res;
  }

  /**
   * @return {number}
   */
  top() {
    return this.dataStack[this.dataStack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */