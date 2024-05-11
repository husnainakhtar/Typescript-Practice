"use strict";
//Question 1
console.log("Question-1:");
console.log("Hello World!!!");
console.log("");
//Question 2
console.log("Question-2:");
let temperature = 11;
console.log("Temperature =", temperature);
if (temperature < 20) {
    console.log("It's Cold");
}
else
    console.log("Weather is good");
console.log("");
//Quesiton 3
console.log("Question-3:");
let apple = 10;
let apple_giveAway = 3;
console.log("Apples available", apple - apple_giveAway);
console.log("");
//Quesiton 4
console.log("Question-4:");
let firstName;
let lastName;
firstName = "Husnain";
lastName = "Akhtar";
let fullName;
fullName = `${firstName} ${lastName}`;
console.log(fullName);
console.log("");
//Question 5
console.log("Question-5:");
let n;
n = 10;
if (n > 3) {
    console.log("Yes");
}
else {
    console.log("NO");
}
console.log("");
//Question 6
console.log("Question-6:");
function circleArea(radius) {
    let area = 3.142 * radius * radius;
    console.log("Circle Ares is ", area);
}
circleArea(5);
console.log("");
//Question 7
console.log("Question-7:");
for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0) {
        console.log(i, " Fizz");
    }
    else if (i % 5 == 0) {
        console.log(i, " Buzz");
    }
    else {
        console.log(i);
    }
}
console.log("");
// Question 8
console.log("Question-8:");
let temp = [32, 37, 771, 98, 222];
let max = temp[0];
for (let i = 0; i < temp.length; i++) {
    if (temp[i] > max) {
        max = temp[i];
    }
}
console.log(temp);
console.log("Maximum number is ", max);
console.log("");
// Question 9
console.log("Question-9:");
let age = 21;
if (age < 18) {
    console.log("Minor");
}
else {
    console.log("Adult");
}
console.log("");
// Question 10
console.log("Question-10:");
function arraySum(num) {
    let count = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] > 0) {
            count++;
        }
    }
    console.log("Count of Postive Numbers in the array is ", count);
}
let pos_array = [1, -2, -33, 2, 3];
console.log(pos_array);
arraySum(pos_array);
console.log("");
//Question 11
console.log("Question-11:");
const wordsArray = ["abdullah", "asad", "husnain", "shahid", "amir"];
let fArray = [];
for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].charAt(0) == "a") {
        fArray.push(wordsArray[i]);
    }
}
console.log(fArray);
console.log("");
//Question 12
console.log("Question-12:");
const fruits = ["mango", "strawberry", "apple", "banana", "Melon"];
console.log(fruits);
console.log(fruits[fruits.length - 2]);
console.log("");
//Question 13
console.log("Question-13:");
function arraySquare(arrayInput) {
    let arrrayOutput = [];
    for (let i = 0; i < arrayInput.length; i++) {
        let temp = arrayInput[i] * arrayInput[i];
        arrrayOutput.push(temp);
    }
    return arrrayOutput;
}
let arrayInput = [11, 12, 13, 14, 15];
console.log("Input array is: ", arrayInput);
let arrayOut = [];
arrayOut = arraySquare(arrayInput);
console.log("Squared Array is: ", arrayOut);
console.log("");
//Question 14
console.log("Question-14:");
function arrayReverse(array) {
    let temp = [];
    for (let i = 0; i < array.length; i++) {
        temp[i] = array[array.length - 1 - i];
    }
    return temp;
}
console.log("Input Array is: ", arrayInput);
let array_reverse = [];
array_reverse = arrayReverse(arrayInput);
console.log("Reversed Array is: ", array_reverse);
console.log("");
//Question 15 - Sir I could not understand what is required for the question
console.log("Question-15:");
console.log("");
//Question-16
console.log("Question-16:");
function removeFalse(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == null ||
            array[i] == false ||
            array[i] == undefined ||
            array[i] == 0 ||
            (typeof array[i] == "number" && isNaN(array[i]))) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}
