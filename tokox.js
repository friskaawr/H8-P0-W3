/**
 Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang yang terjual pada hari itu.

Barang-barang SALE yang akan dihitung penjualannya:

Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1
Function akan menerima array yang berisikan object pembeli (nama pembeli, barang yang ingin dibeli dan 
jumlah barang yang dibelinya). Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal 
untuk membeli barang tersebut.

Function countProfit akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek 
barang dari toko X tersebut yang berisikan info nama barang, siapa saja yang membeli, sisa stock barang dan total pemasukan 
untuk barang tersebut
 */

function countProfit(shoppers) {
    // you can only write your code here!
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  
    var name = [];
    var stacattu =[],zoro = [],uniklooh = [];
    var sisa_per = 0,sisa_dua = 0,sisa_tiga = 0;
    var sta= listBarang[0][2], zor=listBarang[1][2], uni=listBarang[2][2]
    if(shoppers.length === 0){
      return '[]'
    }
    for(var i = 0; i<shoppers.length; i++){
      if(shoppers[i].product === listBarang[0][0] && shoppers[i].amount <= sta ){
        stacattu.push(shoppers[i].name);
        sisa_per += shoppers[i].amount;
        sta -= sisa_per;
      }
      if(shoppers[i].product === listBarang[1][0] && shoppers[i].amount <= zor){
        zoro.push(shoppers[i].name);
        sisa_dua +=shoppers[i].amount;
        zor-= sisa_dua;
      }
      if(shoppers[i].product === listBarang[2][0] && shoppers[i].amount <= uni){
        uniklooh.push(shoppers[i].name);
        sisa_tiga += shoppers[i].amount;
        uni -= sisa_tiga;
      }
      var hasil = []
      hasil.push({
        product: listBarang[0][0],
        shoppers: stacattu,
        leftOver : listBarang[0][2] - sisa_per,
        totalProfit : listBarang[0][1] * sisa_per
      });
      hasil.push({
        product: listBarang[1][0],
        shoppers: zoro,
        leftOver : listBarang[1][2] - sisa_dua,
        totalProfit : listBarang[1][1] * sisa_dua
      });
      hasil.push({
        product: listBarang[2][0],
        shoppers: uniklooh,
        leftOver : listBarang[2][2] - sisa_tiga,
        totalProfit : listBarang[2][1] * sisa_tiga
      });

      // else{
      //   product: shoppers[i].product,
      //   shoppers: name,
      //   leftOver : listBarang[i][2],
      //   totalProfit : 0;
      // }
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]