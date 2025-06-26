import ListNode from './index.js';

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

var reverseList1 = function(head) {
    let prev = null;
    let curr = head;
    while(curr!==null){
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    return prev;
};

var a = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

reverseList(a).print();