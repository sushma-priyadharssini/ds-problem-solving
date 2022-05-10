import TreeNode from "./treeNode.js";

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.size = 0
    }

    insert (val) {
        let newNode = new TreeNode(val)
        if(this.root === null) this.root = newNode
        else this.insertNode(this.root, newNode)
    }

    insertNode (node, newNode) {
        if(node===null)return
        if(newNode.value < node.value) {
            if(node.left === null) node.left = newNode
            else this.insertNode(node.left, newNode)
        }
        else if (newNode.value > node.value) {
            if(node.right === null) node.right = newNode
            else this.insertNode(node.right, newNode)
        }
    }

    contains (val) {
        let curr = this.root;
        let found = false;
        while(curr && !found) {
            if(curr.value<val) curr=curr.left
            else if(curr.value>val) curr=curr.right
            else found=true
        }
        return found ? 'found' : 'not found'
    }

    remove (val) {
        this.root=this.removeNode(this.root, val)
    }

    removeNode (node, val) {
        if(node===null) return null;

        if(val<node.value) {
            node.left=this.removeNode(node.left, val)
            return node
        } else if (val > node.value) {
            node.right=this.removeNode(node.right, val)
            return node
        } else {
            if(node.left===null && node.right===null) {
                node=null
                return node
            } 
            if(node.left===null) {
                node=node.right;
                return node;
            } else if(node.right===null) {
                node=node.left;
                return node
            } else {
                let min = this.getMinNode(node.right)
                node.value = min.value
                node.right=this.removeNode(node.right, min.value)
                return node;
            }
        }
    }

    getMinNode(node=this.root) {
        if(node.left===null) return node
        return this.getMinNode(node.left);
    }

    getMaxNode(node=this.root) {
        if(node.right===null) return node
        return this.getMaxNode(node.right);
    }

    preOrderTraversal(node = this.root) {
        if(node !==null) {
            console.log(node.value);
            if (node.left) this.preOrderTraversal(node.left)
            if (node.right) this.preOrderTraversal(node.right)
        }
    }

    postOrderTraversal(node = this.root) {
        if(node !==null) {
            if (node.left) this.postOrderTraversal(node.left)
            if (node.right) this.postOrderTraversal(node.right)
            console.log(node.value);
        }
    }

    inOrderTraversal(node = this.root) {
        if(node !==null) {
            if (node.left) this.inOrderTraversal(node.left)
            console.log(node.value);
            if (node.right) this.inOrderTraversal(node.right)
        }
    }

    dfs(node = this.root) {
        if(node===null) return

        let stack=[node]
        while(stack.length>0) {
            let item = stack.pop;
            console.log(item.value)

            if(node.left===null && node.right===null) continue
            else if(node.right!==null) stack.push(node.right)
            else if(node.left !== null) stack.push(node.right)
        }
    }

    bfs(node = this.root) {
        if(node===null) return

        let queue=[node]
        while(queue.length>0) {
            let item = queue.shift();
            console.log(item.value)

            if(node.left===null && node.right===null) continue
            else if(node.left !== null) queue.push(node.right)
            else if(node.right!==null) queue.push(node.right)
        }
    }
}









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
b.remove(12);
b.preOrderTraversal()
console.log('Removed 12 ----------------------------------------------');
b.remove(10);
b.preOrderTraversal()
console.log('Removed 10 ----------------------------------------------');
b.remove(40);
b.preOrderTraversal()
console.log('Removed 40 ----------------------------------------------');
// b.dfs(b.root); // same as pre order traversal
// console.log('DFS ----------------------------------------------');
// b.bfs(b.root);
// console.log('BFS ----------------------------------------------');