var person = {
  firstName: 'Erik',
  lastName: 'Modica',
  hobby: 'Snowboarding'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s name is: ', fullName);

person.job = 'Unemployed;(';
console.log('The person\'s current job is: ', person.job);

person.previousJob = 'Server';
console.log('The person\'s previous job was: ', person.previousJob);

console.log(person);

var myCar = {
  make: 'Ford',
  model: 'Fiesta',
  year: '2013'
};
console.log('Car information: ', myCar);

myCar['owner'] = fullName;
console.log(myCar);

var sentence = 'My name is ' + myCar['owner'] + ' and I drive a ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'] + '.';
console.log(sentence);

myCar['color'] = 'black';
console.log(myCar);
