// ["add", "boook", "break"]

function minReplaceCount(word) {
    let totalcount = 0;
    let charCount = 1;
    for (let i = 0; i < word.length; i++) {
        if (i > 0 && word[i] === word[i - 1]) {
            charCount += 1
        } else {
            totalcount += Math.floor(charCount / 2);
            charCount = 1;
        }
    }
    if (charCount > 0) {
        totalcount += Math.floor(charCount / 2);
    }
    return totalcount
}

console.log(minReplaceCount("bbbbaaad"))