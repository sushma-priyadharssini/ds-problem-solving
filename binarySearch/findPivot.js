let array = [1, 3, 6, 8, 9, 10, 12, 15, 17, 19, 20, 45, 67, 89, 90, 100, 98, 54, 32, 21, 7, 2];

function largest(arr, left, right) {
	const mid = Math.floor((left + right)/2) + 1;
  
  if(arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]) {
  	return arr[mid];
  }
  
  if (arr[mid] > arr[mid-1]) {
 
  	return largest(arr, mid, right)
  } 
  if (arr[mid] < arr[mid-1]) {

  	return largest(arr, left, mid-1)
  }

}

function findLargest(arr) {
	return largest(arr, 0, arr.length-1)
}

console.log(findLargest(array))