/**
 capitalizeWords

    Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
 */


const capitalizedWords = (array, newArray = []) => {
    if (array.length === 0) {
        return newArray;
    }
    let capWord = array[0].toUpperCase();
    newArray.push(capWord);
    return capitalizedWords(array.slice(1), newArray);
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']