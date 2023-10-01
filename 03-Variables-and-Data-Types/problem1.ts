import  * as promptSync from 'prompt-sync'

const prompt = promptSync();

const firstName: string = prompt('Enter your first name: ');
const lastName: string = prompt('Enter your last name: ');
const birthYear: number = Number(prompt('Enter your born year: '));

// Join the data into a single string
const fullName = `${firstName} ${lastName}`;

// Calculate the user's age
const age = 2023 - birthYear;

console.log(`Hello, ${fullName}! You are ${age} years old.`);
