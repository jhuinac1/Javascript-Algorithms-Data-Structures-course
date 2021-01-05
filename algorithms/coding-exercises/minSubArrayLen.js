/**
 SLIDING WINDOW - minSubArrayLen

 Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

 This Function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed tot he function. If there isn't one, return 0 instead.

 EXAMPLES:

    minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
    minSubArrayLen([2,1,6, 5,4], 9); // 2-> because [5,4] si the smallest subarray
    minSubArrayLen([3,1,7,11,2,9, 8, 21, 62, 33, 19], 52); // 1
    minSubArrayLen([1,4,16,22,5,7,8,9, 10], 39); // 3
    minSubArrayLen([1,4,16,22,5,7,8,9, 10], 55); // 5
    minSubArrayLen([4,3,3,8, 1,2,3], 11); //2
    minSubArrayLen([1,4,16, 22, 5, 7, 8, 9, 10], 95); //0

    Time Complexity - O(n)

    Space Complexity - O(1)
 */

const minSubArrayLen = (arr, number) => {
    let index = 0;
    let sum = 0;
    let result = 0;
    while (sum < number && index < arr.length) {
        sum += arr[index++];
    }
    if (index === arr.length && sum < number) {
        return 0;
    }
    result = index;
    let first = --index;
    let second = 0;

    while (first < arr.length) {
        sum -= arr[second];
        if (sum >= number) {
            result--;
        } else {
            first++;
            // second++;
            sum += arr[first];
        }
        second++;
    }
    return result;
}
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
/**
 another solution from the course

 function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
        // move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
            end++;
    }
    // if current window adds up to at least the sum given then
        // we can shrink the window
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
            total -= nums[start];
            start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
 */

