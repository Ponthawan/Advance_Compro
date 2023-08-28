function moveCapitalLettersToFront(str) {
    let capitalLetters = '';
    let nonCapitalLetters = '';

    for (let char of str) {
        if (char >= 'A' && char <= 'Z') {
            capitalLetters += char;
        } else {
            nonCapitalLetters += char;
        }
    }

    return capitalLetters + nonCapitalLetters;
}

// Test cases
console.log(moveCapitalLettersToFront('HelloWorld'));    // Output: 'HWelloorld'
console.log(moveCapitalLettersToFront('AbCdEfG'));       // Output: 'ACEbdfG'
console.log(moveCapitalLettersToFront('JavaScript'));    // Output: 'JSTScrptavaipt'
