"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var firstName = prompt('Enter your first name: ');
var lastName = prompt('Enter your last name: ');
var birthYear = Number(prompt('Enter your born year: '));
// Join the data into a single string
var fullName = "".concat(firstName, " ").concat(lastName);
// Calculate the user's age
var age = 2023 - birthYear;
console.log("Hello, ".concat(fullName, "! You are ").concat(age, " years old."));
