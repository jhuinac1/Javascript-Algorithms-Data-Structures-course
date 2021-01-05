

/**
 stringifyNumbers
    
    write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converst them to strings. Recursion would be a great way to solve this.

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


stringifyNumbers(obj)


{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

const stringifyNumbers = (object) => {

    const duplicate = (obj) => {
        if (typeof obj === "number") {
            return "" + obj;
        }
        if (Array.isArray(obj)) {
            return obj
        }
        if (typeof obj === "object") {
            let temp = {}
            for (let key in obj) {
                temp[key] = duplicate(obj[key]);
            }
            return temp
        }
        return obj;
    }

    return duplicate(object);
}

console.log(stringifyNumbers(obj));
console.log(obj)

