/* 
You are given an array people where people[i] is the weight of the ith person, 
and an infinite number of boats where each boat can carry a maximum weight of limit. 
Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.
Return the minimum number of boats to carry every given person.
 */
var numRescueBoats = function (people, limit) {
  //   people.sort((a, b) => a - b);
  //  instead of sorting we can use some space and avoid O(nlogn) and do in O(n)
  const m = Math.max(...people);
  const count = new Array(m + 1).fill(0);
  for (const p of people) {
    count[p]++;
  }

  let idx = 0,
    i = 1;
  while (idx < people.length) {
    while (count[i] === 0) {
      i++;
    }
    people[idx++] = i;
    count[i]--;
  }

  let boats = 0;
  let l = 0, r = people.length - 1

  while (l <= r) {
    let weight = people[l] + people[r];
    boats++;
    if (weight <= limit) {
      r--
    }
    l++
  }
  return boats
};
