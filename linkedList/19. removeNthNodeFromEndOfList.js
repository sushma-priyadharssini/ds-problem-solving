import ListNode from './index.js';

var removeNthFromEnd1 = function (head, n) {
    let p = head;
    let l = 1;
    while (p.next !== null) {
        p = p.next;
        l++;
    }

    if (n === l) {
        head = head.next
    } else {
        let q = head;
        let i = 1;
        while (i !== (l - n)) {
            i++;
            q = q.next;
        }

        let temp = q.next;
        q.next = temp.next;
    }
    return head;
};

var removeNthFromEnd2 = function (head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    // move fast ahead by n+1 steps
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // move both until fast hits the end
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    // delete the nth node
    slow.next = slow.next.next;

    return dummy.next;
};

var a = new ListNode(2, new ListNode(4, new ListNode(3, new ListNode(7, new ListNode(6)))));

removeNthFromEnd2(a, 5).print();