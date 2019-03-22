function sorting(arrNumber) {
    // code di sini

    var temp = 0;
    for(var i=0; i<arrNumber.length; i++){
        for(var j=0; j<arrNumber.length - i; j++){
            if(arrNumber[j] > arrNumber[j+1]){
                temp = arrNumber[j];
                arrNumber[j] = arrNumber[j+1];
                arrNumber[j+1] = temp
            }
        }
    }
    var t = arrNumber.length - 1;
    arr_largest = [];
    for(var j=0 ; j<arrNumber.length; j++){
        if(arrNumber[t] === arrNumber[j]){
        arr_largest.push(arrNumber[j]);
        }
    }
    // console.log(arr_largest)
    return arrNumber
  }
  
  function getTotal(arrNumber) {
    // code di sini
    if(arrNumber.length === 0){
        return "''"
    }
    var a = arrNumber[arrNumber.length-1];
    var b = 0;
    for(var k = 0; k<arrNumber.length; k++){
        if(a === arrNumber[k]){
            b+=1;
        };
    }
    // console.log(b)
    return 'angka paling besar adalah '+a + ' dan jumlah kemunculan sebanyak ' +b+ ' kali';
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''