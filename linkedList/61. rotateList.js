import ListNode from './index.js';


var rotateList = function(head, k) {
    let last = head;
    let l = 1;
    let curr = head;
    if(!head || !head.next) {
        return head;
    }
    while(last.next !== null) {
        last = last.next;
        l++;
    }
    k = k%l;
    
    //if (k === 0) return head;
    while(k < l-1) {
        curr = curr.next;
        k++;
    }
    
    last.next = head;
    head = curr.next;
    curr.next = null;

    return head;

};

var a = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

console.log((rotateList(a, 2)).print());