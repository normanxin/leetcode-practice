/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
 *
 * https://leetcode.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (33.21%)
 * Total Accepted:    166.6K
 * Total Submissions: 501.7K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * Reverse a linked list from position m to n. Do it in one-pass.
 * 
 * Note: 1 ≤ m ≤ n ≤ length of list.
 * 
 * Example:
 * 
 * 
 * Input: 1->2->3->4->5->NULL, m = 2, n = 4
 * Output: 1->4->3->2->5->NULL
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  const dummy = new ListNode();
  let before = null;
  let after = null;
  let pre = null;

  dummy.next = head;

  for (let cur = dummy, i = 0; cur; i++) {
    if (i === m - 1) {
      before = cur;
      cur = cur.next;
    } else if (i === n + 1) {
      after = cur;
      cur = cur.next;
    } else if (i >= m && i <= n) {
      const node = cur;

      cur = cur.next;
      node.next = pre;
      pre = node;
    } else {
      cur = cur.next;
    }
  }

  before.next.next = after;
  before.next = pre;

  return dummy.next;
};
