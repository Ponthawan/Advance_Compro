function frequencySort(s) {
    const charCount = new Map();
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    const sortedChars = Array.from(charCount.keys()).sort((a, b) => {
        if (charCount.get(a) !== charCount.get(b)) {
            return charCount.get(b) - charCount.get(a);
        } else if (a.toLowerCase() !== b.toLowerCase()) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        } else {
            return a.localeCompare(b);
        }
    });

    let result = '';
    for (const char of sortedChars) {
        result += char.repeat(charCount.get(char));
    }
    
    return result;
}

// Test cases
console.log(frequencySort("tree"));    // Output: "eert"
console.log(frequencySort("cccaaa"));  // Output: "aaaccc"
console.log(frequencySort("Aabb"));    // Output: "bbAa"
