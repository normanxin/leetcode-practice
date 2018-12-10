/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
 *
 * https://leetcode.com/problems/partition-list/description/
 *
 * algorithms
 * Medium (35.40%)
 * Total Accepted:    143.6K
 * Total Submissions: 405.8K
 * Testcase Example:  '[1,4,3,2,5,2]\n3'
 *
 * Given a linked list and a value x, partition it such that all nodes less
 * than x come before nodes greater than or equal to x.
 * 
 * You should preserve the original relative order of the nodes in each of the
 * two partitions.
 * 
 * Example:
 * 
 * 
 * Input: head = 1->4->3->2->5->2, x = 3
 * Output: 1->2->2->4->3->5
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  const loDummy = new ListNode();
  const hiDummy = new ListNode();
  let loTail = loDummy;
  let hiTail = hiDummy;

  for (; head; head = head.next) {
    if (head.val < x) {
      loTail.next = head;
      loTail = loTail.next;
    } else {
      hiTail.next = head;
      hiTail = hiTail.next;
    }
  }

  loTail.next = hiDummy.next;
  hiTail.next = null;

  return loDummy.next;
};
