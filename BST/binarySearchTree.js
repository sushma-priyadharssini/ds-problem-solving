import TreeNode from '../trees/index.js';
import Stack from '../stack/index.js';
import Queue from '../queue/index.js';


export default class BinarySearchTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    insert(val) {
        let newNode = new TreeNode(val)
        if (this.root === null) this.root = newNode
        else this.insertNode(this.root, newNode)
    }

    insertNode(node, newNode) {
        if (node === null) return
        if (newNode.value < node.value) {
            if (node.left === null) node.left = newNode
            else this.insertNode(node.left, newNode)
        }
        else if (newNode.value > node.value) {
            if (node.right === null) node.right = newNode
            else this.insertNode(node.right, newNode)
        }
    }

    contains(val) {
        let curr = this.root;
        let found = false;
        while (curr && !found) {
            if (curr.value < val) curr = curr.left
            else if (curr.value > val) curr = curr.right
            else found = true
        }
        return found ? 'found' : 'not found'
    }

    remove(val) {
        this.root = this.removeNode(this.root, val)
    }

    removeNode(node, val) {
        // if the root is null then tree is empty
        if (node === null) return null;

        // if data to be delete is less than roots data then move to left subtree
        if (val < node.value) {
            node.left = this.removeNode(node.left, val)
            return node
            // if data to be delete is greater than roots data then move to right subtree
        } else if (val > node.value) {
            node.right = this.removeNode(node.right, val)
            return node
            // if data is similar to the root's data then delete this node
        } else {
            // deleting node with no children
            if (node.left === null && node.right === null) {
                node = null
                return node
            }
            // deleting node with one children
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node
            } else {
                // Deleting node with two children, minimum node of the right subtree is stored in aux
                let min = this.getMinNode(node.right)
                node.value = min.value
                node.right = this.removeNode(node.right, min.value)
                return node;
            }
        }
    }

    getMaxNode(node = this.root) {
        while (node.right) {
            node = node.right
        }
        return node
    }

    getMinNode(node = this.root) {
        while (node.left) {
            node = node.left
        }
        return node
    }


    add(value) {
        let newNode = new TreeNode(value);

        if (this.root) {
            let { found, parent } = this.findParentAndNode(value)
            if (found) {
                found.meta.multiplicity = (found.meta.multiplicity || 1) + 1;
            } else if (value < parent.value) {
                parent.left = newNode;
            } else {
                parent.right = newNode;
            }
        } else {
            this.root = newNode
        }
        this.size++;
        return newNode
    }

    find(value) {
        return this.findParentAndNode(value).found;
    }

    delete(value) {
        let nodeToRemove = this.find(value);

        if (!nodeToRemove) return false;

        let nodeToRemoveChildren = this.combineLeftToRightSubtree(nodeToRemove);

        if (nodeToRemove?.meta?.multiplicity > 1) {
            nodeToRemove.meta.multiplicity = -1;
        } else if (this.root === nodeToRemove) {
            nodeToRemoveChildren.parent = null;
            this.root = nodeToRemoveChildren;
        } else {
            let { parent } = nodeToRemove;
            if (nodeToRemove.value > parent.value) {
                parent.right = nodeToRemoveChildren;
            } else {
                parent.left = nodeToRemoveChildren;
            }
            // If nodeToRemove is not leaf node
            if (nodeToRemoveChildren) {
                nodeToRemoveChildren.parent = parent;
            }

        }
        this.size--;
        return true;
    }

    combineLeftToRightSubtree(node) {
        if (node.right) {
            let leftNode = this.getLeftMostNode(node.right);
            leftNode.left = node.left;
            return node.right;
        }
        return node.left;
    }

    getLeftMostNode(node) {
        let leftNode = node;
        while (node) {
            leftNode = node;
            node = node.left;
        }
        return leftNode;
    }

    findParentAndNode(value) {
        let parent;
        let node = this.root;
        while (node) {
            if (node.value === value) {
                break;
            }
            parent = node;
            node = value >= node.value ? node.right : node.left
        }
        return { found: node, parent }
    }

    inOrderTraversal(node = this.root) {
        if (node !== null) {
            if (node.left) { this.inOrderTraversal(node.left); }
            console.log(node.value);
            if (node.right) { this.inOrderTraversal(node.right); }
        }
    }

    postOrderTraversal(node = this.root) {
        if (node !== null) {
            if (node.left) { this.postOrderTraversal(node.left); }
            if (node.right) { this.postOrderTraversal(node.right); }
            console.log(node.value);
        }
    }

    preOrderTraversal(node = this.root) {
        if (node !== null) {
            console.log(node.value);
            if (node.left) { this.preOrderTraversal(node.left); }
            if (node.right) { this.preOrderTraversal(node.right); }
        }
    }

    // Depth-first search is another way to navigate a graph from an initial vertex by recursively the first adjacent node of each vertex found.
    dfs() {
        const stack = new Stack();
        stack.push(this.root);

        while (!stack.isEmpty()) {
            const node = stack.pop();
            console.log(node.value);
            // reverse array, so left gets removed before right
            node.descendants.reverse().forEach(child => stack.push(child));
        }
    }

    // Breadth-first search is a way to navigate a graph from an initial vertex by visiting all the adjacent nodes first. one by one level
    bfs() {
        const queue = new Queue();
        queue.enqueue(this.root);

        while (!queue.isEmpty()) {
            const node = queue.dequeue();
            console.log(node.value);
            node.descendants.forEach(child => queue.enqueue(child));
        }
    }
}

const a = new BinarySearchTree();
a.add(30);
a.add(40);
a.add(35);
a.add(50);
a.add(10);
a.add(15);
a.add(12);
a.inOrderTraversal()
console.log('Inorder Traversal ----------------------------------------------');
a.postOrderTraversal()
console.log('Postorder Traversal ----------------------------------------------');
a.preOrderTraversal()
console.log('Preorder Traversal ----------------------------------------------');
console.log(a.getMinNode().value);
console.log(a.getMaxNode().value);
console.log('----------------------------------------------');
a.delete(12);
a.inOrderTraversal()
console.log('Removed 12 ----------------------------------------------');
a.delete(10);
a.inOrderTraversal()
console.log('Removed 10 ----------------------------------------------');
a.delete(40);
a.inOrderTraversal()
console.log('Removed 40 ----------------------------------------------');
const b = new BinarySearchTree();
b.add(10);
b.add(5);
b.add(4);
b.add(3);
b.add(30);
b.add(15);
b.add(40);
b.dfs(); // same as pre order traversal
console.log('DFS ----------------------------------------------');
b.bfs();
console.log('BFS ----------------------------------------------');


