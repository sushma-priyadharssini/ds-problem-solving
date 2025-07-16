function maxHeight(root) {
    if (root === null) {
        return 0
    }
    return 1 + Math.max(maxHeight(root.left), maxHeight(root.right))
}

// BruteForce - O(n2)
var isBalanced = function (root) {
    if (root === null) return true;
    const left = maxHeight(root.left);
    const right = maxHeight(root.right);
    if (Math.abs(left - right) > 1) {
        return false;
    }
    return isBalanced(root.left) && isBalanced(root.right);
};

// DFS - O(n)
function isBalanced(root) {
    return dfs(root)[0] === 1;
}

var dfs = function (root) {
    if (root === null) return [1, 0];
    const left = dfs(root.left);
    const right = dfs(root.right);
    const height = 1 + Math.max(left[1], right[1]);
    const isBalanced = left[0] === 1 && right[0] === 1 && (Math.abs(left[1] - right[1]) <= 1)
    return [isBalanced ? 1 : 0, height]
};
