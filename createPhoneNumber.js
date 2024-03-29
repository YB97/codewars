//KATA: Create Phone Number
//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"


function createPhoneNumber(numbers){
    let phone = '(a) b-c';

    let str = numbers.join('');

    let res = phone.replace(/a/g, str.slice(0, 3)).replace("b", str.slice(3, 6)).replace("c", str.slice(6, 10));

    return phone.replace(/(a) (b)/);

}