function totalVolume(...boxes) {
    let total = 0;
    for (const box of boxes) {
        const [length, width, height] = box;
        const volume = length * width * height;
        total += volume;
    }
    return total;
}

const result = totalVolume([2,3,2,],[6,6,7],[1,2,1]);
console.log(result);