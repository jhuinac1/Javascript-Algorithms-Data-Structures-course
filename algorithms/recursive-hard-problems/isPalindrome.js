

/**
 isPalindrome 
    write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward).
    otherwise it returns false.
 */


// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false


const isPalindrome = (str, start, end) => {
    start = start || 0;
    end = end || str.length - 1;
    if (start >= end) {
        return;
    }
    if (str[start] !== str[end]) {
        return false;
    }
    isPalindrome(str, ++start, --end);
    return true;
}


console.log(isPalindrome("awesome"));
console.log(isPalindrome("foobar"));
console.log(isPalindrome("tacocat"));
console.log(isPalindrome("amanaplanacanalpanama"));
console.log(isPalindrome("amanaplanacanalpandemonium"));



// ANOTHER SOLUTION **********

// function isPalindrome(str){
//     if(str.length === 1) return true;
//     if(str.length === 2) return str[0] === str[1];
//     if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
//     return false;
// }