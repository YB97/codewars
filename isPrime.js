//KATA: Is a number prime?

//Define a function that takes an integer argument and returns logical value true or false depending on if the integer is a prime.

//Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

var num = 14;

function isPrime(num) {
    //TODO

    if (num <2) {
        return false;
    } else {
        for (let i=2; i<=Math.floor(num/2); i++) {
            if (num%i === 0) return false
        }
        return true
    }

}