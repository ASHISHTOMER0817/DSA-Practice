const bubbleSortP = (arr) => {
      let sorted;
      do {
             sorted = true;
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i +1]) {
				let greater = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = greater;
				sorted = false;
			}
		}
	} while (!sorted);
	return arr;
};
console.log(bubbleSortP([8, 20, -2, 4, -6]))