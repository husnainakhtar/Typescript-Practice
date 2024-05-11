"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Objects
// Two Data Types: Primitive & Non-Primitive Data types
// Primitive Data Types: Null, String, Boolean, Number, Undefined
//Non-Primitive Data types: Arrays & Objects
// Multiple types data can be stored in objects
//array = []
//Objects ={}
//Keys : Value
let abc = "This is abc";
console.log(abc);
let obj = {
    name: "Husnain",
    age: 38,
    gender: "male",
};
console.log(obj);
console.log(obj.name);
console.log(obj["age"]);
let fname = {};
console.log(typeof fname);
fname = 56;
console.log(typeof fname);
console.log(fname);
let lname = "Akhtar";
let age = 56;
const a = 3, b = 5;
let z = 6;
if (true) {
    let z = 4;
    console.log("Let: ", z);
}
else {
    let z = "string";
    console.log("Let: ", z);
}
console.log("Let: ", z);
