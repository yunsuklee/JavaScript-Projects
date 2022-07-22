function checkCashRegister(price, cash, cid) {
  // First I get how much do I have to return.
  let change = cash - price;

  // I check how much money do I have in drawer.
  let cashInDrawer = cid.reduce((total, bill) => {
    return total += bill[1];
  }, 0);
  
  // I parse it to a float and fix its decimal precision to 2 places.
  cashInDrawer = parseFloat(cashInDrawer.toFixed(2));

  // I create the object to return 
  const obj = {
    'status': "",
    'change': []
  };

  // If the change is exactly the same as available money I simply return cid reversed.
  if(change === cashInDrawer) {
    obj.status = "CLOSED";
    obj.change = [...cid];
  }
  else {
    // An array with the bill's values.
    const bills = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
    // An array to have an updated current amount in drawer.
    const available = [...cid].reverse();
    // I get the change array prepared to updated as I take from drawer.
    obj.change = [
      ["ONE HUNDRED", 0],
      ["TWENTY", 0],
      ["TEN", 0],
      ["FIVE", 0],
      ["ONE", 0],
      ["QUARTER", 0],
      ["DIME", 0],
      ["NICKEL", 0],
      ["PENNY", 0]
    ];
    // I check whenever a bill is smaller than current change together with having that bill available.
    for(let i = 0; i < bills.length; i++) {
      // Once I find one, I just keep subtracting from change and available the bill's value while adding it to the obj change array. 
      while(change >= bills[i] && available[i][1] >= bills[i]) {
        change -= bills[i];
        change = parseFloat(change.toFixed(2)); // Always taking care of decimal precision...
        available[i][1] -= bills[i];
        obj.change[i][1] += bills[i];
      }
    }
    // Filter the change array for those bills that were not used.
    obj.change = obj.change.filter(bill => bill[1] > 0);

    // In case that there is still change to be given.
    if(change) {
      obj.status = "INSUFFICIENT_FUNDS";
      obj.change = [];
    }
    // If I still have money in my drawer.
    else
      obj.status = "OPEN";
  }
  // I return the object.
  return obj;
}

// TESTS
//
// Closed
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// Open
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// Insuf
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));