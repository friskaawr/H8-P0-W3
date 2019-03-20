function cariMedian(arr) {
    // you can only write your code here!

    var m = 0; 
    var panjang = arr.length;

    if(panjang % 2 === 0){
        m = (arr[panjang /2 - 1 ] + arr[panjang/2]) / 2;
    }
    else {
        m = arr[(panjang - 1 )/2];
    }

    return m;
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5