function sayHello() {
    return "Hello, World!";
}
function doubleNumber(num) {
    return num * 2;
}
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
const doubleNumber1 = (num) => num * 2;
function subtractTen(num) {
    return num - 10;
}
function isGreaterThanFive(num) {
    return num > 5;
}
function isBetweenOneAndTen(num) {
    return num >= 1 && num <= 10;
}
function isEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
function checkAge(age) {
    return age >= 18 ? "Adult" : "Minor";
}
function getDayType(day) {
    switch (day) {
        case 6:
        case 7:
            return "Weekend";
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Weekday";
        default:
            return "Invalid day"; // In case the number is not between 1-7
    }
}


// 1. Basic Function
console.log(sayHello());  // Output: "Hello, World!"

// 2. Function with Parameters
console.log(doubleNumber(5));  // Output: 10

// 3. Simple Return Function
console.log(addTwoNumbers(3, 7));  // Output: 10

// 4. Arrow Function (already defined above)
// We called the arrow function already in step 2, so we use it again here
console.log(doubleNumber1(8));  // Output: 16

// 5. Arithmetic Operator
console.log(subtractTen(25));  // Output: 15

// 6. Comparison Operator
console.log(isGreaterThanFive(6));  // Output: true
console.log(isGreaterThanFive(4));  // Output: false

// 7. Logical Operator
console.log(isBetweenOneAndTen(5));  // Output: true
console.log(isBetweenOneAndTen(15));  // Output: false

// 8. If-Else Statement
console.log(isEven(4));  // Output: "Even"
console.log(isEven(7));  // Output: "Odd"

// 9. Ternary Operator
console.log(checkAge(20));  // Output: "Adult"
console.log(checkAge(16));  // Output: "Minor"

// 10. Switch Statement
console.log(getDayType(1));  // Output: "Weekday"
console.log(getDayType(6));  // Output: "Weekend"
console.log(getDayType(8));  // Output: "Invalid day"
