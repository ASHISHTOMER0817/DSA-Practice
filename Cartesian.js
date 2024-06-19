function CartesianProduct(arr1, arr2) {
	const resultingArr = [];
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
		
			resultingArr.push([arr1[i],arr2[j]]);
		}
	}
	return resultingArr;
}

// Initially people would think the time complexity of this function is 0(n^2) but it is actually 0(n*m ) 
// because the legnth of both the array are different which causes difference in time taken by the for loop 