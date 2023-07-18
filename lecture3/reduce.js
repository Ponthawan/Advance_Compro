const arrayOfNumbers = [1, 2, 3, 4];

const sum = arrayOfNumbers.reduce((acculator, currrentValue) => {
    return accumulator + currrentValue;
});

console.log(sum);