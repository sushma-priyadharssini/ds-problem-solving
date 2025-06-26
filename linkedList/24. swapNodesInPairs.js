import ListNode from './index.js';


var swapPairs = function(head) {
    let dummyHead = new ListNode(undefined, head)

    let curr = dummyHead;

    while (curr.next !== null && curr.next.next !== null) {
        let first = curr.next;
        let second = curr.next.next;

        curr.next = second;
        first.next = second.next;
        second.next = first;
    
        curr = curr.next.next;
    }

   return dummyHead.next;
};

var a = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

swapPairs(a).print();