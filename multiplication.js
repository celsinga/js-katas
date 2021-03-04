const multiplicationTable = function(maxValue) {
  let arr = [];
  for (let i = 1; i <= maxValue; i++) {
    arr.push(i);
    for (let x = 0; x < arr.length; x++) {
      arr[x] += ` ${i}`
    }
  }
  return arr;
};

// console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
// console.log(multiplicationTable(10));