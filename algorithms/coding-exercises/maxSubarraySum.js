

/**
 SLIDING WINDOW - maxSubarraySum

 Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the funtions.

 Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

 maxSubArraySum([100, 200, 300, 400], 2) //700;
 maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) //700;
 maxSubArraySum([-3, 4, 0, -2, 6, -1], 2) //700;
 maxSubArraySum([2, 3], 3) //700;

 */


const maxSubarraySum = (arr, number) => {
    if (number > arr.length) {
        return null;
    }
    let maxSum = 0;
    for (let i = 0; i < number; i++) {
        maxSum += arr[i];
    }
    let sum = maxSum;

    for (let i = number; i < arr.length; i++) {
        sum = sum + arr[i] - arr[i - number];
        maxSum = Math.max(sum, maxSum);
    }
    return maxSum;
}


console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));