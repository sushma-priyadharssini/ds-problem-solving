/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let s1=s2="";
  let curr = head;
  while(curr) {
      s1=s1+curr.val;
      s2=curr.val+s2;
      curr=curr.next
  }
  return s1 === s2
};
