function makeTingSound(theNewHour) {
  let numberOfTimes = theNewHour;
  while (numberOfTimes > 0) {
    console.log('Ting');
    numberOfTimes--;
  }
}

// makeTingSound(5);

function makeTingSound(theNewHour) {
  for (let numberOfTimes = theNewHour; numberOfTimes > 0; numberOfTimes--) {
    console.log('Ting');
  }
}

function makeTingSound(theNewHour) {
  let numberOfTimes = theNewHour;
  do {
    console.log('Ting');
    numberOfTimes--;
  } while(numberOfTimes > 0);
}

// printing one to ten
function printOneToTen() {
  let startingValue = 1;
  let endingValue = 10;
  while (startingValue <= endingValue) {
    console.log(startingValue);
    startingValue++;
  }
}

printOneToTen();

function printXtoY(x, y) {
  let startingValue = x;
  let endingValue = y;
  while (startingValue <= endingValue) {
    console.log(startingValue);
    startingValue++;
  }
}

printXtoY(10, 15);

function multiplicationTable(multiplicand, multiplierStartValue, multiplierEndValue) {
  let startingValue = multiplierStartValue;
  let endingValue = multiplierEndValue;
  while (startingValue <= endingValue) {
    let result = startingValue * multiplicand
    console.log(startingValue + " x " + multiplicand + " = " + result);
    startingValue++;
  }
}

multiplicationTable(3, 1, 5);