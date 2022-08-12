function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var minutes = convertHoursToMinutes(2);
console.log('minutes:', minutes);

function getGreeting(name) {
  console.log('Hello ' + name + '!');
}
getGreeting('World');

var result;

function addAndMultiplyBy5(num1, num2) {
  const temp = num1 + num2;
  return temp * 5;
}
result = addAndMultiplyBy5(10, 5);
console.log('value of addAndMultiplyBy5:', result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2 / 5);
}
result = multiplyAndDivideBy5(35, 10);
console.log('value of multiplyAndDivideBy5:', result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
result = subtractTwoNumbers(22, 7);
console.log('value of subtractTwoNumbers:', result);

function getCircleCircumference(radius) {
  return radius * Math.PI;
}
result = getCircleCircumference(5);
console.log('value of getCircleCircumference:', result);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Juan', 'Ramirez');
console.log('value of getFullName:', fullName);

function cube(number) {
  return number * number * number;
}
result = cube(5);
console.log('value of cube:', result);
