//KATA: Find the odd int

/*Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.*/

arr = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]

function findOdd(A) {
    //happy coding!
    return A.reduce((res, item) => res^item);
    // return 0;
}

console.log(findOdd(arr));