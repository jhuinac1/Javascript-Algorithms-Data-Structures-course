
/**
 Merging Arrays

 in order to implement merge sort, it's useful to first implement a fucntion responsible for merging two sorted arrays

 Give two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays

 This function shoudl run O( n + m) time and O (n + m) space and should not modify the marameters passed to it.


 ****
 Create an empty array, take a look at the smalles values in each input array.
 while there are still values we haven't looked at...
    if the value in the first array is smaller than the value in the second array, push the value in the first array

    if the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array.

    Once we exhaust one array, push in all remaining values from the other array.


Break up the array into halves until you have arrays that are empty or have one element

Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array

Once the array has been merged back together, return the merged (and sorted!) array
 */


const mergeArray = (array1, array2) => {
    let first = 0;
    let second = 0;
    let newArray = [];

    while (first < array1.length && second < array2.length) {
        if (array1[first] < array2[second]) {
            newArray.push(array1[first++]);
        } else {
            newArray.push(array2[second++]);
        }
    }
    newArray.push(...array1.slice(first))
    newArray.push(...array2.slice(second))

    return newArray;
}

const mergeSort = (array) => {
    if (array.length <= 1) {
        return array;
    }
    let middle = Math.floor(array.length / 2);
    let leftArray = mergeSort(array.slice(0, middle));
    let rightArray = mergeSort(array.slice(middle));
    return mergeArray(leftArray, rightArray);
}


x = mergeSort([2, 155, 999, 25140, 0, 98, 70, 1, 7, 1, 300, 4, 3, 5, 9, 10, 21, 12])
console.log(x)