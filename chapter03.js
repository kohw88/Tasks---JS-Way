// ## Coding time!

// Here are a few pieces of advice about these exercises:

// * Keep on choosing your variable names wisely, and respect indentation when creating code blocks associated to `if`, `else` and `switch` statements.

// * Try to find alternative solutions. For example, one using an `if` and another using a `switch`.

// * Test your programs thoroughly, without fear of finding mistakes. It's a very important skill.

// ### Following day

// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

//while loop with conditionals
while(true){
 const dayName = prompt('Enter the name of the day (Mon - Sun): ').toLowerCase();
 if (dayName === 'monday') {
  console.log('Tomorrow is Tuesday.')
  break

 } else if (dayName === 'tuesday') {
  console.log('Tomorrow is Wednesday.')
  break

 } else if (dayName === 'wednesday') {
  console.log('Tomorrow is Thursday.')
  break
 
 } else if (dayName === 'thursday') {
  console.log('Tomorrow is Friday.')
  break 

 } else if (dayName === 'friday') {
  console.log('Tomorrow is Saturday.')
  break
 
 } else if (dayName === 'saturday') {
  console.log('Tomorrow is Sunday.')
  break

 } else if (dayName === 'sunday') {
  console.log('Tomorrow is Monday.')
  break

 } else {
  alert('Enter the valid input.')
 }
}
//switch case
const dayName = prompt('Enter the name of the day (Mon - Sun): ').toLowerCase();
switch (dayName) {
  case "monday":
   console.log('Tomorrow is Tuesday.')
   break;
  case "tuesday":
   console.log('Tomorrow is Wednesday.')
   break;
  case "wednesday":
   console.log('Tomorrow is Thursday.')
    break;
  case "thursday":
   console.log('Tomorrow is Friday.')
    break;
  case "friday":
   console.log('Tomorrow is Saturday.')
    break;
  case "saturday":
   console.log('Tomorrow is Sunday.')
    break;
  case "sunday":
   console.log('Tomorrow is Monday.')
    break;

  default:
    console.log("Not a valid name of the day");
}


// ### Number comparison

// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.

let num1 = Number(prompt('Enter the first number'))
let num2 = Number(prompt('Enter the second number'))

if (num1 > num2) {
 console.log('First number is greater than second number')
} else if (num1 === num2) {
 console.log('Both numbers have the same value')
} else {
 console.log('Second number is greater than first number')
}


// ### Final values

// Take a look at the following program.

// ```js
let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);
// ```

// Before executing it, try to guess the final values of variables `nb1`, `nb2` and `nb3` depending on their initial values. Complete the following table.

// |Initial values       |`nb1` final value |`nb2` final value|`nb3` final value|
// |---------------------|------------------|-----------------|-----------------|
// |`nb1=nb2=nb3=4`      |         0        |        4        |       12        |
// |`nb1=4,nb2=3,nb3=2`  |         4        |        3        |       2         |
// |`nb1=2,nb2=4,nb3=0`  |         3        |        4        |       0         |

// Check your predictions by executing the program.

// ### Number of days in a month

// Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

const monthNum = Number(prompt('Enter the number of month (1-12): '));

if (Number) {
  switch(monthNum){
    case 1:
      console.log('Number of days: 31')
      break;
    case 2:
      console.log('Number of days: 28')
      break;
    case 3:
      console.log('Number of days: 31')
      break;
    case 4:
      console.log('Number of days: 30')
      break;
    case 5:
      console.log('Number of days: 31')
      break;
    case 6:
      console.log('Number of days: 30')
      break;
    case 7:
      console.log('Number of days: 31')
      break;
    case 8:
      console.log('Number of days: 31')
      break;
    case 9:
      console.log('Number of days: 30')
      break;
    case 10:
      console.log('Number of days: 31')
      break;
    case 11:
      console.log('Number of days: 30')
      break;
    case 12:
      console.log('Number of days: 31')
      break;
    
    default:
      console.log('Invalid input.')
  }
}




// ### Following second

// Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

// This is not as simple as it seems... Look at the following results to see for yourself:

let hours = Number(prompt('Enter the hour: '));
let minutes = Number(prompt('Enter the minute: '));
let seconds = Number(prompt('Enter the second: '));

if (hours < 24 && minutes < 60){
  if (seconds < 60) {
    seconds++ //check if seconds hit 60, if it hits 60 seconds become 0 and increment minutes
    if(seconds === 60){
      seconds = 0
      minutes++ //check if minutes hit 60, if it hits 60 minutes become 0 and increment hours
      if (minutes === 60){
        minutes = 0
        hours++ //check if hours hit 24, if it hits 24 hours become 0, console log midnight.
        if (hours === 24) {
          hours = 0
          console.log(`Time one second after: ${hours}h${minutes}m${seconds}s (midnight)`);
        } else {
          console.log(`Time one second after: ${hours}h${minutes}m${seconds}s`);
        }
      } else {
        console.log(`Time one second after: ${hours}h${minutes}m${seconds}s`);
      }
    } else {
      console.log(`Time one second after: ${hours}h${minutes}m${seconds}s`);
    } 
  }
}


// * 14h17m59s should give 14h18m0s
// * 6h59m59s should give 7h0m0s
// * 23h59m59s should give 0h0m0s (midnight)

