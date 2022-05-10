import BinarySearchTree from "./binarySearchTree.js";

const b = new BinarySearchTree();
b.insert(30)
b.insert(40);
b.insert(35);
b.insert(50);
b.insert(10);
b.insert(15);
b.insert(12);


let isValidBST = (root) => {
    const helper = (node, min, max) => {
        if (!node) return true
        if (node.val <= min || node.val >= max) return false
        return helper(node.left, min, node.val) && helper(node.right, node.val, max)
    }
    return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}

console.log(isValidBST(b.root))