

/**
 FREQUENCY COUNTER - SAMEFREQUENCY

 write a function called sameFrequency. Given two positive integers, find out the two numbers have the same frequency of digits. 

 solution must have the fullowing complexities: 
 time: O(n)

 sample input: 

 sameFrequency(182, 281); // true
 sameFrequency(34, 14);  //false
 sameFrequency(3589578, 5879385); // true
 sameFrequency(22, 222); //false 
 */



const sameFrequency = (num1, num2) => {
    const numberObject1 = {};

    while (num1 >= 1) {
        let rem = num1 % 10;
        numberObject1[rem] = (numberObject1[rem] || 0) + 1;
        num1 = Math.floor(num1 / 10);
    }

    while (num2 >= 1) {
        let rem = num2 % 10;
        if (!numberObject1[rem]) {
            return false;
        }
        numberObject1[rem] -= 1;
        num2 = Math.floor(num2 / 10);
    }

    return true;

    // console.log(numberObject1);
}


console.log(sameFrequency(12, 23));
console.log(sameFrequency(12, 21));
console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));