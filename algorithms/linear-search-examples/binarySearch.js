
// ********** Binary Search Pseudocode


/**
 this function accepts a sorted array and a value

 create a left pointer at the start of the array and a right pointer at the end of the array

 while the left pointer comes before the right pointer:
  create a pointer in the middle
  if you find the value you wat, return the index
  if the value is too small, move the left pointer up
  if the value is too large, move the right pointer down

If you never find the value, return 1;
 */


const binarySearch = (array, value) => {
    let left = 0;
    let right = array.length - 1;
    let middle = Math.floor(right / 2);

    // let control = 1;
    while (left < right && middle !== left && middle !== right) {
        // console.log("control", control, ":", left, middle, right, " middle value is = ", array[middle]);
        if (array[middle] === value) {
            return middle;
        }
        if (array[left] === value) { return left; }
        if (array[right] === value) { return right; }
        if (value < array[middle]) {
            right = middle;
            middle = Math.floor(right / 2);
        } else {
            left = middle;
            middle = Math.floor((right - left) / 2) + left;
        }
        // if (control > 20) {
        //     return;
        // }
        // control++;
    }
    return -1;
}


// console.log(binarySearch([1, 2, 3, 4, 5], 2)); //1
// console.log(binarySearch([1, 2, 3, 4, 5], 3)); //2
// console.log(binarySearch([1, 2, 3, 4, 5], 5)); //4
// console.log(binarySearch([1, 2, 3, 4, 5], 6)); //-1
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)); //-1