

//SELECTION SORT
/**
 * Store the first element as the smallest value you've seen so far.
 * Compare tthis item to the nxt item i nthe array until you find a smaller number.
 * If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the aray.
 * If the "minimum" is not the value (index) you initially began with, swap the two values.
 * Repeat this with the next elelemt until the array is sorted.
 */


const swap = (arr, first, second) => {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

const selectionSort = (array) => {

    for (let flag = 0; flag < array.length - 1; flag++) {
        let minIndex = flag + 1

        for (let j = flag + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
        }
        if (array[flag] > array[minIndex]) {
            swap(array, minIndex, flag);

        }
    }
    return array;
}



console.log(selectionSort([5, 4, 8, 7, 9, 4, 3, 2, 4, 0, 10]));