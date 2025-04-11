import BinaryTreeNode from "./binaryTree.js";

var sumOfLeftLeaves = function(root) {
    let sum=0;
    function recursive(node, dir) {
        if (node===null) return;
        if(node.left===null && node.right===null && dir==='l') sum=sum+node.value
        recursive(node.left, 'l')
        recursive(node.right, 'r')
    }
    recursive(root, 'r')
    return sum
};

let root = new BinaryTreeNode(1);
root.left = new BinaryTreeNode(2);
root.left.left = new BinaryTreeNode(4);
root.left.right = new BinaryTreeNode(5);
root.right = new BinaryTreeNode(3);
root.right.right = new BinaryTreeNode(7);
root.right.left = new BinaryTreeNode(6);
root.right.left.right = new BinaryTreeNode(8);
console.log(sumOfLeftLeaves(root))
