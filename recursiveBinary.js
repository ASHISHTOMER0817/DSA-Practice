function recursiveBinary(t, arr) {
	// let leftIndex = 0;
	// let rightIndex = arr.length - 1;
	function change(leftIndex = 0, rightIndex = arr.length - 1) {
		const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
		if (leftIndex <= rightIndex) {
			if (arr[middleIndex] === t) {
				console.log(middleIndex);
				return;
			} else if (arr[middleIndex] < t) {
				// leftIndex = middleIndex + 1;
				change(middleIndex + 1, rightIndex);
			} else {
				// rightIndex = middleIndex - 1;
				change(leftIndex, middleIndex - 1);
			}
		} else {
			return console.log("-1");
		}
	}
	change();
}

recursiveBinary(10, [10, 11, 12, 19, 47, 83, 98, 99, 100, 5674]);
