/*
## Coding time!

### Word info

Write a program that asks you for a word then shows its length, lowercase, and uppercase values.

*/ 

function wordInfo() {
 const word = prompt("Please enter a word");
 const length = word.length;
 const lowercase = word.toLowerCase();
 const uppercase = word.toUpperCase();
 alert(`The word ${word} has ${length} characters, in lowercase it is ${lowercase} and in uppercase it is ${uppercase}`);
}


/*

### Vowel count

Improve the previous program so that it also shows the number of vowels inside the word.

*/

function vowelCount () {
 const word = prompt("Please enter a word");
 const vowels = ["a", "e", "i", "o", "u"];
 let count = 0;
 for (let i = 0; i < word.length; i++) {
  if (vowels.includes(word[i])) {
   count++;
  }
 }
 alert(`The word ${word} has ${count} vowels`);

}

/*

### Backwards word

Improve the previous program so that it shows the word written backwards.

*/

function reversedWord() {
 const word = prompt("Please enter a word");
 const reversed = word.split("").reverse().join("");
 alert(`The word ${word} written backwards is ${reversed}`);
}

/*
### Palindrome

Improve the previous program to check if the word is a palindrome. A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

For example, `"radar"` should be detected as a palindrome, `"Radar"` too.
*/

function palindrome(word) {
  const lowercaseWord = word.toLowerCase();
  const reversed = lowercaseWord.split("").reverse().join("");
  return lowercaseWord === reversed;
}

const word = prompt("Please enter a word");
const isPalindrome = palindrome(word);

if (isPalindrome) {
  console.log(`The word ${word} is a palindrome`);
} else {
  console.log(`The word ${word} is not a palindrome`);
}
