
const QuickSort = (arr) => {
      let leftarr = []
      let rightarr = []
      const pivotIndex = arr.length-1

      // for(let i=pivotIndex -1; i<= 0; i-- ){
      //       if(arr[i] < pivotIndex){
      //             leftarr.push(arr[i])
      //       }
      // }
      // for(let i = pivotIndex +1; i< arr.length; i++){
      //       if(arr[i] > pivotIndex){
      //             rightarr.push(arr[i])
      //       }
      // }

      for(let i = 0; i< arr.length -1; i++){
            if(arr[i]< pivotIndex){
                  leftarr.push(arr[i])
            }else{
                  rightarr.push(arr[i])
            }
      }

}