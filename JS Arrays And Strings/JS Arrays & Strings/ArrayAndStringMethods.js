let array = [1, 2, 3, 4, 5];

//Array length modifications
array = [4];
array.length = 4;

//Stack methods
//Returns the length
array.pop();
array.push(6);
array.push(2, 3, 4);

//Queue methods
//Returns the length
//Dequeue
array.shift();
//Enqueue
array.unshift(5);
array.unshift(4, 5, 6);

//Remove At
//Returns an array
//1st Element - index
//2nd Element - count to delete
//3rd and other - values to insert
array.splice(1, 1);

//Insert
array.splice(2, 0, 5);

//Reverse
array.reverse();

//String Join
console.log(array.join(', '));

//Substring for every array
//Start index - inclusive
//End index - exclusive
let newArr = array.slice(1, 3);
//Starts from 0 and goes till 3
newArr = array.slice(3);
//Shallow copy (same elements, different referations)
newArr = array.slice();

//Contains
console.log(array.includes(3));

//Index Of
console.log(array.indexOf(4));
//If not found returns -1

//Find
let element = array.find(el => el === 7);

//ForEach
array.forEach(num => console.log(num));

//Select
let arr = array.map(num => num * 2);

//Where
arr = array.filter(num => num % 2 == 0);

//
//Strings
//

let str = 'string';

//Concatenation
let newStr = 'some text';
str.concat(newStr);

//Index Of
console.log(str.indexOf('str'));

//Last Index Of
console.log(str.lastIndexOf('str'));

//Substring
//Start and end index
let someString = str.substring(2, 5);

//Replace
let someNewString = str.replace('t', 'p');

//Split
console.log(newStr.split(' '));

//Contains
console.log(str.includes('str'));

//Repeat
console.log('Tro' + 'lo'.repeat(10));

//Trim
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

//Starts/Ends with
console.log(str.startsWith('str'));
console.log(str.endsWith('ing'));

//Pad Start/End
console.log('10'.padStart(8, '0'));
console.log('10'.padEnd(8, '0'));