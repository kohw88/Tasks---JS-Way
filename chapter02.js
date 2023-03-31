// ### Final values

// Observe the following program and try to predict the final values of its variables.

// ```js
// let a = 2; //2
// a -= 1; // 1
// a++; // 2
// let b = 8; // 8
// b += 2; // 10
// const c = a + b * b; // 2 + 10 * 10 = 102
// const d = a * b + b; // 2 * 10 + 10 = 30
// const e = a * (b + b); // 2 * (10 + 10) = 40
// const f = a * b / a; //2 * 10 / 2 = 10 
// const g = b / a * a; //10 / 2 * 2 = 10
// console.log(a, b, c, d, e, f, g); // 2, 10, 102, 30, 40, 10, 10
// ```

// Check your prediction by executing it.

// ### VAT calculation

// Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.

let rawPrice = prompt('Enter the raw price');
console.log(rawPrice * (20.6/100))

// ### From Celsius to Fahrenheit degrees

// Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.

// !!! info

//     The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.

let celsiusTemp = prompt('Enter the temperature in celsius');
console.log(celsiusTemp * 9/5 + 32);

// ### Variable swapping

// Observe the following program.

// ```js
let number1 = 5;
let number2 = 3;

// // TODO: type your code here (and nowhere else!)
let temp;
temp = number1;
number1 = number2;
number2 = temp;


console.log(number1); // Should show 3
console.log(number2); // Should show 5
// ```

// Add the necessary code to swap the values of variables `number1` and `number2`.

// !!! tip

//     This exercise has several valid solutions. You may use more than two variables to solve it.
