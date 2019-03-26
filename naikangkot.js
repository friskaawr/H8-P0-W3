function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here

    if(arrPenumpang.length === 0){
        return '[]'
    }
    var hasil = []
    // var rute_awal = arrPenumpang[i][1];
    // var rute_akhir = arrPenumpang[i][2];
    var awal = 0;
    var akhir = 0;
    var tampil = [];
    for(var i = 0; i < arrPenumpang.length;i++){
            for(var k = 0; k<rute.length; k++){
                if(arrPenumpang[i][1] === rute[k]){
                 awal = k;  
                }
                if(arrPenumpang[i][2] === rute[k]){
                 akhir = k
                }
            }
            // return awal 
            // console.log(awal)
            // console.log(akhir) 

            
            tampil.push({
                penumpang : arrPenumpang[i][0],
                naikDari : rute[awal],
                tujuan : rute[akhir],
                bayar : Math.abs(akhir - awal) * 2000
            });
            
        }
        return tampil;

  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]