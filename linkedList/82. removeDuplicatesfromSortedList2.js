import ListNode from './index.js';


var deleteDuplicates = function(head) {
    if(!head || !head.next) return head;
    
    let newHead = new ListNode(0);
    let curr = head;
    let newCurr = newHead; 
    
   while(curr) {
       let val = curr.val
       if(curr.next && curr.next.val === val) {
           curr = curr.next;
           while(curr && curr.val === val) curr = curr.next
       } else {
           newCurr.next = curr;
           newCurr = newCurr.next;
           curr = curr.next;
           newCurr.next = null;
       }
   }
    
    return newHead.next;
    
};

var a = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(3, new ListNode(3))))));

deleteDuplicates(a).print();