// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================

const readlineSync = require('readline-sync');

/**
 * Helper function to print a 2D matrix in a clean, aligned format.
 * @param {number[][]} matrix - 2D array of numbers.
 */
function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join('\t'));
    }
}

/**
 * Helper function to read a matrix from user input.
 * @param {number} rows - Number of rows.
 * @param {number} cols - Number of columns.
 * @param {string} matrixName - Optional name identifier for prompts.
 * @returns {number[][]} The constructed 2D array matrix.
 */
function readMatrix(rows, cols, matrixName = '') {
    const label = matrixName ? ` for Matrix ${matrixName}` : '';
    console.log(`\nEntering ${rows}x${cols} matrix${label}:`);
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const input = readlineSync.question(`Enter row ${i + 1} (${cols} numbers separated by spaces): `);
        const row = input.trim().split(/\s+/).map(Number);
        matrix.push(row);
    }
    return matrix;
}

/**
 * PART A — Transpose a Matrix
 * @param {number[][]} matrix - The original M x N matrix.
 * @returns {number[][]} The N x M transposed matrix.
 */
function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];

    for (let j = 0; j < cols; j++) {
        const newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        result.push(newRow);
    }
    return result;
}

/**
 * PART B — Add Two Matrices
 * @param {number[][]} matrixA - First M x N matrix.
 * @param {number[][]} matrixB - Second M x N matrix.
 * @returns {number[][]} The M x N sum matrix.
 */
function addMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    const cols = matrixA[0].length;
    const result = [];

    for (let i = 0; i < rows; i++) {
        const newRow = [];
        for (let j = 0; j < cols; j++) {
            newRow.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(newRow);
    }
    return result;
}

/**
 * PART C — Multiply Two Matrices
 * @param {number[][]} matrixA - M x N matrix.
 * @param {number[][]} matrixB - N x P matrix.
 * @returns {number[][]} The M x P product matrix.
 */
function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const colsB = matrixB[0].length;

    const result = [];

    for (let i = 0; i < rowsA; i++) {
        const newRow = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            newRow.push(sum);
        }
        result.push(newRow);
    }
    return result;
}

/**
 * Main program execution
 */
function main() {
    console.log('=== PART A: Transpose a Matrix ===');
    const rowsA = parseInt(readlineSync.question('Enter number of rows: '), 10);
    const colsA = parseInt(readlineSync.question('Enter number of columns: '), 10);

    const matA = readMatrix(rowsA, colsA, 'A');
    console.log('\nOriginal Matrix A:');
    printMatrix(matA);

    const transposed = transposeMatrix(matA);
    console.log('\nTransposed Matrix:');
    printMatrix(transposed);

    console.log('\n=== PART B: Add Two Matrices ===');
    console.log(`Reading Matrix B of size ${rowsA}x${colsA}...`);
    const matB = readMatrix(rowsA, colsA, 'B');

    console.log('\nMatrix A + Matrix B:');
    const sumMat = addMatrices(matA, matB);
    printMatrix(sumMat);

    console.log('\n=== PART C: Multiply Two Matrices ===');
    console.log(`For multiplication (A x C), Matrix C must have ${colsA} rows.`);
    const colsC = parseInt(readlineSync.question('Enter number of columns for Matrix C: '), 10);
    const matC = readMatrix(colsA, colsC, 'C');

    console.log('\nMatrix A x Matrix C:');
    const productMat = multiplyMatrices(matA, matC);
    printMatrix(productMat);
}

// Run main program
main();