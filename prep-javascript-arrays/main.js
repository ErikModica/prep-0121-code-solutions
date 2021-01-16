var languagesArray = [
  'html',
  'css',
  'javascript',
  'react',
  'node.js'
];

console.log('Languases Array: ', languagesArray);

console.log('Array length: ', languagesArray.length);

languagesArray.push('C#', 'php');
console.log('Updated Array: ', languagesArray);

languagesArray.pop();
console.log('Last index removed: ', languagesArray);

languagesArray.unshift('C++');
console.log('Added element to front: ', languagesArray);

languagesArray.shift();
console.log('Removed first element: ', languagesArray);

var thirdElement = languagesArray[2];
console.log('3rd element in languagesArray: ', thirdElement);

var arrayLength = languagesArray.length;
console.log('The final lenght of the array is ', arrayLength);

var lastItem = languagesArray[languagesArray.length - 1];
console.log('The last item in the array is ', lastItem);
