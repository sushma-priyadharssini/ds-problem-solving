import ListNode from './index.js';

var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let p = l1, q = l2, curr = dummyHead;
    let carry = 0;
    while(p !== null || q !== null) {
        let x = ( p !== null ) ? p.val : 0;
        let y = ( q !== null ) ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum/10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if ( p !== null ) {
            p = p.next;
        } 
        if ( q !== null ) {
            q = q.next;
        }
    }
    if( carry > 0 ) {
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
};

var a = new ListNode(2, new ListNode(4, new ListNode(3)));
var b = new ListNode(5, new ListNode(6, new ListNode(4)));

addTwoNumbers(a,b).print();