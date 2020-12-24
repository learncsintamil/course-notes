// Let's start from a simple function which does has three steps

function someFunction() {
  console.log("step 1");
  console.log("step 2");
  console.log("step 3");
}

// someFunction();

// Let's apply decision making
// run step 1 always
// run step 2 on true 
// run step 3 always

function someFunction(booleanValue) {
  console.log("step 1");
  if (booleanValue) {
    console.log("step 2");
  }
  console.log("step 3");
}

// someFunction(true);
// someFunction(false);

// Let's apply decision making
// run step 1 always
// run step 2 on true 
// run step 3 on false

function someFunction(booleanValue) {
  console.log("step 1");
  if (booleanValue) {
    console.log("step 2");
  } else {
    console.log("step 3");
  }
}

// someFunction(true);
// someFunction(false);

// So far we are using just true and false as boolean expressions. But in real world, we will be comparison operators in addition to just true and false.
// let's play with following expressions in node.js REPL
true
false
1 == 2
2 == 2
1 != 2
8 < 9
9 > 8
9 >= 8
9 <= 8

// we can use variables in comparison operators!
let x = 10;
let y = 20;

x > y

// Now we know how boolean expressions work, let's use it solve some meaningful problems
function entranceFee(age) {
  if (age <= 12) {
    return 25;
  }
  return 50;
}

console.log(entranceFee(45));
console.log(entranceFee(5));

// Let's learn about how to use variables inside if block
// we have a shop that is going to give 2% discount always
// and 10% discount if total is greater than 1000
function percentage(value, percent) {
  return value * (percent / 100);
}

// function applyDiscount(totalPrice) {
//   let discountPercent = 2;
//   if (totalPrice > 1000) {
//     discountPercent = 5;
//   }
//   let priceAfterDiscount = percentage(totalPrice, discountPercent);
//   let netPrice = totalPrice - priceAfterDiscount;
//   return netPrice;
// }

function calculateDiscountPercent(totalPrice) {
  if (totalPrice > 1000) {
    return 5;
  }
  return 2;
}

function applyDiscount(totalPrice) {
  let discountPercent = calculateDiscountPercent(totalPrice);
  let priceAfterDiscount = percentage(totalPrice, discountPercent);
  let netPrice = totalPrice - priceAfterDiscount;
  return netPrice;
}

console.log(applyDiscount(200));
console.log(applyDiscount(2000));


// Let's build a parking fee calculate function
// TWO_WHEELER = 10
// CAR = 25
// BUS = 50
function calculateParkingFee(vehicleType) {
  if (vehicleType == "TWO_WHEELER") {
    return 10;
  }
  if (vehicleType == "CAR") {
    return 25;
  }
  if (vehicleType == "BUS") {
    return 50;
  }
  return 0;
}

console.log(calculateParkingFee("TWO_WHEELER"));
console.log(calculateParkingFee("BUS"));
console.log(calculateParkingFee("CYCLE"));
