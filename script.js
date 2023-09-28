// This called hoisting
// ham variable ko assign kerny se pehly unko access kr sakty hain pr sirf un variables ko jo ham ne var keyword se banayie ho, aur decleration se pehly agar ham variable ko use kerian gy to uski value undefined go gi
// Ex var b; (Undefined)
// console.log(b) // output: undefined
// var b = 10; never used

console.log(a);
var a = 12;

// _____________Types in JS_____________ //

// There are 2 types of data types in JS:
// Permitive Data types
// Non-permitive (refrence) Data types

//1. Permivites Data types are, number, strings, bollean, undefined, null, bigInt

//2. Reffrence Data types are, arrays, objects, dates

//What is the difference between permitives and refference?

//Ans: I. All the refference data types have {}, [] or () so when you se these brackets then it confirm that this is reffernce type if there is no bracket then it is permitive type
//II. We can copy the exact or real copy of permitve data tyes in any other variables i.e

let x = 12;
let y = x;

y = y + 6;

console.log(x);
console.log(y);

// As you can see that we have easily copy the exact x into y and if we made changes in y there are no changes in x but if we make changes in x y also change because y copies x this permitive i which we can easily make real copy;

//III. But in refference we can not make real copy i.e.

let myData = [12, 13, 14];

let dataCopy = myData;

dataCopy.pop();

console.log(myData);
console.log(dataCopy);

// As you can see that we trying to copy the myData into dataCopy but if we made changes in dataCopy our original data (myData) also Changes this is because dataCopy reffer to myData not copying it , but it is possible to copy the real reffernce type but we will cover it in next session!

// ___________Conditional's in JS___________ //

let myAge = 19;

if (myAge < 18) {
  console.log("You are not Eligible!");
} else if (myAge >= 18) {
  console.log("Congratulation! you are Eligible!");
} else {
  console.log("Enter the valid age!");
}

//Conditional statements are used to check weather condition is true or false.

// In other words in Conditional we simply say if it happens do this, if not do something else!

// ________ For loop/ While loop, classic Function/Anynomus Function _______ //

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let j = 0;
while (j < 11) {
  console.log(j);
  j++;
}

function myFun(a, b) {
  return a + b;
}

let reCall = myFun(5, 6);
console.log(reCall, "Function Baby!");
// We are not going to explain it again as cover many times

// _________ JavaScript Arrays _________ //

let myArray = [1, 2, 3, 4, 5, 6, 7];

// to remove last array value
console.log(myArray);

// _______ pop(), push(), shift(), unshift() and splice() _______ //
myArray.pop();
console.log(myArray);

// to add value at the end

myArray.push(8);

console.log(myArray);

// to remove value from the begnining's

myArray.shift();
console.log(myArray);

// to add value at the begnining's

myArray.unshift(0);

console.log(myArray);

// to remove value from begining, end or middle what ever you want, first number indicates from which index you want to remove value and second number is how many value you want to remove

myArray.splice(3,2)

console.log(myArray)

// This is all about the array's and we have learn what matters in this!

// __________ JavaScript Objects __________ //

let myObj = {
  name : 'Umer',
  age : 19,
  hobbies : ["Coding", "Gardening", "Book reading", "Movie website"],
  itFun : function() {
     console.log(`${this.name} is ${this.age} years Old!`)
  }
}

// Note: Difference between property and method, name is property age is property and hobbies are even property but itFun is method if you put function inside of object it become's method!


console.log(myObj.name)
console.log(myObj.hobbies[2])
console.log(myObj.itFun())
console.log(myObj.hobbies)

// Note: If you want to get function value from the object you need to add the pranthisis as like as global scope!


