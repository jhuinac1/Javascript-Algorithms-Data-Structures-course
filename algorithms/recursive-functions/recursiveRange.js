/**
 recursiveRange

    Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

    sample Input/output
    recursiveRange(6) //21
    recursiveRange(10) // 55
 */


const recursiveRange = (number) => {
    if (number === 0) { return number; }
    return number + recursiveRange(number - 1);
}


console.log(recursiveRange(6));
console.log(recursiveRange(10));
