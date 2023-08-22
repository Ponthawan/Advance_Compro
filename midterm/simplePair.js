function simplePair (arr, n){
    const seen = new Set();

    for (const num of arr) {
        const complement = n / num;
        if (seen.has(complement)) {
            return [num, complement];
        }
        seen.add(num);
    }

    return null;

}

console.log(simplePair([1, 2, 3], 3));
console.log(simplePair([1, 2, 3], 6));
console.log(simplePair([1, 2, 3], 9));