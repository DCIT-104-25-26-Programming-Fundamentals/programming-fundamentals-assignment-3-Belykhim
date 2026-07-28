// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================

const readlineSync = require('readline-sync');

/**
 * PART A — Generates and returns an array containing the first N Fibonacci numbers.
 *
 * @param {number} n - Number of terms to generate.
 * @returns {number[]} Array of Fibonacci numbers.
 */
function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        const nextTerm = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextTerm);
    }
    return sequence;
}

/**
 * PART B — Checks if a given number belongs to the Fibonacci sequence.
 *
 * @param {number} num - The non-negative number to check.
 * @returns {boolean} True if num is a Fibonacci number, false otherwise.
 */
function isFibonacci(num) {
    if (num < 0) return false;
    if (num === 0 || num === 1) return true;

    let a = 0;
    let b = 1;
    let c = a + b;

    while (c <= num) {
        if (c === num) {
            return true;
        }
        a = b;
        b = c;
        c = a + b;
    }

    return false;
}

/**
 * Main function to run the program.
 */
function main() {
    console.log('=== PART A: First N Fibonacci Terms ===');
    const termsInput = readlineSync.question('How many terms? ');
    const n = parseInt(termsInput, 10);

    if (isNaN(n) || n <= 0) {
        console.log('Error: Number of terms must be a positive integer.');
    } else {
        const fibSequence = generateFibonacci(n);
        console.log(`Fibonacci sequence: ${fibSequence.join(' ')}`);
    }

    console.log('\n=== PART B: Check Fibonacci Membership ===');
    const checkInput = readlineSync.question('Enter a number to check: ');
    const target = parseInt(checkInput, 10);

    if (isNaN(target) || target < 0) {
        console.log('Error: Please enter a valid non-negative integer.');
    } else {
        if (isFibonacci(target)) {
            console.log(`${target} is a Fibonacci number.`);
        } else {
            console.log(`${target} is NOT a Fibonacci number.`);
        }
    }
}

// Run the main program
main();