function reverseString(value) {
    let reversedValue = "";

    value.split("").forEach((char) => {
        reversedValue = char + reversedValue;
    })
}

console.log(reverseString("Reverse Me"));