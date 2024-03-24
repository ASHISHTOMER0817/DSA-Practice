const insertionSort = (arr) => {
	let a;
	for (let i = 1; i < arr.length ; i++) {
		a = arr[i];
		let j = i - 1;
		while (j >= 0 && arr[j] > a) {
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = a;
	}
};


const arr = [1,8, 20, -2,-4, -6, 23, 0];
insertionSort(arr);
console.log(arr);


// Big 0 =   0(n^2)
