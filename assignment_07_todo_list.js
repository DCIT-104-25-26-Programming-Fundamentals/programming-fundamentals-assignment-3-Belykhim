// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 7
// =============================================================================

const readlineSync = require('readline-sync');

// Global task list
let tasks = [];

/**
 * 1. Add a Task
 * Prompts the user for a task description and adds it to the array.
 */
function addTask() {
    const taskInput = readlineSync.question('\nEnter task: ').trim();
    if (taskInput.length === 0) {
        console.log('Error: Task description cannot be empty.');
        return;
    }
    tasks.push(taskInput);
    console.log(`Task added: "${taskInput}"`);
}

/**
 * 2. View All Tasks
 * Displays all tasks currently in the array, numbered starting from 1.
 */
function viewTasks() {
    console.log('\nYour Tasks:');
    if (tasks.length === 0) {
        console.log('No tasks in your list yet.');
        return;
    }
    for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}. ${tasks[i]}`);
    }
}

/**
 * 3. Delete a Task
 * Displays tasks, asks user for a task number, and deletes it using splice.
 */
function deleteTask() {
    if (tasks.length === 0) {
        console.log('\nYour task list is empty. Nothing to delete!');
        return;
    }

    viewTasks();
    const taskNumInput = readlineSync.question('\nEnter task number to delete: ');
    const taskNum = parseInt(taskNumInput, 10);

    if (isNaN(taskNum) || taskNum < 1 || taskNum > tasks.length) {
        console.log('Error: Invalid task number.');
        return;
    }

    // Convert 1-based display number to 0-based array index
    const removedTask = tasks.splice(taskNum - 1, 1);
    console.log(`Task "${removedTask[0]}" has been removed.`);
}

/**
 * Main application loop to manage menu options.
 */
function main() {
    let running = true;

    while (running) {
        console.log('\n============================');
        console.log('        TO-DO LIST MENU');
        console.log('============================');
        console.log('1. Add task');
        console.log('2. View tasks');
        console.log('3. Delete task');
        console.log('4. Quit');

        const choice = readlineSync.question('Enter your choice (1-4): ').trim();

        switch (choice) {
            case '1':
                addTask();
                break;
            case '2':
                viewTasks();
                break;
            case '3':
                deleteTask();
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