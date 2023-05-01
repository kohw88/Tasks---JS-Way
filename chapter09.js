//creating a class
//improve the example of rpg to add character inventory

class Character { //class is created with name starting with uppercase letter
 constructor(name, health, strength){ //constructor to set parameters
  this.name = name; // properties = values
  this.health = health;
  this.strength = strength;
  this.xp = 0;
  this.gold = 10;
  this.key = 1; 
 }
 //attack a target - method
 attack(target){
  if (this.health > 0){
   const damage = this.strength;
   console.log(
    `${this.name} attacks ${target.name} and causes ${damage} damage points`
   );
   target.health -= damage;
   if(target.health > 0){
    console.log(`${target.name} has ${target.health} health points left`);
   } else {
    target.health = 0;
    const bonusXP = 10;
    console.log(
     `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${this.gold} gold and ${this.key} key(s)`
    );
    this.xp += bonusXP;
    this.gold += target.gold;
    this.key += target.key;
    }
   } else {
    console.log(`${this.name} can't attack (they've been eliminated)`);
   }
  }
 


 //return the character description - method
 describe(){
  return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points, ${this.gold} gold and ${this.key} key(s)`;
 }
}

const aurora = new Character("Aurora",150,25);
const glacius = new Character("Glacius",130,30);

//Dogs
// class with constructor set 3 parameters
class Dog {
 constructor(name, species, size){
  this.name = name;
  this.species = species;
  this.size = size;
 }
  //method for bark
  bark(){
   //dogs taller than 60 emote 'Grrr' else 'woof
   if(this.size > 60){
    return "Grrr! Grrr!"; 
   } else {
    return "Woof! Woof!";
   }
  }
 }

//account list
class BankAccount {
 constructor(name){
  this.name = name;
  this.balance = 0;
 }
 credit(value){
  this.balance += value;
 }
 describe(){
  return `owner: ${this.name}, balance: ${this.balance}`
 }
}

const seanAccount = new BankAccount('Sean');
const bradAccount = new BankAccount('Brad');
const gerogesAccount = new BankAccount('Georges');

const accounts = [seanAccount,bradAccount,gerogesAccount]
accounts.forEach((account)=>{
 account.credit(1000);
 console.log(account.describe())
})