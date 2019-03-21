function cariModus(arr) {
    var i 
    var j
    var arr2 = []
    var s=0;

    for(var j = 0; j<arr.length; j++){
      for (var k=0; k<arr.length; k++){
        if(arr[k] > arr[k+1]){
          s = arr[k]
          arr[k] = arr[k+1]
          arr[k+1] = s
        }
      }
    }

    // console.log(arr)
    for(i = 0; i < arr.length; i++){
      if(arr[i]===arr[i+1]){
        arr2.push(arr[i])
      }
    }
    // console.log(urut)
    // console.log(arr2)
    if(arr2 == arr2.length){
      return -1
    }else if(arr2[0] == arr2[1]){
      return -1
    // }else if(arr2[0] == arr2[1]){
    //   return arr2[0]
    }else{
      return arr2[0]
    }


    return arr2
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1


