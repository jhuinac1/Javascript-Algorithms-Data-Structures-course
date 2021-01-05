

/**
 insertionSort

 start by picking the second element in the array

 now compare the second element with the one before it and swap it if necessary

continue to the next element and if it is incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place

Repeat until the array is sorted.
 */



const swap = (arr, first, second) => {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}


const insertionSort = (array) => {

    for (let flag = 1; flag < array.length; flag++) {
        let temp = array[flag];
        let index = flag - 1;
        for (let j = flag - 1; j >= 0 && arr[j] > temp; j--) {
            array[j + 1] = array[j];
            index = j;
        }
        array[index + 1] = temp;
    }
    return array;
}

console.log(insertionSort([5, 4, 8, 7, 9, 4, 3, 2, 4, 0, 10]));
