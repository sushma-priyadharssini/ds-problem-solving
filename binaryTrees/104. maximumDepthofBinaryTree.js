var maxDepth1 = function (root) {
    let maxDeep = 0;

    var findDeep = function (root, deep) {
        if (!root) {
            maxDeep = Math.max(maxDeep, deep);
            deep = 0;
            return;
        };
        if (root) {
            deep = deep + 1
        }
        findDeep(root.left, deep)
        findDeep(root.right, deep)
    };
    findDeep(root, 0)
    return maxDeep;
};

function maxDepth2(root) {
    if (root === null) {
        return 0;
    }

    return (
        1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right))
    );
}

function maxDepth3(root) {
    const q = new Queue();
    if (root !== null) {
        q.push(root);
    }

    let level = 0;
    while (q.size() > 0) {
        const size = q.size();
        for (let i = 0; i < size; i++) {
            const node = q.pop();
            if (node.left !== null) {
                q.push(node.left);
            }
            if (node.right !== null) {
                q.push(node.right);
            }
        }
        level++;
    }
    return level;
}