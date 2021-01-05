/**
 MULTPLE POINTERS - isSubsequence

 Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the  function should check whether the characters in the first string appear somewhere in the second  string, WITHOUT THEIR ORDER CHANGING.

 Examples:
 isSubsequence("hello", "Hello world");
 isSubsequence("sing", "sting");
 issubsequence("abc", "abracadabra");
 isSubsequence("abc", "acb");

 Your solution Must have AT LEAST the following complexities:

 Time Complexity - O(N + M)

 Space Complexity - O(1)
 */


const isSubsequence = (str1, str2) => {
    if (str1.length === 0 && str2.length === 0) {
        return true;
    }
    if (str1.length === 0 ||
        str2.length === 0 ||
        str2.length < str1.length) {
        return false;
    }
    let firstIndex = 0;
    let secondIndex = 0;

    while (secondIndex < str2.length) {
        console.log(str1[firstIndex].toLowerCase(), str2[secondIndex]);
        if (str1[firstIndex].toLowerCase() === str2[secondIndex++].toLowerCase()) {
            firstIndex++;
        }
        if (firstIndex === str1.length - 1) {
            return true;
        }
    }
    return false;
}


//SOLUTION WITH RECURSION

// const isSubsequence = (str1, str2) => {
//     if(str1.length === 0) return true;
//     if(str2.length === 0) return false;
//     if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
//     return isSubsequence(str1, str2,slice(1))
// }



isSubsequence("hello", "Hello world");