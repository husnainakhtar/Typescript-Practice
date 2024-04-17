// Practice Task-1: Hello Variable
console.log("Practice Task-1"); //Printing the heading of Task
let greeting; // Declaring Variable
greeting = "Hello World!!"; // Assigning variable value
console.log(greeting); //Printing the assigned variable
console.log(""); //Printing Empty line
//Practice Task-2: Basic Math
console.log("Practice Task-2"); //Printing the heading of Task
let num1, num2; //Declaring two variable
(num1 = 36), (num2 = 7); //Assigning integer values
console.log("Num1=", num1); //Printing 1st Variable
console.log("Num2=", num2); //Printing 2nd variable
console.log("Sum of num1 + num2=", num1 + num2); //Printing Arithematic Operation - Addition
console.log("Subtraction of num1 - num2=", num1 - num2); //Printing Arithematic Operation - Subtration
console.log("Multiplication of num1 + num2=", num1 * num2); //Printing Arithematic Operation - Multiplication
console.log("Divison of num1 / num2=", num1 / num2); //Printing Arithematic Operation - Divison
console.log(""); //Printing Empty line
//Practice Task-3: Swapping Values
console.log("Practice Task-3"); //Printing the heading of Task
let a = 1, //Declaring variable
  b = 2;
console.log("a=", a); //Printing Variable before Swapping values
console.log("b=", b);
console.log("After Swapping Values"); //Printing a text
let temp = a; //Declaring temporary varaible for holding the value
a = b;
b = temp;
console.log("a=", a); //Printing variables after Swap
console.log("b=", b);
console.log(""); //Printing Empty line
//Practice Task-4: Type Annotation (TypeScript)
console.log("Practice Task-4"); //Printing the heading of Task
let message: string;
//message = 1;
/* Give following error during compilation
34 message = 1;
Found 1 error in index.ts:34
 */
console.log(""); //Printing Empty line
//Practice Task-5: Modulus Operator
console.log("Practice Task-5"); //Printing the heading of Task
console.log("Num1=", num1); //Printing Num1 varaible already declared before
console.log("Num2=", num2);
console.log("Modulus of Num1 & Num2=", num1 % num2);
console.log(""); //Printing Empty line
//Practice Task-6: Increment Challenge
console.log("Practice Task-6"); //Printing the heading of Task
let counter = 0;
console.log("Initial Value of Counter =", counter);
counter += 1;
console.log("Incremented Value of Counter via Method-1=", counter);
counter = counter + 1;
console.log("Incremented Value of Counter via Method-2=", counter);
console.log(""); //Printing Empty line
//Practice Task-7: Logical Gates
console.log("Practice Task-7"); //Printing the heading of Task
let In1 = true,
  In2 = false,
  In3 = true;
console.log("Input 1=", In1, " Input2=", In2, " Input 3=", In3);
console.log("Logical AND for Inouts = ", In1 && In2 && In3);
console.log("Logical OR for Inouts = ", In1 || In2 || In3);
console.log("Logical NOT for Inouts 1 = ", !In1);
console.log("Logical NOT for Inouts 2 = ", !In2);
console.log("Logical NOT for Inouts 3 = ", !In3);
console.log(""); //Printing Empty line
//Practice Task-8: Compound Assignment
console.log("Practice Task-8"); //Printing the heading of Task
let num = 10;
console.log("Initial Value Before Compounding=", num);
console.log("Value after Addition commpoudning by 35=", (num += 35));
console.log("Value after Subtraction commpoudning by 5=", (num -= 5));
console.log("Value after Multiplication commpoudning by 3=", (num *= 3));
console.log("Value after Division commpoudning by 5=", (num /= 5));
console.log(""); //Printing Empty line
//Practice Task-9: Even or Odd
console.log("Practice Task-9"); //Printing the heading of Task
//num variable already declared only reinitialing value at this stage of the code
num = 11;
console.log("Number to check for Even or Odd", num);
if (num % 2 == 0) {
  console.log("Number is Even");
} else {
  console.log("Number is Odd");
}
console.log(""); //Printing Empty line
//Practice Task-10: Volting Eligilibility
console.log("Practice Task-10"); //Printing the heading of Task
let age = 19;
console.log("Current age of the person is ", age);
if (age >= 18) {
  console.log("The person is ELIGIBLE to Vote ");
} else {
  console.log("The person is NOT ELIGIBLE to Vote");
}
console.log(""); //Printing Empty line
//Practice Task-11: Grading System
console.log("Practice Task-11"); //Printing the heading of Task
let score = 63;
console.log("Current Score of the Student is ", score);
//Setting Grade Criteria
if (score >= 80) {
  console.log("Grade of the Student is A");
} else if (score >= 70 && score < 80) {
  console.log("Grade of the Student is B");
} else if (score >= 60 && score < 70) {
  console.log("Grade of the Student is C");
} else if (score >= 50 && score < 60) {
  console.log("Grade of the Student is D");
} else if (score >= 40 && score < 50) {
  console.log("Grade of the Student is E");
} else {
  console.log("Grade of the Student is F");
}
console.log(""); //Printing Empty line
//Practice Task-12: Max of Three
console.log("Practice Task-12"); //Printing the heading of Task
let n1 = 21,
  n2 = 22,
  n3 = 23;
console.log("Number 1=", n1, " Number 2=", n2, " Number 3=", n3);
if (n1 > n2 && n1 > n3) {
  console.log("Max number is", n1);
} else if (n2 > n1 && n2 > n3) {
  console.log("Max number is ", n2);
} else {
  console.log("Max number is ", n3);
}
console.log(""); //Printing Empty line
//Practice Task-13: Leap Year Checker
console.log("Practice Task-13"); //Printing the heading of Task
let year = 2024;
console.log("Selected Year is ", year);
if (year % 4 == 0) {
  console.log("This is a LEAP year");
} else {
  console.log("This is not a LEAP year");
}
console.log(""); //Printing Empty line
//Practice Task-14: Farenheit to Celcius
console.log("Practice Task-14"); //Printing the heading of Task
let temperature = 97;
console.log("Selected Value of Temperature in Farenheit is ", temperature);
let T_Celcius: Number;
T_Celcius = ((temperature - 32) * 5) / 9;
console.log("Temperature in Centrigrade is ", T_Celcius);
console.log(""); //Printing Empty line
//Practice Task-15: Farenheit to Celcius
console.log("Practice Task-15"); //Printing the heading of Task
let check_number = -5;
console.log(
  "Selecter Numbers to Check whether Postive, Zero or Negative is ",
  check_number
);
if (check_number > 0) {
  console.log("Number is Positive");
} else if (check_number == 0) {
  console.log("Number is Zero");
} else {
  console.log("Number is Negative");
}
console.log(""); //Printing Empty line
//Practice Task-16: Farenheit to Celcius
console.log("Practice Task-16"); //Printing the heading of Task
let table_number = 7;
console.log("Table of Nuber", table_number);
for (let i = 1; i <= 10; i++) {
  console.log(table_number, " x ", i, " = ", table_number * i);
}
// End of Assignment
