const readlineSync = require('readline-sync');

/**
 * Calculates the sum of all elements in an array.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} The sum.
 */
function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

/**
 * Calculates the average of all elements in an array.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} The average.
 */
function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;
    const sum = calculateSum(numbers);
    return sum / numbers.length;
}

/**
 * Finds the maximum value in an array without using Math.max().
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} The maximum value.
 */
function findMaximum(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

/**
 * Finds the minimum value in an array without using Math.min().
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} The minimum value.
 */
function findMinimum(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

/**
 * Main function to run the program.
 */
function main() {
    const countInput = readlineSync.question('How many numbers? ');
    const count = parseInt(countInput, 10);

    // Validate that count is a positive integer
    if (isNaN(count) || count <= 0) {
        console.log('Error: Count must be a positive integer.');
        return;
    }

    const numbers = [];

    // Collect the numbers from the user
    for (let i = 1; i <= count; i++) {
        const numInput = readlineSync.question(`Enter number ${i}: `);
        const num = parseFloat(numInput);
        numbers.push(num);
    }

    // Compute statistical values
    const sum = calculateSum(numbers);
    const average = calculateAverage(numbers);
    const max = findMaximum(numbers);
    const min = findMinimum(numbers);

    // Print results
    console.log('\nResults:');
    console.log(`Sum:     ${sum}`);
    console.log(`Average: ${average}`);
    console.log(`Maximum: ${max}`);
    console.log(`Minimum: ${min}`);
}

// Run the main program
main();