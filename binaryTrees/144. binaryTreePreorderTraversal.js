import BinaryTreeNode from "./index.js";


// Recursive - O(n)
var preorderTraversalRecursive = function (root) {
    let res = [];
    var recursiveTraversal = function (node) {
        if (!node) return;
        res.push(node.value)
        if (node.left) recursiveTraversal(node.left)
        if (node.right) recursiveTraversal(node.right)
    }
    recursiveTraversal(root, res);
    return res;
};

// Using Stack - Iterative Depth First Search - O(n)
var preorderTraversalUsingStack = function (root) {
    let stack = [], res = [];
    let curr = root;

    while (curr || stack.length > 0) {
        if (curr) {
            res.push(curr.value);
            stack.push(curr.right);
            curr = curr.left;
        } else {
            curr = stack.pop();
        }
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

console.log(preorderTraversalRecursive(root))
console.log(preorderTraversalUsingStack(root))