let falseyArray = [
    1,
    "husnain",
    false,
    undefined,
    null,
    0,
    32,
    NaN,
    "Typescript",
];
console.log("Falsey Array is: ", falseyArray);
let remove_falseyArray = [];
remove_falseyArray = removeFalse(falseyArray);
console.log("After removing falsey elements: ", remove_falseyArray);
console.log("");
// Question 17
console.log("Qestion-17:");
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array_concat = array1;
for (let i = 0; i < array2.length; i++) {
    array_concat.push(array2[i]);
}
console.log(array_concat);
console.log("");
// Question 18
console.log("Qestion-18:");
function checkArrayElement(x, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == x) {
            return i;
        }
    }
    return -1;
}
let arrayQ19 = [1, "husnain", 4, "Hello", 77, 33];
console.log(arrayQ19);
console.log("Index of 77 is:", checkArrayElement(77, arrayQ19));
console.log("");
//Question 20
console.log("Quesiton-20:");
function checkSmallestNumberArray(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
const arrayQ20 = [11, 12, 13, 14, 15, 6, 2, 17];
console.log(arrayQ20);
console.log("Smallest number in the array is ", checkSmallestNumberArray(arrayQ20));
console.log("");
//Question 21
console.log("Quesiton-21:");
function productArray(array) {
    let temp = 1;
    for (let i = 0; i < array.length; i++) {
        temp = temp * array[i];
    }
    return temp;
}
let arrayQ21 = [12, 2, 3, 4, 6];
console.log("Array: ", arrayQ21);
console.log("Product of Array is ", productArray(arrayQ21));
console.log("");
//Question 22
console.log("Quesiton-22:");
function filterByLength(array, n) {
    let temp = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length == n) {
            temp.push(array[i]);
        }
    }
    return temp;
}
let arrayQ22 = [];
arrayQ22 = ["husnain", "akhtar", "class", "artificial", "intelligence"];
console.log("Input Array is: ", arrayQ22);
console.log("Element with Character Length 4 are: ", filterByLength(arrayQ22, 5));
console.log("");
//Question 23
console.log("Quesiton-23:");
function findDuplicates(array) {
    let temp = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] == array[j]) {
                temp.push(array[i]);
            }
        }
    }
    return temp;
}
let arrayQ23 = [1, 2, 2, 3, 3, 4, 5, 6, 7, 7, 8];
console.log("Input Array is: ", arrayQ23);
console.log("Duplicates in the array are: ", findDuplicates(arrayQ23));
console.log("");
//Question 24
console.log("Quesiton-24:");
function incrementAll(array) {
    for (let i = 0; i < array.length; i++) {
        array[i]++;
    }
}
let arrayQ24 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Input array is:", arrayQ24);
incrementAll(arrayQ24);
console.log("Incremented array is: ", arrayQ24);
console.log("");
//Question 25
console.log("Quesiton-25:");
function findOccurences(array, n) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == n) {
            count++;
        }
    }
    return count;
}
let arrayQ25 = [1, 2, 2, 2, 2, 3, 3, 4, 5, 6, 7, 8];
console.log("Input array is:", arrayQ25);
console.log("Occurences of 2 is: ", findOccurences(arrayQ25, 2));
console.log("");
//Question 26
console.log("Quesiton-26:");
function isSorted(array) {
    let min = array[0];
    let status = true;
    for (let i = 1; i < array.length; i++) {
        if (array[i] >= min) {
            min = array[i];
        }
        else {
            status = false;
        }
    }
    return status;
}
let arrayQ26 = [1, 2, 3, 4, 5, 6, 7, 0, 9];
console.log("Input array is: ", arrayQ26);
if (isSorted(arrayQ26) == true) {
    console.log("The Array is sorted");
}
else {
    console.log("The array is not sorted");
}
console.log("");
//Question 27
console.log("Quesiton-27:");
function arrayToString(array) {
    let n = "";
    if (array.length > 2) {
        for (let i = 0; i < array.length - 2; i++) {
            n = n.concat(array[i], ", ");
        }
    }
    n = n.concat(array[array.length - 2], " and ", array[array.length - 1]);
    return n;
}
let arrayQ27 = ["Apple", "Mango", "Orange", "Strawberry"];
console.log("Input Array is:", arrayQ27);
let strQ27 = arrayToString(arrayQ27);
console.log(strQ27);
console.log("");
//Question 28
console.log("Quesiton-28:");
function farenheitToCelcius(f) {
    let c;
    c = ((f - 32) * 5) / 9;
    return c;
}
let ftemp = 98;
console.log("Input Farenheit Temp is: ", ftemp);
console.log("Temperature in Celcius is ", farenheitToCelcius(ftemp));
console.log("");
//Question 29
console.log("Quesiton-29:");
function minMaxAverage(array) {
    let min = array[0];
    let max = array[0];
    let average = array[0];
    let result = [];
    for (let i = 1; i < array.length; i++) {
        average += array[i];
        if (array[i] > max) {
            max = array[i];
        }
        else if (array[i] < min) {
            min = array[i];
        }
    }
    average = average / array.length;
    result.push(min);
    result.push(max);
    result.push(average);
    return result;
}
let arrayQ29 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultQ29 = minMaxAverage(arrayQ29);
console.log("Input array is:", arrayQ29);
console.log("Min is", resultQ29[0], " Max is ", resultQ29[1], " Avg is ", resultQ29[2]);
console.log("");
//Question 30
console.log("Quesiton-30:");
function swapElements(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}
let arrayQ30 = ["husnain", "akhtar", 1, 2, 3, 4, 5, 6];
console.log("Input Array is: ", arrayQ30);
swapElements(arrayQ30, 1, 2);
console.log("After Swapping index 1 & 2", arrayQ30);
console.log("");
//Question 31
console.log("Quesiton-31:");
function stringCharacterCount(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == char) {
            count++;
        }
    }
    return count;
}
let strQ31 = "Igloooo";
console.log("Input String is ", strQ31);
console.log("Count of o is", stringCharacterCount(strQ31, "o"));
console.log("");
//Question 32
console.log("Quesiton-32:");
const toDoList = [
    { task: "Review Project 1 design", completed: false },
    { task: "Followup Meeting with Vendors", completed: true },
    { task: "Email Progress Report", completed: false },
    { task: "Prepare Board Presentation", completed: true },
    { task: "Plan Site Visit", completed: false },
];
function checkCompletedTasks(array) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i].completed) {
            console.log(array[i].task);
        }
    }
}
checkCompletedTasks(toDoList);
console.log("");
//Question 33
console.log("Quesiton-33:");
function sortArrayAscendingOrder(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
let arrayQ33 = [22, 2, 55, 31, 13, 99, 11];
console.log("Input array is ", arrayQ33);
console.log("Sorted array is ", sortArrayAscendingOrder(arrayQ33));
console.log("");
//Question 34
console.log("Question-34");
function revserArray(array) {
    let temp = [];
    for (let i = 0; i < array.length; i++) {
        temp[i] = array[array.length - 1 - i];
    }
    return temp;
}
let arrayQ34 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Input Array is ", arrayQ34);
console.log("Reversed Array is ", revserArray(arrayQ34));
console.log("");
