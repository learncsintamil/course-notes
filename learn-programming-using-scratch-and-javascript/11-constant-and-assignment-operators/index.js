function printMultiplicationTable(multiplicand) {
  let result = multiplicand;
  console.log("1 x " + multiplicand + " = " + result);
  result += multiplicand;
  console.log("2 x " + multiplicand + " = " + result);
  result += multiplicand;
  console.log("3 x " + multiplicand + " = " + result);
  result += multiplicand;
  console.log("4 x " + multiplicand + " = " + result);
  result += multiplicand;
  console.log("5 x " + multiplicand + " = " + result);
}
printMultiplicationTable(5);

function someFunction() {
  let x = 10;
  console.log("x = " + x);
  let y = x++
  console.log("after y = x++");
  console.log("x = " + x);
  console.log("y = " + y);
  let z = ++x;
  console.log("after z = ++x");
  console.log("x = " + x);
  console.log("z = " + z);
}

someFunction();

function someFunction2() {
  const x = 10;
  console.log(x);
  x++;
  console.log(x);
}
someFunction2();