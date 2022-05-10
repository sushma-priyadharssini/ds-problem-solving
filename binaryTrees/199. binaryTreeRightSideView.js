var rightSideView = function(root) {
    let res=[];
    let queue=[{ node: root, level:0}]
    while(now=queue.shift()) {
        if(!now.node) continue
        res[now.level] = now.node.val;
        queue.push({ node: now.node.left, level: now.level+1})
        queue.push({ node: now.node.right, level: now.level+1})
    }
    return res;
};