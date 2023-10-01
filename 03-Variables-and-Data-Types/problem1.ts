import prompt from 'prompt-sync';

const firstName: string = prompt('Enter your first name: ');
const lastName: string = prompt('Enter your last name: ');
const birthYear: number = Number(prompt('Enter your born year: '));

console.log(`Hello, ${firstName} ${lastName}! You were born in ${birthYear}.`);
