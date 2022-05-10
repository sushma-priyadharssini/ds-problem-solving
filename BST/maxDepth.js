import BinarySearchTree from "./binarySearchTree.js";

const b = new BinarySearchTree();
b.insert(30)
b.insert(40);
b.insert(35);
b.insert(50);
b.insert(10);
b.insert(15);
b.insert(12);

let maxDepth = function(root) {
    const calc = (node) => {
        if (!node) return 0
        return Math.max(1 + calc(node.left), 1 + calc(node.right))
    }
    return calc(root)
};

console.log(maxDepth(b.root));