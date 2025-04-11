import TreeNode from './treeNode.js';
// import Stack from '../stack/stack.js';
// import Queue from '../queue/queue.js';


export default class BinarySearchTree {
    constructor() {
      this.root = null;
      this.size = 0;
    }

    insert(value){
        var newNode = new TreeNode(value);
        if(this.root === null){
           this.root = newNode;
        } else{
           this.insertNode(this.root, newNode);
        };
    }

    insertNode(node, newNode){
        if(newNode.value < node.value){
           if(node.left === null) {
              node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if(node.right === null) {
              node.right = newNode;
            } else{
                this.insertNode(node.right,newNode);
            }
        }
    }

    contains(val) {
        if (!this.root) return undefined;
        let current = this.root,
            found = false;
      
        while (current && !found) {
          if (val < current.value) current = current.left;
          else if (val > current.value) current = current.right;
          else found = true;
        };
      
        if (!found) return 'Nothing Found!';
        return current;
    }

    remove(value) {
        this.root = this.removeNode(this.root, value); // root is re-initialized with root of a modified tree.
    }
 
    // Method to remove node with a given data it recur over the tree to find the data and removes it
    removeNode(node, key) {
        // if the root is null then tree is empty
        if(node === null) return null;
        // if data to be delete is less than roots data then move to left subtree
        else if(key < node.value) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        // if data to be delete is greater than roots data then move to right subtree
        else if(key > node.value) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        // if data is similar to the root's data then delete this node
        else {
            // deleting node with no children
            if(node.left === null && node.right === null) {
                node = null;
                return node;
            }
            // deleting node with one children
            if(node.left === null) {
                node = node.right;
                return node;
            }
            else if(node.right === null) {
                node = node.left;
                return node;
            }
            // Deleting node with two children, minimum node of the right subtree is stored in aux
            var aux = this.getMinNode(node.right);
            node.value = aux.value;
    
            node.right = this.removeNode(node.right, aux.value);
            return node;
        }
    }

    getRootNode() {
        return this.root;
    }

    getMaxNode(node=this.root) { 
        while(node.right) {
            node = node.right
        }
        return node
    }

    getMinNode(node= this.root) { 
        if(node.left === null) return node;
        return this.getMinNode(node.left);
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
    dfs(tree) {
        if (tree === null) {
            return;
        }
        let stack = [tree]
        while (stack.length > 0) {
            let item = stack.pop()
            console.log(item.value)
    
            if (item.left === null && item.right === null) {
                continue
            }
            if (item.right !== null) {
                stack.push(item.right)
            }
            if (item.left !== null) {
                stack.push(item.left)
            }
        }
    }

    // Breadth-first search is a way to navigate a graph from an initial vertex by visiting all the adjacent nodes first. one by one level
    bfs(tree) {
        if (tree === null) {
            return;
        }
        let queue = [tree]
        while (queue.length > 0) {
            let item = queue.shift()
            console.log(item.value)
    
            if (item.left === null && item.right === null) {
                continue
            }
            if (item.left !== null) {
                queue.push(item.left)
            }
            if (item.right !== null) {
                queue.push(item.right)
            }
        }
    }
}