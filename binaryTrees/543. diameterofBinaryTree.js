var maxHeight = function (root) {
    if (!root) return 0;
    return 1 + Math.max(maxHeight(root.left), maxHeight(root.right))
};

// Brute force - O(n2)
var diameterOfBinaryTree = function (root) {
    if (!root) return 0
    let leftMaxHeight = maxHeight(root.left);
    let rightMaxHeight = maxHeight(root.right);
    let diameter = leftMaxHeight + rightMaxHeight;
    let sub = Math.max(diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right))
    return Math.max(diameter, sub);
};

// DFS - O(n)
function diameterOfBinaryTree1(root) {
    const res = { a: 0 }; // can keep as array/object so that reference is passed on
    dfs(root, res);
    return res.a;
}

function dfs(root, res) {
    if (root === null) {
        return 0;
    }
    const left = dfs(root.left, res);
    const right = dfs(root.right, res);
    res.a = Math.max(res.a, left + right);
    return 1 + Math.max(left, right);
}