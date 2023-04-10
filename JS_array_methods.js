// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

function filterRangeInPlace(arr, a, b){
 let i = 0;
 while (i < arr.length) {
  if(arr[i] < a || arr[i] > b) {
   arr.splice(i,1);
  } else {
   i++;
  }
 }
 console.log(arr)
}


// For instance:
//let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
// alert( arr ); // [3, 1]


// Sort in decreasing order
// importance: 4
let arr = [5, 2, 1, -10, 8];
const sorted = arr.sort((a,b) => b - a);
console.log(sorted)

// // ... your code to sort it in decreasing order
// alert( arr ); // 8, 5, 2, 1, -10

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.
function copySorted(arr){
 return arr.slice().sort(); //slice() makes shallow copy of the array, sort method sorts strings alphabetically.
}


// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

//Extendable calculator

function Calculator(){
 this.methods = {
  "-": (a,b) => a-b,
  "+": (a,b) => a+b
 }
 this.calculate = function(str) {

  let split = str.split(' '),
  a = +split[0],
  op = split[1],
  b = +split[2];

  if (!this.methods[op] || isNaN(a) || isNaN(b)){
   return NaN;
  }
  return this.methods[op](a,b);

 };
 this.addMethod = function(name, func) {
  this.methods[name] = func;
 }
}

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(item => item.name)

// alert( names ); // John, Pete, Mary


// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:

 let john = { name: "John", surname: "Smith", id: 1 };
 let pete = { name: "Pete", surname: "Hunt", id: 2 };
 let mary = { name: "Mary", surname: "Key", id: 3 };

 let users = [ john, pete, mary ];

 let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`, 
  id: user.id
 }))

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith

// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:

 let woon = { name: "Woon", age: 25 };
 let mj = { name: "MJ", age: 30 };
 let jordan = { name: "Jordan", age: 28 };

 let ageArr = [ woon, mj, jordan ];

 function sortByAge(arr){
    arr.sort((a,b) => a.age - b.age) // sorts by age in ascending order. 
 }
 
 
 sortByAge(ageArr);



// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

function shuffleArray(arr) {
  //iterates through an array from right to left using for-loop
  for (let i = arr.length - 1; i > 0; i--) {
    //variable declared to store the generated random integer between 0 and i (inclusive) using 'Math.random()' Math.floor() rounds down the returned float value to whole number
        // returned value from Math.random() is slightly less than 1, so mutiplying it by (i + 1) produces a number between 0 and (i+1)
    const j = Math.floor(Math.random() * (i+1));

    //use array destructuring assignment to swap the values of two elements in array.
    [arr[i], arr[j] = [arr[j], arr[i]]];

  }
  return arr;
}

// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

function getAverageAge(arr){
  return arr.reduce((accumulator, person) => accumulator + person.age, 0) /arr.length
}

// Filter unique array members
// importance: 4
// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

const strings = ['Zebra','Tiger','Cat','Dog','Zebra', 'Tiger', 'Dog', 'Dog', 'Hello'];

function unique(arr) {
  let result = [];
  for (const element of arr) {
    if (!result.includes(element)) {
      result.push(element);
    } 
  } 
  return result;
}

// Create keyed object from array
// importance: 4
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

function groupById(arr){
  return arr.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}


