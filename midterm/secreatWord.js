// secretWord.js
function secretWord(word, key) {
    const alphabetDict = {}
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    alphabet.map((char, index) => alphabetDict[char] = index + 1);

    const getArithmetic = (s, d, n) => s + ((n - 1) * d);

    const center = Math.floor(word.length / 2) - 1;
    const centerTriplet = [-1, 0, 1].map(num => alphabetDict[word[center + num]]).reduce((a, b) => a + b, 0);

    const firstTriplet =  [-3, -2, -1].map(num => alphabetDict[word[key + num]]).reduce((a, b) => a + b, 0);
    const difference =  (centerTriplet - firstTriplet) /  (Math.round(key / 2) - 1);

    const charTriplet = [1, 2, 3, 4, 5].map(i => getArithmetic(firstTriplet, difference, i));

    let charCodeAt = [key - 2];
    charCodeAt[Math.round(key / 2) - 1] = center;

    charTriplet.map((char, index) => {
        if ((index === 0) || (index === (Math.round(key / 2) - 1))) return;

        let wordSplit = word.split("");
        for (let i = 0; i < wordSplit.length; i++) {
            let sum = 0;

            for (let j = 0; j < 3; j++) {
                sum += alphabetDict[wordSplit[i + j]];
            }

            if (sum === char) {
                charCodeAt[index] = i + 1;
                break;
            }
        }
    });

    return charCodeAt.map(char => word[char]).join("");
}

console.log(secretWord("sadbpstcrdvaefikkgoenqrt", 5)) // "brake"
console.log(secretWord("aheiayd", 3)) // "hey"