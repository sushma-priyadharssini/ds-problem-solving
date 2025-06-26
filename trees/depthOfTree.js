import TreeNode from "./index.js";

function depthOfTree(ptr) {
    if (ptr == null) return 0;

    var maxdepth = 0;
    for (var it of ptr.descendants)
        maxdepth = Math.max(maxdepth, depthOfTree(it));

    return maxdepth + 1;
}

var root = new TreeNode('A');
(root.descendants).push(new TreeNode('B'));
(root.descendants).push(new TreeNode('F'));
(root.descendants).push(new TreeNode('D'));
(root.descendants).push(new TreeNode('E'));
(root.descendants[0].descendants).push(new TreeNode('K'));
(root.descendants[0].descendants).push(new TreeNode('J'));
(root.descendants[2].descendants).push(new TreeNode('G'));
(root.descendants[3].descendants).push(new TreeNode('C'));
(root.descendants[3].descendants).push(new TreeNode('H'));
(root.descendants[3].descendants).push(new TreeNode('I'));
(root.descendants[0].descendants[0].descendants).push(new TreeNode('N'));
(root.descendants[0].descendants[0].descendants).push(new TreeNode('M'));
(root.descendants[3].descendants[2].descendants).push(new TreeNode('L'));
console.log(depthOfTree(root));