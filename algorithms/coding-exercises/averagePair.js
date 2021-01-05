/**
 Multiple Pointers - averagePair

 Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target

 Bonus Constraints:
 time: O(N)
 space: O(1)

 Sample Input:

 averagePair([1,2,3], 2.5) //true
 averagePair([1,3,3,5,6,7, 10, 12, 19] , 8) //true
 averagePair([-1,0,3,4,5,6] , 4.1) //false
 averagePair([], 4) //false
 */


const averagePair = (arr, number) => {
    if (arr.length < 2 || number === 0) {
        return false;
    }
    let firstIndex = 0;
    let secondIndex = arr.length - 1;
    let average = 0;
    while (firstIndex < arr.length && secondIndex >= 0) {
        average = (arr[firstIndex] + arr[secondIndex]) / 2;
        console.log(average, number);

        if (average === number) {
            return true;
        }
        if (average > number) {
            secondIndex--;
        } else {
            firstIndex++;
        }
    }

    return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
