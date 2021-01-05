


// const getSum = (a, b) => {
//     let sum = 0;
//     if (b < a) {
//         let temp = a;
//         a = b;
//         b = temp;
//     }

//     for (let i = a; i <= b; i++) {
//         sum += i;
//     }
//     return sum;
// }

// getSum(0, -1);

// const calc = (x) => {
//     let str1 = ""

//     for (let i = 0; i < x.length; i++) {
//         let hashCode = x.charCodeAt(i);
//         str1 += hashCode;
//     }

//     let NumberOfSevens = 0;
//     for (let i = 0; i < str1.length; i++) {
//         if (str1[i] === "7") {
//             NumberOfSevens++;
//         }
//     }
//     return (NumberOfSevens * 7) - (NumberOfSevens * 1);
// }

// console.log(calc('ABC'));
// console.log(calc('abcdef'));
// console.log(calc('ifkhchlhfd'));
// console.log(calc('aaaaaddddr'));


const addBinary = (a, b) => {
    let sum = parseInt(a) + parseInt(b);
    let binaryNumber = 0;
    while (sum > 0) {
        let exp = Math.floor(Math.log2(sum));
        binaryNumber += Math.pow(10, exp);
        sum -= Math.pow(2, exp);
    }
    // while (sum > 0) {
    //     let quotient = Math.floor(sum / 2);
    //     let remainder = sum % 2;
    //     if (quotient === 0) {
    //         binaryNumber += "1"
    //         break;
    //     }
    //     binaryNumber += remainder
    //     sum = quotient;
    // }
    return binaryNumber.toString().split("").join("");
}


// const x = (addBinary(120, 112));
const x = (addBinary(51, 12));
const m = addBinary(5, 8)
console.log(x, x.toString().length)
console.log(m);
