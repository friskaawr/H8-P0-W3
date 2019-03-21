function changeMe(arr) {
    // you can only write your code here!
    if (arr.length === 0){
        console.log('""')
    }

    var tampil = {
        firstName: [],
        lastName: [],
        gender: [],
        age:[]
    };

    for(var i=0; i<arr.length; i++){
        console.log(i+1 + ". " + arr[i][0] +" " +arr[i][1])
        tampil = {

            firstName : arr[i][0],
            lastName : arr[i][1],
            gender : arr[i][2],
        }

        if(arr[i][3] === undefined){
            tampil.age = 'Invalid Birth Year' 
        }
        else {
            var tahun = 2019 - arr[i][3];
            tampil.age = tahun;
        }
        console.log(tampil);
    }

    
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""