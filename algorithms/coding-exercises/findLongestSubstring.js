/**
 SLIDING WINDOW - findLongestSubstring

 Write a function called findLongestSubstring, which accepts a string an return the length of the longest substring with all distinct characters.

 findLongestSubstring('') // 0
 findLongestSubstring("rithmschool") // 7
 findLongestSubstring("thisisawesome") //6 
 findLongestSubstring("thecatinthehat") //7
 findLongestSubstring("bbbbbbb") //1
 findLongestSubstring("longestsubstring") // 8
 findLongestSubstring("thesisshowwedoit") // 6


 Time Complexity - O(n)

 */

const findLongestSubstring = (string) => {
    if (string.length === 0) {
        return 0;
    }
    const charLocation = {};

    let start = 0;
    let max = 0;
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        if (charLocation[letter] && charLocation[letter].index >= start) {
            max = Math.max(max, i - start);
            start = charLocation[letter].index + 1;
        }
        charLocation[letter] = { index: i };
    }
    max = Math.max(max, string.length - start);
    // console.log(max)
    return max;
}

findLongestSubstring("dkekghithdfd"); //6
findLongestSubstring('') // 0
findLongestSubstring("rithmschool") // 7
findLongestSubstring("thisisawesome") //6 
findLongestSubstring("thecatinthehat") //7
findLongestSubstring("bbbbbbb") //1
findLongestSubstring("longestsubstring") // 8
findLongestSubstring("thisishowwedoit") // 6

/**
similar aproach from the course
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
*/