// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================

const readlineSync = require('readline-sync');

/**
 * PART A — Prints the multiplication table for a single number from 1 to 12.
 *
 * @param {number} num - The number to generate the table for.
 */
function printSingleTable(num) {
    console.log(`\nMultiplication Table for ${num}:`);
    for (let i = 1; i <= 12; i++) {
        const result = num * i;
        console.log(`${num}  x  ${i.toString().padEnd(2)} =  ${result}`);
    }
}

/**
 * PART B — Prints multiplication tables for all numbers from 1 to N.
 *
 * @param {number} n - The maximum number to generate tables up to.
 */
function printTablesUpTo(n) {
    for (let i = 1; i <= n; i++) {
        printSingleTable(i);
        if (i < n) {
            console.log('---------------------------');
        }
    }
}

/**
 * Main function to run the program.
 */
function main() {
    console.log('=== PART A: Single Multiplication Table ===');
    const inputA = readlineSync.question('Enter a number for single table: ');
    const numA = parseInt(inputA, 10);

    if (isNaN(numA) || numA <= 0) {
        console.log('Error: Please enter a valid positive integer.');
        return;
    }

    printSingleTable(numA);

    console.log('\n=== PART B: Tables from 1 to N ===');
    const inputB = readlineSync.question('Enter maximum number N: ');
    const numB = parseInt(inputB, 10);

    if (isNaN(numB) || numB <= 0) {
        console.log('Error: Please enter a valid positive integer.');
        return;
    }

    printTablesUpTo(numB);
}

// Run the main program
main();