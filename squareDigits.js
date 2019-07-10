/* KATA:Square Every Digit

In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.*/

let number = 3646;

function squareDigits(num){
    //may the code be with you
    let index = 0;
    let res = 0;
    let mult = 10;
    while (num) {
        if (!index) {

            res += (num % 10)*(num % 10); //36
            index =1;
            mult = (num%10<4) ? 10 : 100; //100
            console.log(res);
        } else {
            res += (num % 10)*(num % 10) * mult; //436 + 36*100
            mult = (num%10<4) ? mult*10 : mult*100; //10
            console.log(res);
        }

        num = (num - num%10) / 10;
    }
    return res;

}

console.log(squareDigits(number));