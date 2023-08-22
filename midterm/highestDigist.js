function Digit(n) {
    let maxDigit = 0;
    while (number > 0) {
        const digit = number % 10;
        if (digit > maxDigit) {
            maxDigit = digit;
        }
        number = Math.floor(number / 10);
    }
    return maxDigit
}

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));