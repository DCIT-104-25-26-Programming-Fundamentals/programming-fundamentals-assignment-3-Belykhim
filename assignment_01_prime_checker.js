// Import the readline-sync package to get user input
const readlineSync = require('readline-sync');

/**
 * Function to check if a number is prime.
 * @param {number} n - The number to check.
 * @returns {boolean} - Returns true if n is prime, false otherwise.
 */
function isPrime(n) {
    // Numbers less than 2 are NOT prime
    if (n < 2) {
        return false;
    }

    // Check for divisors from 2 up to the square root of n` 
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // Found a divisor, so it's not prime
        }
    }

    return true; // No divisors found, so it is prime
}

/**
 * Main function to run the program.
 */
function main() {
    // Read integer input from the user
    const number = readlineSync.questionInt('Enter a number: ');

    // Call isPrime and display the appropriate output
    if (isPrime(number)) {
        console.log(`${number} is a prime number.`);
    } else {
        console.log(`${number} is NOT a prime number.`);
    }
}

// Run the main program
main();