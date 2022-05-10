export default class BinaryTreeNode {
    constructor(val, left, right) {
        this.value = val===undefined ? 0 : val;
        this.left = left===undefined ? null : left;
        this.right = right===undefined ? null : right;
    }
}