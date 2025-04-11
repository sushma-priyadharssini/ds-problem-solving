/* 
Verify if p or q is found in the left subtree or right subtree
Then, verify if the current node is p or q
If one of p or q is found in the left or right subtree, and one of p or q is the node itself, we have found the LCA
If both p and q are found in the the left or right subtree, we have found the LCA */
import BinaryTreeNode from "./binaryTree.js";

const b = new BinaryTreeNode(3);
b.left= new BinaryTreeNode(5)
b.left.left= new BinaryTreeNode(6)
b.left.right=new BinaryTreeNode(2)
b.right=new BinaryTreeNode(1)
b.right.left=new BinaryTreeNode(0)
b.right.right=new BinaryTreeNode(8)


const lowestCommonAncestor = function(root, p, q) {
    if(root===null) return null
    if(root===p||root===q) return root

    let left=lowestCommonAncestor(root.left, p,q)
    let right= lowestCommonAncestor(root.right, p,q)

    if(left!==null && right!==null) {
        return root
    } else if(left!==null) {
        return left
    } else {
        return right
    }
};

console.log(lowestCommonAncestor(b, b.left, b.right))