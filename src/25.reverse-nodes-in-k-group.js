/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
 *
 * https://leetcode.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (34.78%)
 * Total Accepted:    161.7K
 * Total Submissions: 464.6K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, reverse the nodes of a linked list k at a time and
 * return its modified list.
 * 
 * k is a positive integer and is less than or equal to the length of the
 * linked list. If the number of nodes is not a multiple of k then left-out
 * nodes in the end should remain as it is.
 * 
 * 
 * 
 * 
 * Example:
 * 
 * Given this linked list: 1->2->3->4->5
 * 
 * For k = 2, you should return: 2->1->4->3->5
 * 
 * For k = 3, you should return: 3->2->1->4->5
 * 
 * Note:
 * 
 * 
 * Only constant extra memory is allowed.
 * You may not alter the values in the list's nodes, only nodes itself may be
 * changed.
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  const dummy = new ListNode();

  dummy.next = head;

  for (let l = dummy, r = dummy; l;) {
    r = l;
  
    for (let i = 0; i < k; i++) {
      r = r.next;

      if (!r) {
        return dummy.next;
      }
    }

    const lNext = l.next;
    let cur = l.next;

    l.next = r.next;

    for (let i = 0; i < k; i++) {
      const next = cur.next;

      cur.next = l.next;
      l.next = cur;
      cur = next;
    }

    l = lNext;
  }

  return dummy.next;
};