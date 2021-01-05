


/**
 naiveStringSearch

 Loop over the longer string
 Loop over the shorter string
 if the characters don't match, break out of the inner loop
 if the characters do not match, keep going

 if you complete the inner loop and find a match, increment the count of matches

 return teh count;
 */

const naiveStringSearch = (long, short) => {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            // console.log(long[i], short[j]);
            if (short[j] !== long[i + j]) break;
            if (j === short.length - 1) count++;
        }
    }
    return count;
}


console.log(naiveStringSearch("lorie loled", "lo"));
