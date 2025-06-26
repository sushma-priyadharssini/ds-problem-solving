import ListNode from './index.js';

var mergeTwoLists1 = function (list1, list2) {
    let p = list1;
    let q = list2;
    let r = new ListNode();
    let curr = r;
    while (p !== null && q !== null) {
        if (p.val > q.val) {
            curr.next = new ListNode(q.val);
            q = q.next;
        } else if (q.val > p.val) {
            curr.next = new ListNode(p.val);
            p = p.next;
        } else {
            curr.next = new ListNode(p.val);
            curr.next.next = new ListNode(q.val);
            curr = curr.next;
            p = p.next;
            q = q.next;
        }
        curr = curr.next;
    }

    if (p === null) {
        curr.next = q;
    } else {
        curr.next = p;
    }

    return r.next;
};

var mergeTwoLists2 = function (list1, list2) {
    if (list1 === null) {
        return list2;
    }
    if (list2 === null) {
        return list1;
    }

    if (list1.val < list2.val) {
        list1.next = mergeTwoLists2(list1.next, list2)
        return list1;
    } else {
        list2.next = mergeTwoLists2(list1, list2.next)
        return list2;
    }
};


var a = new ListNode(1, new ListNode(2, new ListNode(4)));
var b = new ListNode(1, new ListNode(3, new ListNode(4)));

mergeTwoLists2(a, b).print();