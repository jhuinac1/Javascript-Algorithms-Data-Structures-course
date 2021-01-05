

/**
 collectStrings

    Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
 */



const collectStrings = (param, array = []) => {
    if (!param) {
        return array;
    }
    if (typeof param === "string") {
        array.push(param);
    }
    if (Array.isArray(param)) {
        return array;
    }
    if (typeof param === "object") {
        for (let key in param) {
            collectStrings(param[key], array);
        }
    }
    return array;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj));