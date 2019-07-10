//Преобразовать из данной структуры данных в следующую:

// var resultStructure = {
// 	firefox: {
// 		active: ,
// 		total:
// 	}
//}


var structure = [
    {
        id: 'hub0',
        browser: 'firefox',
        active: 2,
        total: 10
    },
    {
        id: 'hub0',
        browser: 'chrome',
        active: 3,
        total: 20
    },
    {
        id: 'hub0',
        browser: 'firefox',
        active: 5,
        total: 40
    },

];


var resultStructure = structure.reduce(function (previousValue, currentItem, index, structure) {

    if (previousValue[currentItem.browser]) {
        previousValue[currentItem.browser].active += currentItem.active;
        previousValue[currentItem.browser].total += currentItem.total;
    } else {
        previousValue[currentItem.browser] = {
            active: currentItem.active,
            total: currentItem.total
        }
    }
    return previousValue;
}, {});

// console.log(resultStructure);
