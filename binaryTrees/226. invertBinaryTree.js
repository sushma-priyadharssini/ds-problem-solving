import Queue from "../queue/index.js"

// DFS
var invertTree = function (root) {
    if (!root) return null;
    [root.left, root.right] = [root.right, root.left]
    if (root.left) invertTree(root.left)
    if (root.right) invertTree(root.right)
    return root;
};

// BFS
function invertTree(root) {
    if (root == null) return null;
    const queue = new Queue([root]);
    while (!queue.isEmpty()) {
        let node = queue.pop();
        [node.left, node.right] = [node.right, node.left];
        if (node.left != null) queue.push(node.left);
        if (node.right != null) queue.push(node.right);
    }
    return root;
}