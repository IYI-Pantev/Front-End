// console.log("Page successfully loaded script.js");

// var website = "https://codingforeverybody.com/";
// var teacherName = "Kalob Taulien";

// console.log(teacherName);

// // var apples = 3;
// // console.log(apples);
// if (teacherName == "Kalob Taulien") {
//     let apples = 3;
//     const height = "6'0";
//     console.log("I have", apples, "apples")
// }

// if (teacherName === "Kalob Taulien") {
//     var pears = 4

// }
// console.log("I have", pears, "pears");

// Conditional statements

// let score = 75;

// if (score >= 90) {
//     console.log("Grade: A");
// } else if (score >= 80) {
//     console.log("Grade: B");
// } else if (score >= 70) {
//     console.log("Grade: C"); // This block runs because the condition is true
// } else {
//     console.log("Grade: D");
// }

// let twitter = "@ElonX";
// // console.log(twitter)
// if (twitter == "@NPantev") {
//     console.log(`Yor twitter is ${twitter}`);
// } else if (twitter =="@ElonX") {
//     console.log(`Hail ${twitter}!`);
// }else {
//     console.log("Unknown account");
// }

// JavaScript DOM

const box = document.getElementById("box");

box.innerHTML = "JavaScript <strong>DOM</strong> <u>example</u>";

// Object (dictionary)

// let person = {
//     'name': 'Jack',
//     'job': 'Wev dev',
//     'age': 29,
//     'favFoods': ['Burger', 'Salad', 'Lentils']
// };
// console.log(person);


//User input
// 1st way - prompt
// let username;

// username = prompt("What's you username?")

// console.log(username);
//2nd way - textbox
// let username;
// document.getElementById("mySubmit").onclick = function() {
//     username = document.getElementById("myText").value;
//     document.getElementById("heading").innerHTML = `Welcome ${username}!`;
// }

// Arrays
const fruit = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruit.toString());