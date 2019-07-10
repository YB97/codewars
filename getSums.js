// Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
function getSums(arr) {
    var result = [];
    if (!arr.length) return result;

    arr.reduce(function(sum, item) {
        result.push(sum);
        return sum + item;
    });

    return result;
}

alert(getSums([1,2,3,4,5])); 