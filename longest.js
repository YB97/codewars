//KATA: Two to One

/*Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.*/

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"


function longest(s1, s2) {
    // your code


    var s = s1.concat(s2);
    // console.log(s, ' ', s1);
    var arr = s.split('').sort();

    var res1 = arr.reduce((newArr, item, i) => {

        if (!newArr.includes(item)) {
            newArr.push(item);
            return newArr;
        }

        return newArr;

    }, []);
