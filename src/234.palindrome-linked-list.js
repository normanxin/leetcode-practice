/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 *
 * https://leetcode.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (35.38%)
 * Total Accepted:    234.8K
 * Total Submissions: 663.5K
 * Testcase Example:  '[1,2]'
 *
 * Given a singly linked list, determine if it is a palindrome.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->2
 * Output: false
 * 
 * Example 2:
 * 
 * 
 * Input: 1->2->2->1
 * Output: true
 * 
 * Follow up:
 * Could you do it in O(n) time and O(1) space?
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  const origMid = getMid(head); 
  const mid = reverse(origMid);

  for (let l = head, r = mid; l && l !== origMid; l = l.next, r = r.next) {
    if (l.val !== r.val) {
      return false;
    }
  }

  return true;
};

function getMid(head) {
  let l = head;
  let r = head;

  while (r && r.next) {
    l = l.next;
    r = r.next.next;
  }

  return l;
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