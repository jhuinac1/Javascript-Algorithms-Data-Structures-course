/**
 Fibonacci

    Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8, ... which starts with 1 and 1 and where every number thereafter is equal to the sum of the previous two numbers.

    fib(4) // 3
    fib(10) // 55
    fig(28) // 3177811
    fib(35) // 9227465
 */


const fib = (number, steps = 1, current = 1, prev = 0) => {
    if (steps === number) {
        return current;
    }
    let temp = current;
    current += prev;
    prev = temp;
    return fib(number, ++steps, current, prev);
}


console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));


//*     A second approach to fibonacci however this solution is not optimal.
// because for every call, it creates 2 more. thus creating an exponential result 0(n^n);

// const fib = (n) => {
//     if (n <= 2) return 1;
//     return fib(n - 1) + fib(n - 2);
// }


