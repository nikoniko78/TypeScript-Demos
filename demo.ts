// demo.ts

// Function to greet the user
function greet(name: string): string {
    return `Hello, ${name}! Welcome to TypeScript!`;
}

// Function to add two numbers
function add(a: number, b: number): number {
    return a + b;
}

// Variables
const userName: string = "YOUR NAME";
const number1: number = 5;
const number2: number = 10;

// Output
console.log(greet(userName));
console.log(`The sum of ${number1} and ${number2} is:`, add(number1, number2));
