
function range(start, end, step = 1){
 //return an array containing all the numbers from 'start' up to 'end'
 // range(1,10) -> [1,2,3,4,5,6,7,8,9,10]
 // range(5, 2, -1) -> [5,4,3,2]
 const result = [];

if (step > 0){
 for (let i = start; i <= end; i+= step) {
  result.push(i)}
} else if (step < 0) {
 for(let i = start; i >= end; i+= step)
  result.push(i);
}
return result;
}

function sum(arr){
 //takes an array of numbers and returns the sum of all the numbers
 return arr.reduce((acc, v) => acc + v, 0)

}


//Reverse array
function reverseArray(arr){
 const reversedArr = [];
 for(let i = 0; i < arr.length; i++){
  reversedArr.unshift(arr[i]);
 }

 return reversedArr;
}

//Reverse in place- modify the array
function reverseArrayInPLace(arr){
 for(let i = 0; i < Math.floor(arr.length / 2); i++) {
  let temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
 }
 return arr;
}

//Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

function arrayToList(arr) {
  let list = null;
  for(let i = arr.length - 1; i >= 0; i--){
    list = {value:arr[i], rest:list};
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for(let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(element, list) {
  return {value: element, rest: list};
}

function nth(list,n) {
  if (!list){
    return undefined;
  } else if (n === 0) {
    return list.value;
  } else {
    return nth(list.rest, n - 1);
  }
}

function recursiveNth(list, n, current = 0){
  if (!list) {
    return undefined;
  } else if (current === n) {
    return list.value;
  } else {
    return recursiveNth(list.rest, n, current + 1)
  }
}

//Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

//To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

//The Object.keys function will be useful when you need to go over the properties of objects to compare them.

function deepEqual(a, b) {
  if (a === b) {
    // If the values are identical, return true
    return true;
  }

  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") {
    // If one of the values is not an object, or if one of the values is null, or if the types are different, return false
    return false;
  }

  // Get the keys of both objects
  let keysA = Object.keys(a), keysB = Object.keys(b);

  // If the number of keys is different, return false
  if (keysA.length !== keysB.length) {
    return false;
  }

  // Compare the values of each key recursively
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}
