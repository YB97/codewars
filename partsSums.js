//KATA: Sums of Parts
/*Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []

The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.*/


function partsSums(ls) {
    let res = [];
    let current = 0;

    for (let i =0; i<ls.length; i++) {

        if (i === 0) {
            let first = ls.reduce((sum, item) => {
                return sum+item
            });
            current = first;

        } else {
            current -= ls[i-1];
        }

        res.push(current);

    }
    res.push(0);
    return res;
}