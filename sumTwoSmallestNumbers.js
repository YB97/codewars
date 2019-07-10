/* KATA: Sum of two lowest positive integers

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

numbers = [19, 5, 42, 2, 77];

function sumTwoSmallestNumbers(numbers) {
    //Code here
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }
    let sorted = numbers.sort(compareNumeric);

    return sorted[0] + sorted[1];

};

console.log(sumTwoSmallestNumbers(numbers))