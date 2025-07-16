import BinaryTreeNode from "./index.js";


// Recursive
var postorderTraversalRecursive = function (root) {
    let res = [];
    var recursiveTraversal = function (node) {
        if (!node) return;
        if (node.left) recursiveTraversal(node.left)
        if (node.right) recursiveTraversal(node.right)
        res.push(node.value)
    }
    recursiveTraversal(root, res);
    return res;
};

// Using Stack - Iterative Depth First Search
var postorderTraversalUsingStack = function (root) {
    let stack = [], res = [];
    let curr = root;

    while (curr || stack.length > 0) {
        if (curr) {
            res.push(curr.value)
            stack.push(curr);
            curr = curr.right;
        } else {
            curr = stack.pop();
            curr = curr.left;
        }

    }
    return res.reverse();
};

let root = new BinaryTreeNode(1);
root.left = new BinaryTreeNode(2)
root.left.left = new BinaryTreeNode(4)
root.left.right = new BinaryTreeNode(5)
root.right = new BinaryTreeNode(3)
root.right.left = new BinaryTreeNode(6)
root.right.right = new BinaryTreeNode(7)

console.log(postorderTraversalRecursive(root))
console.log(postorderTraversalUsingStack(root))