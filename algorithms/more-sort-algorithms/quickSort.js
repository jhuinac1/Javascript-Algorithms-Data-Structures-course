/**
 * 
 * First part
 Pivot Helper
    In order to implement merge sort, it's useful to first implement a function responsible arranging elements in an array on ither side of a pivot

    Given an array, this ehlper function should designate an element as the pivot 

    it should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all vales greater than the pivot are move to the right of the pivot.

    The order of elements on either side of the pivot doesn't matter!

    The helper should do this in place, that is, it should not create a new array

    When complete, the helper should return the index of teh pivot

    PICKING A PIVOT
        -The runtime of quick sort depends in part on how one selects the pivot
        -ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
        - For simplicity, we'll always chosse the pivot to be the first element (we'll talk about consequences of this later)

    PIVOT PSEUDOCODE
        -It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
        -Grab the pivot from the start of the array
        - Store the current pivot index in a variable (this will keep track of where the pivot should end up)
        - Loop through the array from the start until the end
            . If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
        -Swap the starting element (i.e. the pivot) witht he pivot index
        - Return the pivot index
 */

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp;
}

///Pivot Function
const pivot = (arr, start = 0, end = arr.length + 1) => {
    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex;
}

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))
//3


/////QuickSort Pseudocode

/**
 Call the pivot helper on the array

 -When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
 */

const quickSort = (array, left = 0, right = array.length - 1) => {
    if (left >= right) {
        return;
    }
    let point = pivot(array, left, right);
    quickSort(array, left, point - 1);
    quickSort(array, point + 1, right);
    return array;
}


let list = quickSort([4, 8, 2, 1, 5, 7, 6, 3]);
console.log(list);