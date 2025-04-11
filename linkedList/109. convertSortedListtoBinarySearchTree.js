import ListNode from './linkedList.js';

/* 
Input: head = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST. */

var constructBST = function (head, foot) {
    if(head===foot) return null
    
    let slow=head;
    let fast=head;
    while(fast!==foot && fast.next!==foot) {
        slow=slow.next;
        fast=fast.next.next;
    }
    let node = new TreeNode(slow.val);
    node.left = constructBST(head, slow);
    node.right = constructBST(slow.next,foot)
    return node
}

var sortedListToBST = function(head) {
    return constructBST(head, null)
};


let a = new ListNode(-10, new ListNode(-3, new ListNode(0, new ListNode(5, new ListNode(9)))));
sortedListToBST(a).print()