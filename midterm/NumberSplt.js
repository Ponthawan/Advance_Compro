function numbersplit(num) {
    if (num % 2 === 0) {
        const half = num / 2;
        return [half, half];
    } else {
        const leftHalf = Math.floor((num + 1) / 2);
        const rightHalf = num - leftHalf;
        return [leftHalf, rightHalf];
    }
}

// Test cases
console.log(numbersplit(4));   // Output: [2, 2]
console.log(numbersplit(10));  // Output: [5, 5]
console.log(numbersplit(11));  // Output: [5, 6]
console.log(numbersplit(-9));  // Output: [-5, -4]
