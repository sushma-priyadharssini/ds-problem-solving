import ListNode from './linkedList.js';

var reverseList = function(head) {
    let newHead = null;
    let tmp = head;
    
    while(head) {
        tmp = head.next;
        head.next = newHead;
        newHead = head;
        head = tmp;
    }
    return newHead;
    
};

var a = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

reverseList(a).print();