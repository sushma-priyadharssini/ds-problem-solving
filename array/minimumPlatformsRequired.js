function minimumPlatforms(arr, dep) {
    arr.sort((a, b) => a - b);
    dep.sort((a, b) => a - b);
    let currPlatforms = 0, maxPlatforms = 0, i = 0, j = 0;

    while (i < arr.length && j < dep.length) {
        if (arr[i] < dep[j]) {
            i++;
            currPlatforms += 1
        } else {
            j++;
            currPlatforms -= 1
        }
        maxPlatforms = Math.max(maxPlatforms, currPlatforms)
    }
    return maxPlatforms;
}

console.log(minimumPlatforms([900, 940, 950, 1100, 1500, 1800], [910, 1200, 1120, 1130, 1900, 2000]))
console.log(minimumPlatforms([900, 1235, 1100], [1000, 1240, 1200]))
console.log(minimumPlatforms([1000, 935, 1100], [1200, 1240, 1130]))