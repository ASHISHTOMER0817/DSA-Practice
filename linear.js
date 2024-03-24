const arr = [11, 12, 13, 14, 15, 16, 17, 18, 19]
function binary(t) {
 for( let i=0; i<arr.length;i++) {
      if(arr[i]=== t) {
            console.log(i)
            return;
      }
 }
 return -1
 }

 binary(13)

 // BIG 0  = 0(n)