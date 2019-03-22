function changeVocals (str) {
    //code di sini
    // var a = 'abijuvefop'
    // var b = 'ABIJUVEFOP'
    var vocal = [
      ['a', 'b'],
      ['i', 'j'],
      ['u', 'v'],
      ['e', 'f'],
      ['o', 'p'],
      ['A', 'B'],
      ['I', 'J'],
      ['U', 'V'],
      ['E', 'F'],
      ['O', 'P']
    ];
    var string = '';

    for(var i = 0; i < str.length; i++ ){
        var found = false;
        for(var j = 0; j < vocal.length; j++){
           if(str[i] === vocal[j][0]){
               found = true;
               string += vocal[j][1]
           }
        }
        if(found === false){
            string+=str[i];
        }
    }
    // console.log(string)
    return string;
  }
  
  function reverseWord (str) {
    //code di sini
    var balik = '';
    for(var k = str.length - 1; k>=0; k--){
         balik += str[k];
    }
    return balik;
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var besar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var kecil = 'abcdefghijklmnopqrstuvwxyz';
    var kalimat = '';
    for (var x=0; x<str.length; x++){
      var t =  false;
      for(var y =0; y<besar.length; y++ ){
         if(str[x]===besar[y]){
           t = true;
           kalimat += kecil[y];
         }
         if(str[x]===kecil[y]){
           t = true;
           kalimat += besar[y];
         }
      }
      if (t === false){
        kalimat+=str[x];
      }
    }

    return kalimat;
  }
  
  function removeSpaces (str) {
    //code di sini
    var newString = ''
    for(var a = 0; a<str.length; a++){
      if(str[a] === ' '){
        newString+= ''
      }
      else{
        newString+=str[a];
      }
    }
    return newString;
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length <= 5){
        return 'Minimal karakter yang diinputkan adalah 5'
    }
    
    var baru = changeVocals(name);
    var r = reverseWord(baru);
    var lowerUpperCase = setLowerUpperCase(r);
    var remove = removeSpaces(lowerUpperCase);

    return remove;


  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'