// KATA: Categorize New Member
/* The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input

Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.*/

var data = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]];


function openOrSenior(data){

    let senior = "Senior";
    let open = "Open"
    let res = [];

    data.forEach(function(item, index){
        if (item[0] > 54 && item [1] > 7 ) {
            res.push(senior);
        }
        else res.push(open);
    })
    return res
}

console.log(openOrSenior(data));