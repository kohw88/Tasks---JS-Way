// Adding character experience
// Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.

// TODO: create the character object here

const aurora = {
 name: "Aurora",
 health: 150,
 strength: 25,
 xp: 0,

 describe() {
  return `${this.name} has ${this.health} health points and ${this.strength} as strength and earned ${this.xp} experience.`
 }
}

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());


// Modeling a dog
// Complete the following program to add the dog object definition.

// // TODO: create the dog object here
const dog = {
 name: "Max",
 species: "Sapsali",
 size: 10,
 bark(){
  return 'Woof!';
 }
}


console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// Modeling a circle
// Complete the following program to add the circle object definition. Its radius value is input by the user.

const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle = {
 circumference(){
  return 2 * Math.PI * r;
 },
 area(){
  return Math.PI * Math.pow(r,2);
 }
}


console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

// Modeling a bank account
// Write a program that creates an account object with the following characteristics:

// A name property set to "Alex".
// A balance property set to 0.
// A credit method adding the (positive or negative) value passed as an argument to the account balance.
// A describe method returning the account description.
// Use this object to show its description, crediting 250, debiting 80, then show its description again.

const account = {
 name: "Alex",
 balance: 0,
 credit(value){
  return this.balance += value;  
 },
 describe(){
  return `owner: ${this.name}, balance ${this.balance}`
 }
}

console.log(account.describe());
account.credit(250);
account.credit(-80);
console.log(account.describe());