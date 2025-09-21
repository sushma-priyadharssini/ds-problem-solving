function isSubstring(text, pattern) {
    const n = text.length;
    const m = pattern.length;

    if (m > n) return false; // pattern longer than text

    for (let i = 0; i <= n - m; i++) {
        let window = text.slice(i, i + m); // current window of size m
        if (window === pattern) {
            return true;
        }
    }

    return false;
}

console.log(isSubstring("abcde", "bcd"))