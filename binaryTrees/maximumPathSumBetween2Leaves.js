import BinaryTreeNode from "./binaryTree.js";


class Res {
    constructor(val) {
        this.val = val
    }
}

function setTree (root) {
    let tmpNode=new BinaryTreeNode(0)
    if(root.right===null) {
        root.right=tmpNode
    } else {
        root.left=tmpNode
    }
    return root;
}

function maxPathSumUtil(node, res) {
    if(node===null) return 0
    if (node.left == null && node.right == null) { return node.value; }

    let ls = maxPathSumUtil(node.left, res)
    let rs = maxPathSumUtil(node.right, res)

    if(node.left!==null && node.right!==null) {
        res.val = Math.max(res.val, ls+rs+node.value)
        console.log(node.value)
        return Math.max(ls, rs) + node.value;
    }
    return node.left===null ? rs+node.value : ls+node.value
}

function maxPathSum(root) {
    let res = new Res()
    res.val = Number.MIN_VALUE;
    
    if (root.left == null || root.right == null) {
        root = setTree(root);
    }

    maxPathSumUtil(root, res)
    return res.val
}

var root = new BinaryTreeNode(-15);
root.left = new BinaryTreeNode(5);
root.right = new BinaryTreeNode(6);
root.left.left = new BinaryTreeNode(-8);
root.left.right = new BinaryTreeNode(1);
root.left.left.left = new BinaryTreeNode(2);
root.left.left.right = new BinaryTreeNode(6);
root.right.left = new BinaryTreeNode(3);
root.right.right = new BinaryTreeNode(9);
root.right.right.right = new BinaryTreeNode(0);
root.right.right.right.left = new BinaryTreeNode(4);
root.right.right.right.right = new BinaryTreeNode(-1);
root.right.right.right.right.left = new BinaryTreeNode(10);

console.log(maxPathSum(root))