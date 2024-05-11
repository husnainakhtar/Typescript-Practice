/*function printTable(input: number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${input} * ${i} = ${input * i}`);
  }
}
printTable(5);
printTable(17);
*/
//Question 1
console.log("Hello World!!!");
//Question 2
let temperature = 11;
if (temperature < 20) {
  console.log("It's Cold");
} else console.log("Weather is good");
//Quesiton 3
let apple = 10;
let apple_giveAway = 3;
console.log("Apples available", apple - apple_giveAway);
//Quesiton 4
let firstName: string;
let lastName: string;
firstName = "Husnain";
lastName = "Akhtar";
let fullName: string;
fullName = `${firstName} ${lastName}`;
console.log(fullName);
//Question 5
let n: number;
n = 10;
if (n > 3) {
  console.log("Yes");
} else {
  console.log("NO");
}
//Question 6
function circleArea(radius: number) {
  let area = 3.142 * radius * radius;
  console.log("Circle Ares is ", area);
}
circleArea(5);
//Question 7
for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0) {
    console.log(i, " Fizz");
  } else if (i % 5 == 0) {
    console.log(i, " Buzz");
  } else {
    console.log(i);
  }
}
// Question 8
let temp = [32, 37, 771, 98, 222];
let max = temp[0];
for (let i = 0; i < temp.length; i++) {
  if (temp[i] > max) {
    max = temp[i];
  }
}
console.log(temp);
console.log("Maximum number is ", max);
// Question 9
let age = 21;
if (age < 18) {
  console.log("Minor");
} else {
  console.log("Adult");
}
// Question 10
function arraySum(num: number[]) {
  let count = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] > 0) {
      count++;
    }
  }
  console.log("Count of Postive Numbers in the array is ", count);
}
let pos_array = [1, -2, 33, 2, 3];
console.log(pos_array);
arraySum(pos_array);
//Question 11
const wordsArray = ["abdullah", "asad", "husnain", "shahid", "amir"];
let fArray = [];
for (let i = 0; i < wordsArray.length; i++) {
  if (wordsArray[i].charAt(0) == "a") {
    fArray.push(wordsArray[i]);
  }
}
console.log(fArray);
//Question 12
const fruits = ["mango", "strawberry", "apple", "banana", "Melon"];
console.log(fruits[fruits.length - 2]);
