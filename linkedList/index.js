export default class ListNode {
    constructor (val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
   
    print() {
        let t = this;
        while(t !== null) {
            console.log(t.val);
            t = t.next;
        }
    }

    addNode(head, v) {
        let curr = this;
        while(curr.next !== null) {
            curr = curr.next;
        }
        curr.next = new ListNode(v);
    }
}