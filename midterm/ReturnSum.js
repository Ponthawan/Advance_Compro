function sumTwoSmallestNums(nums) {
    const positiveNums = nums.filter(num => num > 0);

    positiveNums.sort((a,b) => a -b);

    return positiveNums[0] + positiveNums[1];
}

console.log(sumTwoSmallestNums([19, 5, 42, 2 , 77]));