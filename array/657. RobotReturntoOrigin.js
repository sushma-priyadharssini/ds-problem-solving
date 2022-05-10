var judgeCircle = function(moves) {
    let x = 0, y = 0;
    let c = 1;

    for (let i = 0; i < moves.length; i++) {
        let c = moves[i]
        if(c==='R') x++
        if(c==='L') x--
        if(c==='U') y++
        if(c==='D') y--
    }
    return x===0 && y===0
};