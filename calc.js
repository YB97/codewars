function calc(str) { //'7847+-*' '11 12 + -11 +'

	let arr = str.split(' ');

	let numArr = [];
	let signArr = [];

	for (let i =0; i < arr.length; i++) {
		if (isNaN(parseInt(arr[i]))) {
			signArr.push(arr[i]);
		} else {
			numArr.push(arr[i]);
		}
	}

	let res = parseInt(numArr[0]);

	for (let i =0; i<signArr.length; i++) {

		//let a=parseInt(arr[i]);
		let b=parseInt(numArr[i+1]);
		console.log(res);

		switch (signArr[i]) {
			case '+':
				res += b;
				break;
			case '-':
				res -= b;
				break;
			case '*':
				res *= b;
				break;
			case '/':
				res = Math.floor(res/b);
				break;
		}
	}

	return res;

}

// console.log(calc('7 2 - 2 / 1 1 2 + + *'));