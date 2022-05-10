import ListNode from './linkedList.js';

var reverseBetween = function(head, left, right) {
    let newHead = new ListNode(0);
    let now = newHead;
    let tmp = null;
    let reverseHead = null;
    let reverseLast = null;
    let reverseNow = null;
    let i=0
    
    newHead.next = head;
    
    while(now) {
        tmp = now.next;
        if(i === left - 1) {
            reverseHead = now;
        }
        
        if(i === left) {
            reverseLast = now;
            reverseNow = now;
        }
        
        if(i>left && i<=right) {
            now.next=reverseNow
            reverseNow=now;
        }
        
        if(i===right){
            reverseLast.next = tmp;
            reverseHead.next = reverseNow
        }
        now = tmp;
        i++;
    }
    return newHead.next;
};

var a = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

reverseBetween(a, 2, 4).print();