import ListNode from './index.js';
/* 
Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]
Example 2:

Input: head = [2,1], x = 2
Output: [1,2] */

var partition = function(head, x) {
    let now = head;
    let l1 = new ListNode(0)
    let l2 = new ListNode(0)
    let now1 = l1
    let now2 = l2
    
    while(now) {
        if(now.val < x) {
            now1.next = now;
            now1=now1.next;
        } else {
            now2.next=now;
            now2=now2.next
        }
        now = now.next
    }
    now1.next = l2.next;
    now2.next=null
    return l1.next
};

var a = new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2))))));
partition(a,3).print()