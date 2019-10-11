/*
 * @lc app=leetcode id=369 lang=javascript
 *
 * [369] Plus One Linked List
 *
 * https://leetcode.com/problems/plus-one-linked-list/description/
 *
 * algorithms
 * Medium (55.75%)
 * Total Accepted:    31.9K
 * Total Submissions: 57.1K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a non-negative integer represented as non-empty a singly linked list
 * of digits, plus one to the integer.
 * 
 * You may assume the integer do not contain any leading zero, except the
 * number 0 itself.
 * 
 * The digits are stored such that the most significant digit is at the head of
 * the list.
 * 
 * 
 * Example :
 * 
 * 
 * Input: [1,2,3]
 * Output: [1,2,4]
 * 
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
 * @return {ListNode}
 */
var plusOne = function(head) {
  const stack = [];

  for (let cur = head; cur; cur = cur.next) {
    stack.push(cur);
  }

  let carry = 1;

  while (stack.length) {
    const cur = stack.pop();
    const sum = cur.val + carry;

    cur.val = sum % 10;
    carry = Math.floor(sum / 10);
  }

  if (carry) {
    const node = new ListNode(carry);

    node.next = head;
    head = node;
  }

  return head;
};
