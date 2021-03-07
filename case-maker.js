const makeCase = function(input, cases) {
  const arr = input.split(' ');
  
  // expected output:
  // thisIsAString
  if (cases === "camel") {
    let str = "";
    for (let word of arr) {
      str += word[0].toUpperCase();
      str += word.substring(1);
    }
    let newStr = "";
    newStr += str[0].toLowerCase();
    newStr += str.substring(1);
    return newStr;
  }
  // ThisIsAString
  if (cases === "pascal") {
    let str = "";
    for (let word of arr) {
      str += word[0].toUpperCase();
      str += word.substring(1);
    }
    return str;
  }
  // this_is_a_string
  if (cases === "snake") {
    return arr.join('_');
  } 
  // this-is-a-string
  if (cases === "kebab") {
    return arr.join('-');
  }
  // This Is A String
  if (cases === "title") {
    let str = "";
    for (let word of arr) {
      str += word[0].toUpperCase();
      str += word.substring(1);
      str += ' ';
    }
    return str;
  }
  // THIS_IS_A_STRING
  if (cases === "uppersnake") {
    let snake = arr.join('_');
    return snake.toUpperCase();
  }
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "uppersnake"));


