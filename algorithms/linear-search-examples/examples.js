


//************** */ EXERCISE 1;

//      Linear search Pseudo
//this function accepts an array and a value

//loop through the array and check if the current array element is equal to the value

//if it is, return the index at which the element is found

//if the value is never found, return -1


const linearSearch = (array, value) => {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}


