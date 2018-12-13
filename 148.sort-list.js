/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
 *
 * https://leetcode.com/problems/sort-list/description/
 *
 * algorithms
 * Medium (32.75%)
 * Total Accepted:    159K
 * Total Submissions: 485.7K
 * Testcase Example:  '[4,2,1,3]'
 *
 * Sort a linked list in O(n log n) time using constant space complexity.
 * 
 * Example 1:
 * 
 * 
 * Input: 4->2->1->3
 * Output: 1->2->3->4
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -1->5->3->4->0
 * Output: -1->0->3->4->5
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
 * @return {ListNode}
 */
var sortList = function(head) {
  if (!head || !head.next) {
    return head;
  }

  const [l1, l2] = split(head);

  return merge(sortList(l1), sortList(l2));
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

  const res = [head, slow.next];

  slow.next = null;

  return res;
}

function merge(l1, l2) {
  const dummy = new ListNode;
  let cur = dummy;

  for (; l1 && l2; cur = cur.next) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
  }

  for (; l1; cur = cur.next, l1 = l1.next) {
    cur.next = l1;
  }

  for (; l2; cur = cur.next, l2 = l2.next) {
    cur.next = l2;
  }

  return dummy.next;
}