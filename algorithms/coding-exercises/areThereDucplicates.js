/**
 FREQUECY COUNTER/ MULTIPLE POINTERS - areThereDucplicates
 
 Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates amont the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.


 examples: 
    areThereDuplicates(1, 2, 3 ) //false
    areThereDuplicates(1, 2, 2 ) //true
    areThereDuplicates("a", "b", "c", "a" ) //true
 */


const areThereDuplicates = (...args) => {
    const argObject = {};
    for (let arg of args) {
        if (argObject[arg]) {
            return true;
        }
        argObject[arg] = 1;
    }
    return false;
}

/// ONE LINE SOLUTION
//
/**
 */

// const areThereDuplicates = (...arguments) => {
//     return new Set(arguments).size !== arguments.length;
// }


console.log(areThereDuplicates(1, 2, 3))//true
console.log(areThereDuplicates(1, 2, 2))//false
console.log(areThereDuplicates("a", "b", "c", "a"))//false