


/**
 bubbleSort

  
 */

const swap = (arr, first, second) => {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}


const bubbleSort = (array) => {
    //this variable allows us to check if all elements are
    //sorted, then there is no need to check multiple times
    let isSwapped = false
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - (i + 1); j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
                //if an element is sorted, that means there is more to do.
                isSwapped = true;
            }
        }
        //checking if nothing was swaped after the loop, then 
        //everything is sorted. and exits;
        if (!isSwapped) {
            break;
        }
    }

    return array;
}

console.log(bubbleSort([5, 4, 8, 7, 9, 4, 3, 2, 4, 0, 10]));

