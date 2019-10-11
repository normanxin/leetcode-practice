/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
 *
 * https://leetcode.com/problems/reorder-list/description/
 *
 * algorithms
 * Medium (28.91%)
 * Total Accepted:    133.9K
 * Total Submissions: 463.3K
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given a singly linked list L: L0→L1→…→Ln-1→Ln,
 * reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
 * 
 * You may not modify the values in the list's nodes, only nodes itself may be
 * changed.
 * 
 * Example 1:
 * 
 * 
 * Given 1->2->3->4, reorder it to 1->4->2->3.
 * 
 * Example 2:
 * 
 * 
 * Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  let [l1, l2] = split(head);

  l2 = reverse(l2);

  return merge(l1, l2);
};

function split(head) {
  const dummy = new ListNode();
  let fast = dummy;
  let slow = dummy;

  dummy.next = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let res = [head, slow.next];

  slow.next = null;

  return res;
}

function reverse(head) {
  let res = null;

  while (head) {
    const node = head;

    head = head.next;
    node.next = res;
    res = node;
  }

  return res;
}

function merge(l1, l2) {
  const dummy = new ListNode();
  let cur = dummy;

  for (let i = 0; l1 && l2; i++, cur = cur.next) {
    if (i % 2 === 0) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
  }

  l1 && (cur.next = l1);
  l2 && (cur.next = l2);

  return dummy.next;
}