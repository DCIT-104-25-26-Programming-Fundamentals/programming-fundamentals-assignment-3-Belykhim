const readlineSync = require('readline-sync');

/**
 * Returns the letter grade for a given numerical score.
 * Returns null if the score is out of range (less than 0 or greater than 100).
 *
 * @param {number} score - The numerical score (0-100).
 * @returns {string|null} - Letter grade ('A', 'B', 'C', 'D', 'F') or null if invalid.
 */
function getGrade(score) {
    // Validate score range
    if (score < 0 || score > 100 || isNaN(score)) {
        return null;
    }

    // Determine letter grade
    if (score >= 80) {
        return 'A';
    } else if (score >= 70) {
        return 'B';
    } else if (score >= 60) {
        return 'C';
    } else if (score >= 50) {
        return 'D';
    } else {
        return 'F';
    }
}

/**
 * Main function to run the program.
 */
function main() {
    // Read user input as a float number
    const input = readlineSync.question('Enter student score (0-100): ');
    const score = parseFloat(input);

    const grade = getGrade(score);

    if (grade === null) {
        console.log('Error: Score must be between 0 and 100.');
    } else {
        console.log(`Grade: ${grade}`);
    }
}

// Run the main program
main();