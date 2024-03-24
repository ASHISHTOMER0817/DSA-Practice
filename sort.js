function sort(arr) {
	let looped;
	do {
		looped = true;
		for (let i = 0; i < arr.length -1; i++) {
			if (arr[i] > arr[i + 1]) {
				let a = arr[i];
				arr[i] = arr[i+ 1]
				arr[i + 1] = a
				looped = false;
			}
		}
            // return arr
	} while (!looped);
}

const myArray = [754, 8347, 75, 1, 0, 34, 8498, 374, 98, 239];
sort(myArray);
console.log(myArray);


// Big 0 O(n^2)


