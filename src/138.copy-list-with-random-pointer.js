/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 *
 * https://leetcode.com/problems/copy-list-with-random-pointer/description/
 *
 * algorithms
 * Medium (25.56%)
 * Total Accepted:    201.4K
 * Total Submissions: 787.8K
 * Testcase Example:  '{}'
 *
 * 
 * A linked list is given such that each node contains an additional random
 * pointer which could point to any node in the list or null.
 * 
 * 
 * 
 * Return a deep copy of the list.
 * 
 */
/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
  if (!head) {
    return null;
  }

  const map = new Map().set(head, new RandomListNode(head.label));
  const stack = [head];

  while (stack.length) {
    const cur = stack.pop();
    const copy = map.get(cur);

    if (cur.next && !map.has(cur.next)) {
      map.set(cur.next, new RandomListNode(cur.next.label));
      stack.push(cur.next);
    }

    if (cur.random && !map.has(cur.random)) {
      map.set(cur.random, new RandomListNode(cur.random.label));
      stack.push(cur.random);
    }

    cur.next && (copy.next = map.get(cur.next));
    cur.random && (copy.random = map.get(cur.random));
  }

  return map.get(head);
};
