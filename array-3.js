// Create an array containing a few numbers, ex [3, 2, 9, 5, 6]

// Output the largest number of the array
// Output the average (mean) of all numbers (sum of all numbers divided by amount of numbers)

// expected array
const arrayOfNumbers = [0, 2, 3, 4, 5, 6];
// Output the last element of your array

console.log("Last Element", arrayOfNumbers[arrayOfNumbers.length - 1]);

// Output the sum of all the numbers in the array

// Way 1
let sum = arrayOfNumbers[0];
for (let i = 1; i < arrayOfNumbers.length; i++) {
  sum += arrayOfNumbers[i];
}
console.log("sum", sum);

// Way 2
let sumForWay2 = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  sumForWay2 += arrayOfNumbers[i];
}

console.log("sumForWay2", sumForWay2);

// console.log("sumForWay3", sumForWay3);

// unexpectedArray
// const arrayOfRandomNumbers = Array.from({ length: 6 }, () =>
//   Math.floor(Math.random() * 9)
// );

// console.log(arrayOfRandomNumbers);

// String.substr(), String.substring()

// Given string: “One two three four”
const stringOfNumbers = "One two three four";
console.log(stringOfNumbers.substring(4, 7));

// indexOf(), includes(), replace(), replaceAll()
console.log("indexOf", stringOfNumbers.indexOf("e"));
console.log(stringOfNumbers.replace("n", "N"));
console.log(stringOfNumbers.replace("t", "T"));
console.log(stringOfNumbers.replaceAll("t", "T"));
console.log(stringOfNumbers.includes("two"));

let indexOfElementZero = arrayOfNumbers.indexOf(0);

arrayOfNumbers[indexOfElementZero] = 1;

console.log("arrayOfNumbers End", arrayOfNumbers);

// String.split()
let cars = "Volvo-BMW-Mercedes";
const arrayOfCars = cars.split("-");

console.log("arrayOfCars", arrayOfCars);

// String.length(), String.concat()
const arrayNumberTwo = [7, 8, 9];
console.log(arrayOfNumbers.concat(arrayNumberTwo));
console.log(stringOfNumbers.concat(": Those are the numbers"));
// “+” Operator
console.log(stringOfNumbers + ": Those are the numbers lastly");

// ES6 - ECMAScript6 - the newest.
console.log(`${stringOfNumbers}: Those are the numbers lastly`);

console.log(`Those are the numbers lastly 
New line`);
