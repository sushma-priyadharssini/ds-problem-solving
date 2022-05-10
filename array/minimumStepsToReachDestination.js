function steps(source, step, dest) {
    if (Math.abs(source) > (dest))
        return Number.MAX_SAFE_INTEGER;
    if (source == dest) return step;
 
    // at each point we can go either way
    // if we go on positive side
    let pos = steps(source + step + 1,
                    step + 1, dest);
 
    // if we go on negative side
    let neg = steps(source - step - 1,
                    step + 1, dest);
 
    // minimum of both cases
    return Math.min(pos, neg);
}

steps(0, 0, 11) //5