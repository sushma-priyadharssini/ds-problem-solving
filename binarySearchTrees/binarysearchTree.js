import TreeNode from './treeNode.js';
import Stack from '../stack/stack.js';
import Queue from '../queue/queue.js';


export default class BinarySearchTree {
    constructor() {
      this.root = null;
      this.size = 0;
    }

    getMaxNode(node=this.root) { 
        while(node.right) {
            node = node.right
        }
        return node
    }

    getMinNode(node= this.root) { 
        while(node.left) {
            node = node.left
        }
        return node
    }
      
  
    add(value) { 
        let newNode = new TreeNode(value);

        if(this.root) {
            let { found, parent } = this.findParentAndNode(value)
            if(found) {
                found.meta.multiplicity = (found.meta.multiplicity || 1) + 1;
            } else if(value < parent.value) {
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

        if(nodeToRemove?.meta?.multiplicity > 1) {
            nodeToRemove.meta.multiplicity =-1;
        } else if(this.root === nodeToRemove) {
            nodeToRemoveChildren.parent = null;
            this.root = nodeToRemoveChildren;
        } else {
            let { parent } = nodeToRemove;
            if(nodeToRemove.value > parent.value) {
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
        if(node.right) {
            let leftNode = this.getLeftMostNode(node.right);
            leftNode.left = node.left;
            return node.right;
        }
        return node.left;
    }

    getLeftMostNode(node) {
        let leftNode = node;
        while(node) {
            leftNode = node;
            node = node.left;
        }
        return leftNode;
    }
    
    findParentAndNode(value) {
        let parent;
        let node = this.root;
        while(node) {
            if(node.value === value) {
                break;
            }
            parent = node;
            node = value >= node.value ? node.right : node.left
        }
        return { found: node, parent }
    }

    inOrderTraversal(node = this.root) {
        if(node!== null) {
            if (node.left) { this.inOrderTraversal(node.left); }
            console.log(node.value);
            if (node.right) { this.inOrderTraversal(node.right); }
        }
    }

    postOrderTraversal(node = this.root) {
        if(node!== null) {
            if (node.left) { this.postOrderTraversal(node.left); }
            if (node.right) { this.postOrderTraversal(node.right); }
            console.log(node.value);
        }
    }

    preOrderTraversal(node = this.root) {
        if(node!== null) {
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


