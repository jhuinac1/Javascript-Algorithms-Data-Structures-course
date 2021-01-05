

/**
 flatten

    Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values falttened.
 */


// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]



const flatten = (array) => {

    //this new array will store values(numbers) only
    const newArray = [];

    ///doing recursive with a helper function
    const findValues = (array2) => {
        if (array2.length === 0) {
            return;
        }
        if (typeof array2[0] === "number") {
            newArray.push(array2[0]);
        } else {
            findValues(array2[0]);
        }

        findValues(array2.slice(1));
    }

    findValues(array);

    return newArray;
}

console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[1], [2], [3]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));


// ANOTHER SOLUTION *******8
// function flatten(oldArr){
//     var newArr = []
//         for(var i = 0; i < oldArr.length; i++){
//           if(Array.isArray(oldArr[i])){
//                 newArr = newArr.concat(flatten(oldArr[i]))
//           } else {
//                 newArr.push(oldArr[i])
//           }
//     } 
//     return newArr;
//   }