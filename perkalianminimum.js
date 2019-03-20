function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var faktorpembagi = '';
    var arr = [];
    var arr_j = [];
    for (var i=0; i<=angka;i++){
        if(angka%i==0){
            var count = angka / i;
            // arr.push(i);
            faktorpembagi += i.toString() + count.toString() + " ";
        }
    }
    // console.log(arr);
    var arr_b = faktorpembagi.split(" ");
    arr_b.pop()

    for(j=0; j<arr_b.length; j++){
        arr_j.push(arr_b[j].length);
    }

    // arr_j.sort()
    var banding;
    for (k=0; k<arr_j.length; k++){
        for(l=0; l<arr_j.length; l++){
            if(arr_j[l] > arr_j[l+1]){
                banding = arr_j[l];
                arr_j[l] = arr_j[l+1];
                arr_j[l+1] = banding;
            }
        }
    }
    // console.log(arr_j)
    return arr_j[0];
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2