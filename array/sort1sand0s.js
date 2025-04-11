function sort1sAnd0s(arr) {
  let p1 = 0;
  let p2 = arr.length - 1;
  while (p1 < p2) {
    if (arr[p1] > arr[p2]) {
      let temp = arr[p1];
      arr[p1] = arr[p2];
      arr[p2] = temp;
      p1++;
      p2--;
    } else if (arr[p1] === arr[p2]) {
      if (arr[p1] === 0) {
        p1++;
      } else {
        p2--;
      }
    } else {
      p1++;
      p2--;
    }
  }
  return arr;
}

console.log(sort1sAnd0s([0, 1, 0, 1, 0, 1, 0]));
