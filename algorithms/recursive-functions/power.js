

/**
 power
 WRITE A FUNCTION CALLED POWER WHICH ACCEPTS A BASE AND AN EXPONENT. THE FUNCTION SHOULD RETURN THE POWER OF THE BASE TO THE EXPONENT. THIS FUNCTION SHOULD MIMIC THE FUNCTIONALYTY OF MATH.POW() - DO NOT WORRY ABOUT NEGATIVE BASES AND EXPONENTS.

 power(2,0) //1
 power(2,2) // 4
 power(2,4) // 16
 */


const power = (base, exponent) => {
    if (exponent == 0) { return 1 }

    return base * power(base, exponent - 1);
}

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));



