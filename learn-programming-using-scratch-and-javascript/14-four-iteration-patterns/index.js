//////////////////////
// Iterate & Act
//////////////////////
function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("Element at index " + i + " is " + array[i]);
  }
} 
// Arrays can have elements from different type
printArray([1, 2, 2, "Four", true])
// Strings are arrays of single character strings
printArray("INDIA");

//////////////////////
// Iterate & Transform
//////////////////////
function decrementNumbers(numbers) {
  let decrementedNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    decrementedNumbers.push(numbers[i] - 1);
  }
  return decrementedNumbers;
}
console.log(decrementNumbers([1, 2, 3, 4, 5]));;

function booleanToNumbers(booleans) {
  let numbers = [];
  for (let i = 0; i < booleans.length; i++) {
    if (booleans[i]) {
      numbers.push(1);
    } else {
      numbers.push(0);
    }
  }
  return numbers;
}
console.log(booleanToNumbers([true, false, false, true]));;

//////////////////////
// Iterate & Filter
//////////////////////
function filterEvenNumbers(numbers) {
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}
console.log(filterEvenNumbers([1,2,3,4,5]));

//////////////////////
// Iterate & Reduce
//////////////////////
function calculateSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(calculateSum([1,2,3,4,5]));

function findBiggestNumber(numbers) {
  let biggerNumber = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggerNumber) {
      biggerNumber = numbers[i];
    }
  }
  return biggerNumber;
}
console.log(findBiggestNumber([7,1,2,3,11,4,5,9]))