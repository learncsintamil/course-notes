let numbers = [42, 8, 11, 33];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

console.log(numbers.length);

function greetPeople(names) {
  for (let i = 0; i < names.length; i++) {
    console.log("Hi " + names[i]);
  }
}

greetPeople(["Ram", "John", "Akbar"])

function numbersFrom1To10() {
  let numbers = [];
  for (let i = 1; i <= 10; i++) {
    numbers.push(i);
  }
  return numbers;
}
console.log(numbersFrom1To10());

function oddNumbersFrom1to10() {
  let numbers = [];
  for (let i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
      numbers.push(i);
    }
  }
  return numbers;
}
console.log(oddNumbersFrom1to10());