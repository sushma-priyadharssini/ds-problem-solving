function isSameTree(p, q) {
    if (p === null && q === null) return true
    if (p && q && p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    } else {
        return false
    }
}

function isSubtree(root, subRoot) {
    if (!subRoot) {
        return true;
    }
    if (!root) {
        return false;
    }
    if (isSameTree(root, subRoot)) {
        return true
    }
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}