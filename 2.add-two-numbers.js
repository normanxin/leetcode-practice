/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (29.73%)
 * Total Accepted:    672.7K
 * Total Submissions: 2.3M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const dummy = new ListNode();
  let cur = dummy;
  let carry = 0;

  for (; l1 && l2; l1 = l1.next, l2 = l2.next, cur = cur.next) {
    const sum = l1.val + l2.val + carry;

    cur.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
  }

  for (; l1; l1 = l1.next, cur = cur.next) {
    const sum = l1.val + carry;

    cur.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
  }

  for (; l2; l2 = l2.next, cur = cur.next) {
    const sum = l2.val + carry;

    cur.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
  }

  carry && (cur.next = new ListNode(carry));

  return dummy.next;
};
