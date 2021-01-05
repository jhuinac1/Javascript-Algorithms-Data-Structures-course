

//ANAGRAMS
/** GIVEN TWO STRINGS, WRITE A FUNCTION TO DETERMINE IF THE SECOND
STRING IS AN ANAGRAM OF THE FIRST. 
AN ANAGRAM IS A WORD, PHRASE, OR NAME FORMED BY REARRANGING THE LETTERS OF ANOTHER, SUCH AS CINEMA, FORMED FROM ICEMAN  */

/**
 validAnagram("", ""); //true
 validAnagram("aaz", "zza") //false
 validAnagram("anagram", "nagaram");// true
 validAnagram("rat", "car"); // false
 validAnagram("awesome", "awesom") //false;
 validAnagram("qwerty", "qwywrt") //true;
 validAnagram("texttwisttime", "timetwisttext") //true
 */


const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    const word1 = {};
    const word2 = {};

    for (let char of str1) {
        word1[char] = (word1[char] || 0) + 1;
    }
    for (let char of str2) {
        word2[char] = (word2[char] || 0) + 1;
    }
    for (let key in word1) {
        // console.log(word1[key]);
        if (word1[key] !== word2[key]) {
            return false
        }
    }
    return true;
}

console.log(validAnagram("", ""));
console.log(validAnagram("azz", "zaa"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("texttwisttime", "timetwisttext"));