const calculateChange = function(total, cash) {
  let calc = ((cash - total) / 100);
  let changeObj = {};

  const cashTypes = ["twentyDollar", "tenDollar", "five", "twoDollar", "dollar", "quarter", "dime", "nickel", "penny"]
  const cashValues = [20, 10, 5, 2, 1, 0.25, 0.10, 0.05, 0.01];

  let amount;

  for (let i = 0; i < cashValues.length; i++) {
    amount = Math.floor(calc/cashValues[i]);
    if (amount > 0) {
      changeObj[cashTypes[i]] = amount;
      calc = (calc % cashTypes[i]);
    }

  }

  return changeObj;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
