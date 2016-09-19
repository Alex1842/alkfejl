"use strict";

//let, const
const x = [1, 2, 3, -3, 42, -66, 23, -420];

function kivalogatas(array, tulFn) {
    const result = []
    for (let index = 0; index < array.length; index++) {
        if (tulFn(array[index]) < 0) {
            result.push(array[index]);
        }
    }
    return result;
}

console.log(
    kivalogatas(x, function (p) {
        return p < 0
    }))

console.log(
    x.filter(function (p) {
        return p < 0

    }))



