// Given an array of digital numbers, return a new array of length number containing the last even numbers from the
// original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var number = 3;

function evenNumbers(array, number) {
    // good luck
    let res = array.filter(function(item, index) {
        return item % 2 === 0;
    });

    if (number === res.length) {
        return res;
    } else {
        return res.splice(res.length - number, res.length);
    }
}

result = evenNumbers(array, number);
console.log(result);
