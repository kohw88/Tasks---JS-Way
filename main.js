//Carousel: Write a program that launches a carousel for 10 turns, showing the turn number each time.

//When it's done, improve it so that the number of turns is given by the user.

// let turn = prompt ('How many turns?'); 

// for (let i = 1; i <= turn; i++){
//  console.log(`Turn ${i}`)
// }

//parity

// for (let i = prompt ("starting number?"); i <= 10; i++) {
//  if(i % 2 === 0) {
//   console.log(`${i} is even`);
//  } else {
//   console.log(`${i} is odd`);
//  }
// }

/* 
Input validation
Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

When you are done with the above, improve the program so that the terminating number is between 50 and 100.
*/

// while(true) {
//  let num = prompt("Enter the number less than or equal to 100");
//  if (num >= 50 && num <= 100){
//   console.log("Thanks for entering valid input")
//   break;
//  } else {
//   alert("Invalid input, please try again.")
//  }
// }

/*
Multiplication table
Write a program that asks the user for a number, then shows the multiplication table for this number.

When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).
*/

// while(true){
//  num = prompt("Enter a number between 2-9");
//  if (num >= 2 && num <= 9) {
//   break;
//   } else {
//    alert("Enter valid input");
//   }
//  }
//  for (let i = 1; i < 10; i++){
//   console.log(`${num} x ${i} = ${num*i}`);
//  }

/*
Neither yes nor no
Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.
*/

// while(true){
//  let userInput = prompt("Enter the text:").toLowerCase();
//  if (userInput === 'yes' || userInput === 'no'){
//   alert('Game Over')
//   break;
//  } else {
//   alert('Keep going.')
//  }
// }

//Write a program that shows all numbers between 1 and 100 with the following exceptions:
/* 
- It shows "Fizz" instead if the number is divisible by 3
- It shows "Buzz" instead if the number is divisible by 5 and not by 3
When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5
*/ 


//1.show numbers between 1 and 100
// for (let i = 1; i <= 100; i++){
// if(i % 3 === 0 && i % 5 === 0){
//  console.log('FizzBuzz')
//  } else if (i % 3 === 0) {
//   console.log('Fizz')
//  } else if (i % 5 === 0 && i % 3 != 0) {
//   console.log('Buzz')
//  } else {
//   console.log(i)
//  }
// }
