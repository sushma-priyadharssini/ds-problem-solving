function depthOfTree(ptr) {
    if (ptr == null) return 0;
   
    var maxdepth = 0;
    for(var it of ptr.child)
        maxdepth = Math.max(maxdepth, depthOfTree(it));
 
    return maxdepth + 1 ;
}

var root = newNode('A');
(root.child).push(newNode('B'));
(root.child).push(newNode('F'));
(root.child).push(newNode('D'));
(root.child).push(newNode('E'));
(root.child[0].child).push(newNode('K'));
(root.child[0].child).push(newNode('J'));
(root.child[2].child).push(newNode('G'));
(root.child[3].child).push(newNode('C'));
(root.child[3].child).push(newNode('H'));
(root.child[3].child).push(newNode('I'));
(root.child[0].child[0].child).push(newNode('N'));
(root.child[0].child[0].child).push(newNode('M'));
(root.child[3].child[2].child).push(newNode('L'));
document.write(depthOfTree(root) + "<br>");