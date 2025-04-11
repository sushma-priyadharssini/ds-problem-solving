import Node from './binaryTree.js'

let maxLevel = -1;
let res = -1;
function find(root,level) {
    if (root != null) {
        if (level > maxLevel) {
            res = root.value;
            maxLevel = level;
        }
        find(root.left, ++level);
        find(root.right, level);
    }
}
 
// Returns value of deepest node
function deepestNode(root){ 
    find(root, 0)
    return res;
}


// Method 2:
function height(node) {
    if(node===null) return 0
    let lh=height(node.left)
    let rh=height(node.right)
    return Math.max(lh, rh) +1
}

function deepestNodes(root, level) {
    if(root == null) return;
    if(level===1) console.log(root.value)
    else if(level>1) {
        deepestNodes(root.left, level-1)
        deepestNodes(root.right, level-1)
    }
}

function deepestNode1(root) {
    let h = height(root)
    deepestNodes(root, h)
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);
root.right.left.right = new Node(7);
root.right.right.right = new Node(8);
root.right.left.right.left = new Node(9);

console.log(deepestNode1(root))
