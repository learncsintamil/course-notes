function areaOfCircle(radius) {
  return 3.14 * radius * radius;
}
console.log("Area of a circle with radius 10 is " + areaOfCircle(10));

function calculateSalary(hoursWorked, hourlyPrice) {
  return hoursWorked * hourlyPrice;
}

function percentage(value, percent) {
  return value * (percent / 100);
}

function deductTax(salary, percent) {
  return salary - percentage(salary, percent);
}

console.log("Salary is " + calculateSalary(10, 300));
console.log("Salary after 10% deduction is " + deductTax(calculateSalary(10, 300)));
