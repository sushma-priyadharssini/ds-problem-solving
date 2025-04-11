import BinarySearchTree from "./binarySearchTree.js";

const b = new BinarySearchTree();
b.insert(30)
b.insert(40);
b.insert(35);
b.insert(50);
b.insert(10);
b.insert(15);
b.insert(12);
b.inOrderTraversal()
console.log('Inorder Traversal ----------------------------------------------');
b.postOrderTraversal()
console.log('Postorder Traversal ----------------------------------------------');
b.preOrderTraversal()
console.log('Preorder Traversal ----------------------------------------------');
console.log(b.getMinNode().value);
console.log(b.getMaxNode().value);
console.log('----------------------------------------------');
// b.remove(12);
// b.inOrderTraversal()
// console.log('Removed 12 ----------------------------------------------');
// b.remove(10);
// b.inOrderTraversal()
// console.log('Removed 10 ----------------------------------------------');
// b.remove(40);
// b.inOrderTraversal()
// console.log('Removed 40 ----------------------------------------------');
b.dfs(b.root); // same as pre order traversal
console.log('DFS ----------------------------------------------');
b.bfs(b.root);
console.log('BFS ----------------------------------------------');