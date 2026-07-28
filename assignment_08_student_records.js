// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================

const readlineSync = require('readline-sync');

// Global array to hold student objects
let students = [];

/**
 * Helper function to calculate the average of an array of numbers.
 * @param {number[]} scores - Array of numerical scores.
 * @returns {number} Average score, or 0 if array is empty.
 */
function calculateAverage(scores) {
    if (!scores || scores.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

/**
 * 1. Add a Student
 * Prompts user for name, ID, and assessment scores, then adds student object to array.
 */
function addStudent() {
    console.log('\n--- Add a Student ---');
    const name = readlineSync.question('Student name: ').trim();
    const idInput = readlineSync.question('Student ID: ').trim();
    const id = parseInt(idInput, 10);

    if (!name || isNaN(id)) {
        console.log('Error: Invalid name or ID entered.');
        return;
    }

    const countInput = readlineSync.question('How many scores? ');
    const count = parseInt(countInput, 10);

    if (isNaN(count) || count <= 0) {
        console.log('Error: Score count must be a positive integer.');
        return;
    }

    const scores = [];
    for (let i = 1; i <= count; i++) {
        const scoreInput = readlineSync.question(`Enter score ${i}: `);
        const score = parseFloat(scoreInput);
        if (isNaN(score)) {
            console.log('Invalid score entered; recorded as 0.');
            scores.push(0);
        } else {
            scores.push(score);
        }
    }

    const newStudent = {
        name: name,
        id: id,
        scores: scores
    };

    students.push(newStudent);
    console.log(`Student "${name}" added successfully.`);
}

/**
 * 2. Display All Students
 * Prints a table view of all students, their scores, and calculated averages.
 */
function displayAllStudents() {
    console.log('\n--- All Student Records ---');
    if (students.length === 0) {
        console.log('No student records found.');
        return;
    }

    students.forEach((student, index) => {
        const avg = calculateAverage(student.scores);
        console.log(`\n${index + 1}. Name:    ${student.name}`);
        console.log(`   ID:      ${student.id}`);
        console.log(`   Scores:  [${student.scores.join(', ')}]`);
        console.log(`   Average: ${avg.toFixed(2)}`);
    });
}

/**
 * 3. Calculate Average Score for a Specific Student
 * Prompts for a student ID, searches the array, and outputs the average score.
 */
function calculateStudentAverage() {
    console.log('\n--- Calculate Student Average ---');
    if (students.length === 0) {
        console.log('No student records found.');
        return;
    }

    const searchIdInput = readlineSync.question('Enter student ID: ');
    const searchId = parseInt(searchIdInput, 10);

    if (isNaN(searchId)) {
        console.log('Error: Please enter a valid numerical ID.');
        return;
    }

    let foundStudent = null;
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === searchId) {
            foundStudent = students[i];
            break;
        }
    }

    if (foundStudent) {
        const avg = calculateAverage(foundStudent.scores);
        console.log(`${foundStudent.name}'s average score: ${avg.toFixed(2)}`);
    } else {
        console.log(`Error: Student with ID ${searchId} not found.`);
    }
}

/**
 * Main program loop for menu interaction.
 */
function main() {
    let running = true;

    while (running) {
        console.log('\n================================');
        console.log('    STUDENT RECORD SYSTEM MENU');
        console.log('================================');
        console.log('1. Add student');
        console.log('2. Display all students');
        console.log('3. Calculate average score');
        console.log('4. Quit');

        const choice = readlineSync.question('Enter your choice (1-4): ').trim();

        switch (choice) {
            case '1':
                addStudent();
                break;
            case '2':
                displayAllStudents();
                break;
            case '3':
                calculateStudentAverage();
                break;
            case '4':
                console.log('\nGoodbye!');
                running = false;
                break;
            default:
                console.log('\nError: Invalid choice. Please enter a number between 1 and 4.');
                break;
        }
    }
}

// Run the main program
main();