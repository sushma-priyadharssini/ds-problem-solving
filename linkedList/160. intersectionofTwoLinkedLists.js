let getLength = (head) => {
    let curr = head;
    let i=1
    while(curr.next !== null) {
        curr=curr.next;
        i++
    }
    return i
}

var getIntersectionNode = function(headA, headB) {
    let l1 = getLength(headA);
    let l2 = getLength(headB);
    let diff = Math.abs(l1-l2)
    
    if(l1>l2) {
        while(diff--) {
            headA = headA.next
        }
    } else {
        while(diff--) {
            headB = headB.next
        }
    }
    
    while(headA !== headB) {
        headA=headA.next;
        headB=headB.next
    }
    return headA
    
};