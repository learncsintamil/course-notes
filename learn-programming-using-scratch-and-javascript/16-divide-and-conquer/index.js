function range(startValue, endValue) {
  let numbers = [];
  for(let i = startValue; i <= endValue; i++) {
    numbers.push(i);
  }
  return numbers;
} 

// To find the sum of digits
// first let's understand how % and / operator works
123 % 10 // returns 3
123 / 10 // returns 12.3
// To ignore the last digit do a floor 
Math.floor(123 / 10) // returns 12
12 % 10 // returns 2
12 / 10 // returns 1.2
// To ignore the last digit do a floor 
Math.floor(12 / 10) // returns 1

function digits(number) {
  let digits = [];
  while(number > 0) {
    let lastDigit = number % 10;
    digits.push(lastDigit);
    let numberWithoutLastDigit = Math.floor(number / 10);
    number = numberWithoutLastDigit;
  }
  return digits.reverse();
}

function sumOfDigits(number) {
  let digitsInGivenNumber = digits(number);
  let sum = 0;
  for (let i = 0; i < digitsInGivenNumber.length; i++) {
    sum += digitsInGivenNumber[i];
  }
  return sum;
}

function recursiveSumOfDigits(number) {
  let sum = sumOfDigits(number);
  while (sum > 9) {
    sum = sumOfDigits(sum);
  }
  return sum;
}

function isValuesInIncreasingOrder(numbers) {
  let currentNumber = numbers[0];
  for(let i = 1; i < numbers.length; i++) {
    if (currentNumber >= numbers[i]) {
      return false;
    }
    currentNumber = numbers[i];
  }
  return true;
}

function fancyNumbers() {
  let possibleNumbers = range(1000, 9999);
  let validNumbers = [];
  for(let i = 0; i < possibleNumbers.length; i++) {
    if (recursiveSumOfDigits(possibleNumbers[i]) == 1 &&
          isValuesInIncreasingOrder(digits(possibleNumbers[i]))) {
            validNumbers.push(possibleNumbers[i]);
          }
  }
  return validNumbers;
}