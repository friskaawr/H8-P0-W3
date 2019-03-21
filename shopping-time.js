function shoppingTime(memberId, money) {
    // you can only write your code here!
    var history = {};
    var products = [{
        name : 'Sepatu Stacattu',
        price : 1500000
    },
    { name : 'Baju Zoro', price : 500000
    },
    {
      name : 'Baju H&N', price : 250000 
    },
    {
      name : 'Sweater Uniklooh', price : 175000
    },
    {
      name : 'Casing Handphone', price : 50000
    }];

    if(memberId=== '' || memberId === undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    }
    if(money<=50000){
        return 'Mohon maaf, uang tidak cukup';
    }
    else{
        history.memberId = memberId; 
        history.money = money;
    }
    history.listPurchased = []

    for(var j = 0; j<products.length; j++){
        if (money >= products[j].price){
            history.listPurchased.push(products[j].name)
            money -= products[j].price;
        }
        history.changeMoney = money;
    }
    return history;
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja