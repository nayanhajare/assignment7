// Function to display a right-angled triangle pattern
function displayTrianglePattern(rows) {
    for (let i = 1; i <= rows; i++) {
        console.log('*'.repeat(i));
    }
}

// Function to display a pyramid pattern
function displayPyramidPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        const spaces = ' '.repeat(rows - i);
        const stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars + spaces);
    }
}

// Example usage
console.log("Right-Angled Triangle:");
displayTrianglePattern(5);

console.log("\nPyramid Pattern:");
displayPyramidPattern(5);
