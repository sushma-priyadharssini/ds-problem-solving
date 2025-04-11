function findMaxGuests(arrl, exit, n) {
    arrl.sort(function(a, b){return a - b});
    exit.sort(function(a, b){return a - b});

    let guests_in = 1, max_guests = 1, time = arrl[0];
    let i = 1, j = 0;

    while (i < n && j < n) {
        if (arrl[i] <= exit[j]) {
        guests_in++;
        if (guests_in > max_guests){
            max_guests = guests_in;
            time = arrl[i];
        }
        i++;
        } else {    
        guests_in--;
        j++;
        }
    }
    return time
}
     
let arrl = [1, 2, 10, 5, 5];
let exit = [4, 5, 12, 9, 12];
let n = arrl.length;
console.log(findMaxGuests(arrl, exit, n));
     