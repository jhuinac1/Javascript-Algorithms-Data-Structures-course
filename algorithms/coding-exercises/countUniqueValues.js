/**
 * MULTIPLE POINTERS - COUNTUNIQUEVALUES
 * 
 *  implement a function calledd countUniqueVales, which accepts a sored array, and counts the unique values in the array. There can be negative numbers in the array, but it will alaways be sorted.
 * 
 * 
 * countUniqueValues([1,1,1,1,2]) //2
 * countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) //7
 * countUniqueValues([]) //0
 * countUniqueValues([-2,-1,-1,0,1]) //4
 */


const countUniqueValues = (arr) => {
    if (arr.length == 0 || !arr) {
        return 0;
    }
    if (arr.length == 1) {
        return 1;
    }

    let counter = 1;
    let val = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (val !== arr[i]) {
            val = arr[i];
            counter++;
        }
    }
    return counter;
}

console.log(countUniqueValues([1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));