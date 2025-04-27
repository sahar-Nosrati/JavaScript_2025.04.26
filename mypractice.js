"use strict";

// const errorTest = function () {
//   const fruits = ["pineapple", "fig", "cherry", "grap"];

//   for (let element of fruits) {
//     try {
//       console.log(element);
//       if (element.includes("g")) {
//         throw new customError("It contains 'g'");
//       }
//       console.log(`Nice fruit${element}`);
//     } catch (error) {
//       console.error(error.message);
//       console.error(error.name);
//       console.error(error.stack);
//     } finally {
//       console.log("...finally😁🦆");
//     }
//   }
// };

// errorTest();

// function customError(message) {
//   this.name = "Custom Error";
//   this.message = message;
//   this.stack = `${this.name} : ${this.message}`;
// }

// Try-catch

// try {
//   const testedNumber = prompt("Please enter a number");
//   const convertedNumber = +testedNumber;

//   const confirmedMessage = `The input is equal ${convertedNumber}, correct😊😊`;

//   if (convertedNumber) {
//     console.log(confirmedMessage);
//   } else {
//     throw new customError("The input is not correct, please enter new one");
//   }
// } catch (error) {
//   console.warn(error.name);
//   console.warn(error.message);
//   console.warn(error.stack);
// } finally {
//   const findSolutionMessage = `Finally, I have found solution 😊😁😀`;
//   console.log(findSolutionMessage);
// }

// function customError(message) {
//   this.name = "Custom Error";
//   this.message = message;
//   this.stack = `${this.name}: ${this.message}`;
// }

// scop in js

// const fistName = "Sahar";
// function fullName (tName){
//   var lastName = "jjj";
//   if (fistName == "Sahar"){
//     var fullName1 = `${fistName} ${lastName}`;
//     console.log(fullName);
//     console.log(lastName);
//   }
// }

// console.log(fullName("Mahtab"));
// console.log(fullName1);
// console.log(lastName);


// let flowerProperties = { flower: "Rose", color: "Red", hasSmell: true };

// Object.defineProperty(flowerProperties, "flower", {
  //   writable: false
  // });
  // let descriptor1 = Object.getOwnPropertyDescriptor(flowerProperties, "flower");
  
  // console.log(descriptor1);
  // flowerProperties.flower = "Pancy";
  // console.log(flowerProperties); 
  
  // const oddNumbers = [1,3,5,7];
  // console.log(oddNumbers); 

  // ######## this key word
  
  let flowerProperties = { flower: "Rose", color: "Red", hasSmell: true };

  const getFullName = {
  first_Name : "Sahar",
  last_Name : "MM",

  fullName(){

      const fullName = `${this.first_Name} ${this.last_Name} is full name of this function`
      console.log(this);
      return fullName;
    }
  }

  console.log(getFullName.fullName())
  console.log(this);


  const multiplicationNumbers = function(number1, number2){
    const resultNumber = number1 * number2;
    console.log(this);
    return resultNumber
  }

  console.log(multiplicationNumbers(8,8));