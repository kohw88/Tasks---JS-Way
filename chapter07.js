// Musketeers
// Write a program that:

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
const musketeers = ['Athos', 'Porthos', 'Aramis'];
// Shows each array element using a for loop.
for(let i = 0; i < musketeers.length; i++){
 console.log(musketeers[i]);
}
// Adds the "D'Artagnan" value to the array.
musketeers.push("D'Artagnan");
// Shows each array element using the forEach() method.
musketeers.forEach(musketeer => {
 console.log(musketeer)
})
// Remove poor Aramis.
musketeers.pop();

// Shows each array element using a for-of loop.
for(const musketeer of musketeers) {
 console.log(musketeer);
}

// Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

// const values = [3, 11, 7, 2, 9, 10];
let totalValue = 0;
values.forEach(value => {
 totalValue += value; 
})

console.log(totalValue);

// Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.

const values = [3, 11, 7, 2, 9, 10];
let maximum = 0;
values.forEach(value => {
 if (value > maximum){
  maximum = value;
 }
})

console.log(maximum)

// List of words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".


let listOfWords = [];

while (true){

 let word = prompt('Enter a word:');

 if(word != 'stop'){
  listOfWords.push(word);
 } else {
  break;
 }
}

console.log(listOfWords);




