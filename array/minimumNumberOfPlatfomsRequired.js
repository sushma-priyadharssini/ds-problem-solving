function findPlatform(arr, dep, n) {
    arr = arr.sort((a,b) => a-b);
    dep = dep.sort((a,b) => a-b);

    let plat_needed = 1;
    let result = 1;
    let i = 1;
    let j = 0;

    while (i < n && j < n) {
        if (arr[i] <= dep[j]) {
            plat_needed++;
            i++;
        }
     
        else if (arr[i] > dep[j]) {
            plat_needed--;
            j++;
        }
 
        if (plat_needed > result) result = plat_needed;
    }
     
    return result;
}

let arr = new Array(900, 940, 950, 1100, 1500, 1800);
let dep = new Array(910, 1200, 1120, 1130, 1900, 2000);
let n = arr.length

console.group(findPlatform(arr, dep, n))
