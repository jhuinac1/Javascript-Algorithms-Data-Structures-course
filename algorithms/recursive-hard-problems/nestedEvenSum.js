

/**
 nestedEvenSum
    
    Write a recursive function called nestedEvenSum. Returns the sum of all even numbers in an object which may contain nested objects.


    nestedEvenSum(obj1); // 6
    nestedEvenSum(obj2); // 10
 */

const nestedEvenSum = (object) => {

    total = 0;

    const diggingIntoObject = (obj) => {
        if (!obj) {
            return 0;
        }

        for (let key in obj) {
            let value = obj[key];
            if (typeof value === "number" && value % 2 === 0) {
                total += value;
            } else if (typeof value === "object") {
                diggingIntoObject(value, total);
            }
        }
    }
    diggingIntoObject(object)

    return total
}

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}
var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(nestedEvenSum(person));
console.log(nestedEvenSum(obj1));
console.log(nestedEvenSum(obj2));