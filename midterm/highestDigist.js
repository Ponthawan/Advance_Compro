function highestDigit(num) {
    let highest = 0;

    while (num > 0) {
        const digit = num % 10;
        highest = Math.max(highest, digit);
        num = Math.floor(num / 10);
    }

    return highest;
}

// Test cases
console.log(highestDigit(379));     // Output: 9
console.log(highestDigit(2));       // Output: 2
console.log(highestDigit(377401));  // Output: 7
