//////////////////////
// Iterate & Transform
//////////////////////

function decrement(n) {
  return n - 1;
}
function increment(n) {
  return n + 1;
}
function double(n) {
  return n * 2;
}
function negate(n) {
  return 0 - n;
}

function transform(xs, transformFunction) {
  let transformedValues = [];
  for (let i = 0; i < xs.length; i++) {
     transformedValues.push(transformFunction(xs[i]));
  }
  return transformedValues;
}

transform([1, 2, 3], negate);
transform([1, 2, 3], increment);
transform([1, 2, 3], decrement);
transform([1, 2, 3], double);

//////////////////////
// Iterate & Act
//////////////////////

function act(xs, actionFunction) {
  for (let i = 0; i < xs.length; i++) {
    actionFunction(xs[i])
  }
}

function logToConsole(x) {
  console.log(x);
}

act([1,2,3], logToConsole)

//////////////////////
// Iterate & Filter
//////////////////////

function filter(xs, filterFunction) {
  let filteredValues = [];
  for (let i = 0; i < xs.length; i++) {
    if (filterFunction(xs[i])) {
      filteredValues.push(xs[i]);
    }
  }
  return filteredValues;
}

function isEven(number) {
  return number % 2 == 0;
}
function isOdd(number) {
  return number % 2 != 0;
}

filter([1, 2, 3, 4], isEven)
filter([1, 2, 3, 4], isOdd)

//////////////////////
// Iterate & Reduce
//////////////////////

function sum (x,y) {
  return x + y;
}

function biggest(x, y) {
  if (x > y) {
    return x;
  }
  return y;
}

function smallest(x, y) {
  if (x > y) {
    return y;
  }
  return x;
}

function reduce(xs, reduceFunction, initialValue) {
  let reducedValue = reduceFunction(initialValue, xs[0]);
  for(let i = 1; i < xs.length; i++) {
    reducedValue = reduceFunction(reducedValue, xs[i]);
  }
  return reducedValue;
}

reduce([1, 2, 3, 4], sum, 0);
reduce([1, 2, 3, 4], biggest, 1);
reduce([1, 2, 3, 4], smallest, 1);


//////////////////////////////////////////////
// Four Iteration Patterns using array methods
//////////////////////////////////////////////

[1, 2, 3].map(negate);
[1, 2, 3].map(increment);
[1, 2, 3].map(decrement);
[1, 2, 3].map(double);

[1, 2, 3].forEach(logToConsole);

[1, 2, 3, 4].filter(isEven)
[1, 2, 3, 4].filter(isOdd)

[1, 2, 3, 4].reduce(sum, 0);
[1, 2, 3, 4].reduce(biggest, 1);
[1, 2, 3, 4].reduce(smallest, 1);