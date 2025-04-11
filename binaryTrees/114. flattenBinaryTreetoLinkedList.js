import BinaryTreeNode from './binaryTree.js';

let prev = null;
var flatten = function(root) {
   if(!root) return

    flatten(root.right);
    flatten(root.left);
    root.right = prev;
    root.left = null;
    prev=root;
};

const a = new BinarySearchTree();
a.add(1);
a.add(2);
a.add(5);
a.add(3);
a.add(4);
a.add(6);
a.preOrderTraversal()
flatten(a);
a.preOrderTraversal()