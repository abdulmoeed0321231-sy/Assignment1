// Q1: Print numbers 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Q2: Sum of first N numbers
let n = 10;
let sum = 0;
let i = 1;

while (i <= n) {
    sum = sum + i;
    i++;
}

console.log("Sum of first " + n + " numbers:", sum);


// Q3: Multiplication table
let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}


// Q4: Factorial calculation
let factorialNumber = 5;
let factorial = 1;
let j = 1;

while (j <= factorialNumber) {
    factorial = factorial * j;
    j++;
}

console.log("Factorial of " + factorialNumber + ":", factorial);


// Q5: Reverse counting
for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// Q6: Even numbers up to N
let evenN = 20;
let evenNumber = 1;

do {
    if (evenNumber % 2 === 0) {
        console.log(evenNumber);
    }

    evenNumber++;
} while (evenNumber <= evenN);


// Q7: Sum of digits
let digitNumber = 12345;
let digitSum = 0;

while (digitNumber > 0) {
    let digit = digitNumber % 10;
    digitSum = digitSum + digit;
    digitNumber = Math.floor(digitNumber / 10);
}

console.log("Sum of digits:", digitSum);


// Q8: Fibonacci series
let first = 0;
let second = 1;

for (let i = 1; i <= 10; i++) {
    console.log(first);

    let next = first + second;
    first = second;
    second = next;
}


// Q9: Guessing game
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let correctNumber = 7;

function guessNumber() {
    rl.question("Guess the number: ", (answer) => {
        let guess = Number(answer);

        if (guess === correctNumber) {
            console.log("Correct! You guessed the number.");
            rl.close();
        } else {
            console.log("Wrong! Try again.");
            guessNumber();
        }
    });
}

guessNumber();