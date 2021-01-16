function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

console.log('Add two Number: ', addTwoNumbers(2, 2));

function convertHoursToMinutes(number) {
  return number * 60;
}

console.log('Convert Hours To Minutes: ', convertHoursToMinutes(2));

function personalizeGreeting(name) {
  return 'Hello ' + name + '!';
}

console.log('Personalize Greeting: ', personalizeGreeting('Erik'));

function returnDatatype(data) {
  return typeof data;
}

console.log('Return Data Type: ', returnDatatype(1072));

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

console.log('Add and Multiply by 5: ', addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

console.log('Multiply and Divide by 5: ', multiplyAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

console.log('Subtract Two Numbers: ', subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

console.log('Get Circle Circumference: ', getCircleCircumference(5));

function returnFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

console.log('Return Full Name: ', returnFullName('Erik', 'Modica'));

function cubeNumber(number) {
  return number * number * number;
}

console.log('Cube Number: ', cubeNumber(5));

function returnMathSentence(num1, num2) {
  return 'If you add ' + num1 + ' and ' + num2 + ' together you get ' + (num1 + num2) + '.';
}

console.log('Return Math Sentence: ', returnMathSentence(5, 12));
