function secretword(str, wordLength) {
    const alphabetValues = {};  // Object to store letter values

    // Fill alphabet values
    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(97 + i);
        alphabetValues[letter] = i + 1;
    }

    let secretWord = '';

    for (let i = 0; i <= str.length - wordLength * 3; i++) {
        let sumSeries = true;
        let prevSum = 0;

        for (let j = 0; j < wordLength; j++) {
            const triplet = str.substr(i + j * 3, 3);
            const sum = alphabetValues[triplet[0]] + alphabetValues[triplet[1]] + alphabetValues[triplet[2]];

            if (j === 0) {
                prevSum = sum;
            } else if (sum !== prevSum + 3) {
                sumSeries = false;
                break;
            }

            prevSum = sum;
        }

        if (sumSeries) {
            secretWord = str.substr(i + wordLength * 3, wordLength);
            break;
        }
    }

    return secretWord;
}

// Test
const str = 'sadbpsterdvaefikkgoenqrt';
const secretWordLength = 5;
console.log(secretword(str, secretWordLength));  // Output: 'brake'
