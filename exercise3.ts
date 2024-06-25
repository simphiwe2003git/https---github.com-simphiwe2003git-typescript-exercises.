// Exercise 3: Functions

// 1. Function that takes two numbers as parameters and returns their sum
function sumNumbers(a: number, b: number): number {
    return a + b;
}

// Example usage of sumNumbers function
console.log(sumNumbers(5, 3));  // Output: 8

// 2. Function that returns a fixed number
function getFixedNumber(): number {
    return 42;
}

// Example usage of getFixedNumber function
console.log(getFixedNumber());  // Output: 42

// 3. Function that takes a string and an optional boolean parameter
//    If boolean parameter is true, return string in uppercase; otherwise, return it in lowercase.
function formatString(input: string, toUpper?: boolean): string {
    if (toUpper) {
        return input.toUpperCase();
    } else {
        return input.toLowerCase();
    }
}

// Example usage of formatString function
console.log(formatString("Hello", true));   // Output: "HELLO"
console.log(formatString("WORLD", false));  // Output: "world"
