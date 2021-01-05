

/**
 capitalizeFirst

    Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array

    // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

 */


const capitalizeFirst = (array) => {
    if (array.length === 0) {
        return [];
    }

    //.grabbing the first letter and changing it to uppercase
    //.then concatinating the rest of the string and saving it in
    // a new variable that will be replaced in the array at position 0;
    const cap = array[0][0].toUpperCase() + array[0].slice(1, (array[0].length));
    array[0] = cap;
    return [array[0]].concat(capitalizeFirst(array.slice(1)));
}

console.log(capitalizeFirst(['car', 'taco', 'banana']));
