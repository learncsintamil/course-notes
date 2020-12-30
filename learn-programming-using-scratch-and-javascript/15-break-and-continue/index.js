function exists(array, element) {
  let elementExists = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == element) {
      elementExists = true;
      break;
    }
    console.log("checking " + array[i]);
  }
  return elementExists;
}

function existsV2(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == element) {
      return true;
    }
    console.log("checking " + array[i]);
  }
  return false;
}

console.log(exists([1, 4, 3, 4], 4));
console.log(existsV2([1, 4, 3, 4], 4));

function printTillFirstEvenNumber(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      break;
    }
    console.log(numbers[i]);
  }
}
printTillFirstEvenNumber([11, 2, 1, 3, 5, 8, 9]);

function printOddNumbersAlone(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      continue;
    }
    console.log(numbers[i]);
  }
}
printOddNumbersAlone([11, 2, 1, 3, 5, 8, 9]);