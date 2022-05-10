function isCircular(path) {
    // N=0, W=1, S=2, E=3
    let x = 0, y = 0;
    let c = 1;

    for (let i = 0; i < path.length; i++) {
        let move = path[i]

        if(move==='R') {
            c=Math.floor((c+1)%4)
        }
        else if(move==='L') {
            c=Math.floor((4+c-1)%4)
        } else if(move==='G') {
            if(c===0) y++
            if(c===1) x++
            if(c===2) y--
            if(c===3) x--
        }
    }
    return x===0 && y===0
}

console.log(isCircular('GLGLGLG'))