
			// function fibonnaci(n) {
			// 	let arr = [0, 1];
			// 	for (let i = 2; n > i; i++) {
			// 		arr[i] = arr[i - 1] + arr[i - 2];
			// 	}
			// 	console.log(arr);
			// 	document.getElementById("actual").innerText =
			// 		arr[n - 1];
			// 	return arr;
			// }

			// function factorial(n) {
			// 	let factor = [];
			//             for(let i=1; i<=n;i++){
			// 		let multiply = 1;
			// 		for (let l = 1; l<=i; l++) {
			// 			multiply *= l;
			// 		}
			// 		factor.push(multiply);
			// 	}
			// 	return factor;
			// }

			// function primeNumber(n) {
			// 	let result = true;
			// 	for (let i = 2; i < n; i++) {
			// 		if (n % i === 0) {
			// 			result = false;
			// 			break;
			// 		}
			// 	}
			// 	return console.log(result);
			// }

			// function twoThePower(n) {
			// 	let result = false;
			// 	let m = 1;
			// 	for ( let i = 1; n >= m; i++) {
			// 		if (n === m) {
			// 			return true
						
			// 			break;
			// 		}
			// 		m *= 2;
			// 	}
			// 	return false
			// }
			// console.log(twoThePower(32))
			// console.log(twoThePower(0))
			// console.log(twoThePower(35684963549658))


				// RECURSIVE

			
				// function ReFibonacci (n) {
				// 	if(n<2) {
				// 		return n
				// 	}
				// 	return (ReFibonacci(n-1) + ReFibonacci(n-2))
				// }
				// console.log(ReFibonacci(1))
				// console.log(ReFibonacci(0))
				// console.log(ReFibonacci(6))
				// console.log(ReFibonacci(20))


				function ReFactorial (n) {
					// let factorial = 1
					if (n<2) {
						return 
					}
					//  factorial *= n 

				return  ReFactorial(n-1) * 3
				}

			// function amazing() {
			// 	const myNumber = document.getElementById("input").value;
			// }

			// document.getElementById("result").onclick = amazing;
