// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================

const readlineSync = require('readline-sync');

/**
 * 1. Addition
 */
function add(num1, num2) {
    return num1 + num2;
}

/**
 * 2. Subtraction
 */
function subtract(num1, num2) {
    return num1 - num2;
}

/**
 * 3. Multiplication
 */
function multiply(num1, num2) {
    return num1 * num2;
}

/**
 * 4. Division
 */
function divide(num1, num2) {
    if (num2 === 0) {
        return null; // Signals division by zero error
    }
    return num1 / num2;
}

/**
 * 5. Modulus
 */
function modulus(num1, num2) {
    if (num2 === 0) {
        return null; // Signals division/modulus by zero error
    }
    return num1 % num2;
}

/**
 * 6. Exponentiation
 */
function power(num1, num2) {
    return num1 ** num2;
}

/**
 * Helper function to safely read a numerical input from the user.
 */
function readNumber(promptMessage) {
    while (true) {
        const input = readlineSync.question(promptMessage);
        const num = parseFloat(input);
        if (!isNaN(num)) {
            return num;
        }
        console.log('Invalid input. Please enter a valid number.');
    }
}

/**
 * Main application loop
 */
function main() {
    let running = true;

    while (running) {
        console.log('\n============================');
        console.log('       SIMPLE CALCULATOR');
        console.log('============================');
        console.log('1. Addition       ( + )');
        console.log('2. Subtraction    ( - )');
        console.log('3. Multiplication ( * )');
        console.log('4. Division       ( / )');
        console.log('5. Modulus        ( % )');
        console.log('6. Exponentiation ( ** )');
        console.log('7. Quit');

        const choice = readlineSync.question('Select an operation (1-7): ').trim();

        if (choice === '7') {
            console.log('\nGoodbye!');
            running = false;
            break;
        }

        if (!['1', '2', '3', '4', '5', '6'].includes(choice)) {
            console.log('\nError: Invalid option. Please select a number from 1 to 7.');
            continue;
        }

        const num1 = readNumber('\nEnter first number : ');
        const num2 = readNumber('Enter second number: ');

        let result = null;
        let symbol = '';

        switch (choice) {
            case '1':
                result = add(num1, num2);
                symbol = '+';
                break;
            case '2':
                result = subtract(num1, num2);
                symbol = '-';
                break;
            case '3':
                result = multiply(num1, num2);
                symbol = '*';
                break;
            case '4':
                result = divide(num1, num2);
                symbol = '/';
                break;
            case '5':
                result = modulus(num1, num2);
                symbol = '%';
                break;
            case '6':
                result = power(num1, num2);
                symbol = '**';
                break;
        }

        if (result === null) {
            console.log('Error: Cannot divide or calculate modulus by zero.');
        } else {
            // Format to 2 decimal places if non-integer, or present cleanly
            const formattedResult = Number.isInteger(result) ? result : result.toFixed(2);
            console.log(`Result: ${num1} ${symbol} ${num2} = ${formattedResult}`);
        }
    }
}

// Run the calculator program
main();