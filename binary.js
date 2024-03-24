// const arr = [11, 12, 13, 14, 15, 16, 17, 18, 19];

function binary(n, arr) {
	let startIndex = 0;
	let endIndex = arr.length - 1;
    
	while (startIndex <= endIndex) {
	  let middleIndex = Math.floor((startIndex + endIndex) / 2);
	  if (arr[middleIndex] === n) {
	    // console.log(middleIndex);
	    return middleIndex;
	  } else if (arr[middleIndex] < n) {
	    startIndex = middleIndex + 1;
	  } else if (arr[middleIndex] > n) {
	    endIndex = middleIndex - 1;
	  }
    
	}
	return -1;
    }
    
    console.log(binary(19, [11, 12, 13, 14, 15, 16, 17, 18, 19]))
    
    // o(logn)