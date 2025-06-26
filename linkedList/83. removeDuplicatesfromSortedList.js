import ListNode from './index.js';


var deleteDuplicates = function(head) {
    if(!head || !head.next) return head;
    
    let curr = head;
    let next = curr.next;
    
    while(next.next !== null) {
        if(curr.val === next.val) {
            let temp = next.next;
            curr.next = temp;
            next = temp;
        } else {
            curr=curr.next;
            next=curr.next;
        }
    }
    if(curr.val === next.val) {
        curr.next = null;
    }
    return head
    
};

var deleteDuplicates = function(head) {
    if(!head || !head.next) return head;
    
    let curr = head;
    
    while(curr.next !== null) {
    	if(curr.val === curr.next.val) {
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
    }
    return head;
};

var a = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(3, new ListNode(3))))));

deleteDuplicates(a).print();