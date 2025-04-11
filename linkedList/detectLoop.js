import ListNode from './linkedList.js';
/* 
Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]
Example 2:

Input: head = [2,1], x = 2
Output: [1,2] */

var detectLoop = function(head) {
    let mySet = new Set();
    while(head !=null) {
        if(mySet.has(head)) {
            return true
        }
        mySet.add(head)
    }
    return false;
};

var detectAndRemoveLoop = function (head) {
    let slow = head;
    let fast = head;

    while(slow!==null && fast!==null && fast.next !==null) {
        slow=slow.next;
        fast=fast.next.next;
        if(slow===fast) {
            removeLoop(slow, head)
            return true
        }
    }
    return false
}

var removeLoop = function (loop, head) {
    let p1 = loop;
    let p2 = loop;
    let c=1;

    while(p2.next!==p1) {
        p2=p2.next
        c++
    }
    p1=head;
    p2=head;
    for(let i=0;i<c;i++) p2=p2.next

    while(p1!==p2) {
        p1=p1.next;
        p2=p2.next;
    }

    while(p2.next!==p1) p2=p2.next

    p2.next=null;
} 

var a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(3);
a.next.next.next = new ListNode(4)
a.next.next.next.next = a.next.next;

console.log(detectLoop(a))
detectAndRemoveLoop(a);
a.print();