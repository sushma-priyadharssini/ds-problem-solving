import ListNode from './linkedList.js';

var removeNthFromEnd1 = function(head, n) {
    let p = head;
    let l = 1;
    while(p.next !== null) {
        p = p.next;
        l++;
    }

    if(n===l) {
        head = head.next
    } else {
        let q = head;
        let i = 1;
        while(i !== (l-n)) {
            i++;
            q=q.next;
        }
    
        let temp = q.next;
        q.next = temp.next;
    }
    return head;
};

var removeNthFromEnd2 = function(head, n) {
    let fast = head;
    let slow = head;
    let i = 1;
    while(i !== n) {
        fast = fast.next;
        i++;
    }

    while(fast.next !== null && fast.next.next !== null) {
        fast = fast.next;
        slow = slow.next;
        i++;
    }

    if(i===n) {
        head = head.next
    } else {
        let temp = slow.next;
        slow.next = temp.next;
    }
  
    return head;
};

var a = new ListNode(2, new ListNode(4, new ListNode(3, new ListNode(7, new ListNode(6)))));

removeNthFromEnd2(a,5).print();