/**
 * RADIX SORT
 *  - radix sort is a special algorithm that works on lits aof numbers.
 *  - It does not amke comparisons between elements
 *  - (instead) It exploits the fact that information about the size of a number is ecoded in the number of digits
 *  - more digits means a bigger number
 *
 * RADIX SORT HELPERS
In order to implement radix sort, it's helpful to build a few helper functions first:

getDigit(num, place) - returns the digit in num at the given place value

getDigit(12345, 0); // 5
getDigit(12345, 1); // 4
getDigit(12345, 2); // 3
getDigit(12345, 3); // 2
getDigit(12345, 4); // 1
getDigit(12345, 5); // 0

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}


In order to implement radix sort, it's helpful to build a few helper functions first:

digitCount(num) - returns the number of digits in num

digitCount(1); // 1
digitCount(25); // 2
digitCount(314); // 3

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}


In order to implement radix sort, it's helpful to build a few helper functions first:

mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list

mostDigits([1234, 56, 7]); // 4
mostDigits([1, 1, 11111, 1]); // 5
mostDigits([12, 34, 56, 78]); // 2

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}



 */

//// STEP 1
/// FIRST HELPTER
const getDigit = (num, place) => {
    //second method
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
    // let str = num.toString();
    // return parseInt(str[str.length - 1 - place]);

}

// console.log(getDigit(12345, 0)); // 5
// console.log(getDigit(12345, 1)); // 4
// console.log(getDigit(12345, 2)); // 3
// console.log(getDigit(12345, 3)); // 2
// console.log(getDigit(12345, 4)); // 1

//  STEP 2 
//  method 1
const digitCount = (num) => {
    //Or mathematical way to solve
    //if(num === 0) return 1;
    //return Math.floor(math.log10(Math.abs(num))) + 1
    return Math.abs(num).toString().length
}

// console.log(digitCount(1)); // 1
// console.log(digitCount(25)); // 2
// console.log(digitCount(314)); // 3

// method 2
const mostDigits = (array) => {
    //use digitCount method for each element in the array and check which one is the largest
    let max = 0;
    for (let element of array) {
        max = Math.max(digitCount(element), max);
    }
    return max;
}

// mostDigits([1234, 56, 7]); // 4
// mostDigits([1, 1, 11111, 1]); // 5
// mostDigits([12, 34, 56, 78]); // 2


/**
 * 
 * NOW IMPLEMENT ALL THE FUNCTION INTO THE RADIX SORT 
 RADIX SORT PSEUDOCODE
    Define a function that accepts list of numbers
    Figure out how many digits the largest number has
    Loop from k = 0 up to this largest number of digits
    For each iteration of the loop:
    Create buckets for each digit (0 to 9)
    place each number in the corresponding bucket based on its kth digit
    Replace our existing array with values in our buckets, starting with 0 and going up to 9
    return list at the end!
 */

const radixSort = (array) => {
    let max = mostDigits(array);
    for (let i = 0; i < max; i++) {
        const buckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < array.length; j++) {
            buckets[getDigit(array[j], i)].push(array[j]);
        }

        array = [].concat(...buckets);
        // console.log(buckets)
    }
    console.log(array)
    return array;
}

radixSort([123, 23, 4])


