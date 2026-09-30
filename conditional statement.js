// Q1: Check if a number is positive, negative, or zero

let number1 = 10;

if (number1 > 0) {
    console.log("Positive");
} else if (number1 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// Q2: Even or odd check

let number2 = 7;

if (number2 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// Q3: Largest of two numbers

let number3 = 25;
let number4 = 15;

if (number3 > number4) {
    console.log("Larger number is " + number3);
} else if (number4 > number3) {
    console.log("Larger number is " + number4);
} else {
    console.log("Both numbers are equal");
}


// Q4: Grade evaluation

let percentage = 78;

if (percentage >= 80) {
    console.log("Grade A");
} else if (percentage >= 70) {
    console.log("Grade B");
} else if (percentage >= 60) {
    console.log("Grade C");
} else if (percentage >= 50) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}


// Q5: Leap year check

let year = 2024;

if (year % 400 === 0) {
    console.log("Leap Year");
} else if (year % 100 === 0) {
    console.log("Not a Leap Year");
} else if (year % 4 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}


// Q6: Day of week switch

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


// Q7: Calculator switch

let num1 = 20;
let num2 = 5;
let operator = "+";

switch (operator) {
    case "+":
        console.log("Answer = " + (num1 + num2));
        break;

    case "-":
        console.log("Answer = " + (num1 - num2));
        break;

    case "*":
        console.log("Answer = " + (num1 * num2));
        break;

    case "/":
        console.log("Answer = " + (num1 / num2));
        break;

    default:
        console.log("Invalid operator");
}


// Q8: Vowel or consonant

let character = "a";

switch (character.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;

    default:
        console.log("Consonant");
}


// Q9: Traffic light system

let color = "Red";

switch (color.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Wait");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
}


// Q10: Menu-driven program

let choice = 1;

switch (choice) {
    case 1:
        console.log("Check Balance");
        break;

    case 2:
        console.log("Deposit");
        break;

    case 3:
        console.log("Withdraw");
        break;

    case 4:
        console.log("Exit");
        break;

    default:
        console.log("Invalid choice");
}