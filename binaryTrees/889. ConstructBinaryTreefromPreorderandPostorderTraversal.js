import TreeNode from './binaryTree.js'
let preIndex = 0;

let constructTreeUtil = function (pre, post, l, h, s) {
    if(h<l || preIndex >= s) return null
    
    let node=new TreeNode(pre[preIndex])
    preIndex++
    
    if(h==l || preIndex>=s) { return node }
    
    for(var i=0; i<post.length; i++){
        if(post[i]===pre[preIndex]) break
    }
    
    if (i <= h) {
        node.left = constructTreeUtil(pre, post, l, i, s)
        node.right = constructTreeUtil(pre, post, i+1, h-1, s)
    }
    return node;
}

var constructFromPrePost = function(preorder, postorder) {
    let n = preorder.length;
    return constructTreeUtil(preorder, postorder, 0, n-1, n)
};

console.log(constructFromPrePost([1], [1]))
