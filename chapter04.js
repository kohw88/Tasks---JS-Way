/*
## Coding time!

Try to code each exercise twice, once with a `while` loop and the other with a `for`, to see for yourself which one is the most appropriate.

### Carousel

Write a program that launches a carousel for 10 turns, showing the turn number each time.

When it's done, improve it so that the number of turns is given by the user.
*/

for(let i = 1; i <= 10; i++){
 console.log(`Turn: ${i}`)
}

let i = 0
while(i < 10) {
 i++
 console.log(`Turn: ${i}`)
}


/*
### Parity

Check the following program that shows even numbers (divisible by 2) between 1 and 10.

```js
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
}
```

This program uses the modulo operator `%`, which calculates the remainder after division of one number by another. It's often used to assess number parity.

```js
console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
console.log(20 % 3); // 2 because 20 = 3 * 6 + 2
```

Improve the program so that it also shows odd numbers. Improve it again to replace the initial number `1` by a number given by the user.

!!! info

    This program must show exactly 10 numbers including the first one, not 11 numbers!

*/

// for(let i = Number(prompt('Enter a starting number: ')); i <= 10; i++){
//  if (i%2 === 0){
//   console.log(`${i} is even`)
//  } else {
//   console.log(`${i} is odd`)
//  }
// }

// let num = Number(prompt('Enter a starting number: '));
// while(num <= 10){
//  if(num % 2 === 0) {
//   console.log(`${num} is even`)
//  } else {
//   console.log(`${num} is odd`)
//  }
//  num++;
// }


/*

### Input validation

Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

When you are done with the above, improve the program so that the terminating number is between 50 and 100.

*/

// let num = parseInt(prompt('Enter a number less than or equal to 100:'));

// while(num < 50 || num > 100){
//  num = parseInt(prompt('Enter a number less than or equal to 100:'));
//  }

// console.log(num)




/*

### Multiplication table

Write a program that asks the user for a number, then shows the multiplication table for this number.

When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

### Neither yes nor no

Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.

*/

let num = parseInt(prompt('Enter a number between 2-9: '));

while(num < 2 || num > 9){
 num = parseInt(prompt('Enter a number between 2-9: '));
}

for(i=1; i<=9; i++){
 console.log(`${num} x ${i} = ${num*i}` )
}

let userInput;

while(userInput != 'yes' && userInput != 'no'){
 userInput = prompt('Enter yes or no:').toLowerCase();
 if (userInput === 'yes' || userInput === 'no'){
  console.log('Game Over')
  break;
 }
}

/*


### FizzBuzz

Write a program that shows all numbers between 1 and 100 with the following exceptions:

* It shows `"Fizz"` instead if the number is divisible by 3.

* It shows `"Buzz"` instead if the number is divisible by 5 and not by 3.

When it's done, improve it so that the program shows `"FizzBuzz"` instead for numbers divisible both by 3 and by 5.

!!! note

    This exercise has [many, many solutions](http://www.tomdalling.com/blog/software-design/fizzbuzz-in-too-much-detail/). It's a [job interview classic](http://imranontech.com/2007/01/24/using-fizzbuzz-to-find-developers-who-grok-coding/) that a significant number of candidates fail. Try your best!

*/ 

for(let i = 1; i <= 100; i++){
 if(i % 3 === 0 && i % 5 === 0) {
  console.log('FizzBuzz')
 } else if (i % 3 === 0) {
  console.log('Fizz')
 } else if (i % 5 === 0){
  console.log('Buzz')
 }
 console.log(i)
}