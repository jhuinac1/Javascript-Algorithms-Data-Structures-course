
/**
 factorial

 Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the porduct of an interger and all the integers below it; e.g. factorial four (4!) is equal to 24 because 4*3*2*1 Equals 24. factorial zero (0!) is always 1.

 factorial(1) // 1
 factorial(2) // 2
 factorial(4) // 24
 factorial(7) // 5040
 */

const factorial = (number) => {
    if (number <= 1) {
        return 1;
    }
    return number * factorial(number - 1);
}


console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(7));
