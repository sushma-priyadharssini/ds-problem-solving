import BinaryTreeNode from "./index.js";

// Recursive
var inorderTraversalRecursive = function (root) {
    let res = [];
    var recursiveTraversal = function (node) {
        if (!node) return;
        if (node.left) recursiveTraversal(node.left)
        res.push(node.value)
        if (node.right) recursiveTraversal(node.right)
    }
    recursiveTraversal(root, res);
    return res;
};

// Using Stack - Iterative Depth First Search
var inorderTraversalUsingStack = function (root) {
    let stack = [], res = [];
    let curr = root;

    while (curr || stack.length > 0) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        res.push(curr.value);
        curr = curr.right;
    }
    return res;
};

let root = new BinaryTreeNode(1);
root.left = new BinaryTreeNode(2)
root.left.left = new BinaryTreeNode(4)
root.left.right = new BinaryTreeNode(5)
root.right = new BinaryTreeNode(3)
root.right.left = new BinaryTreeNode(6)
root.right.right = new BinaryTreeNode(7)

console.log(inorderTraversalRecursive(root))
console.log(inorderTraversalUsingStack(root))