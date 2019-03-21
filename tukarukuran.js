function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var besar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var kecil = 'abcdefghijklmnopqrstuvwxyz'
    var string = ''
    // for (var i = 0; i<kalimat.length; i++){
    //     if(kalimat.charAt(i)===kalimat.charAt(i).toUpperCase()){
    //         string += kalimat.charAt(i).toLowerCase();
    //     }
    //     else{
    //         string += kalimat.charAt(i).toUpperCase();
    //     }
    // }
    for (var i = 0; i<kalimat.length; i++){
        var t = false;
        for(var j=0; j<kecil.length; j++){
            if(kalimat[i] === kecil[j]){
                t = true;
                string += besar[j]
            }
            else if(kalimat[i]===besar[j]){
                t= true;
                string += kecil[j]
            }
        }
        if(t===false){
            string+=kalimat[i];
        }
    }
    return string;
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"