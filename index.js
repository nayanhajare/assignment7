function separateEvenOdd(numbers) {
    const evenNumbers = [];
    const oddNumbers = [];
    
    numbers.forEach(num => {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        } else {
            oddNumbers.push(num);
        }
    });
    
    console.log("Even Numbers:", evenNumbers);
    console.log("Odd Numbers:", oddNumbers);
}

// Example usage
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
separateEvenOdd(numbers);
