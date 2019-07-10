/*A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"
*/

let arr = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 21];

function solution(list){
 // TODO: complete solution
 //let start;
 let previous;
 let count =0;
 let arrRes = []

function process(previous, item, count) {
	if (count >= 2) {
 				let start = previous-count;
 				arrRes.push(start+'-'+previous);
 				count =0;
 				previous = item;
 			} else {
 				if (count === 1) {
 					arrRes.push(previous-1);
 					arrRes.push(previous);
 					count =0;
 					previous = item;
 				} else {
 					arrRes.push(previous);
 					count =0;
 					previous = item;
 				}
 			}
}

 list.forEach((item, idx) => {
 	if (idx === 0) {
 		previous = item;
 	} else {
 		if (item-previous === 1) {
 			count++;
 			previous = item;
 		} else {
 			process(previous, item, count);
 		}
 	}

 	 if (idx+1 === list.length) {
		process(previous, item, count);
 }


 })



 return arrRes;
}
