// bomb.js
function bomb (pos) {
    const circle = pos.map(([x, y, r]) => findCircle(x, y, r * 0.343));

    const intersection = circle[0].filter(
        ([x1, y1]) => 
            circle[1].some(([x2, y2]) => x1 == x2 && y1 == y2) &&
            circle[2].some(([x3, y3]) => x1 == x3 && y1 == y3)
    ).shift();
    
    return intersection;
}

function findCircle (x, y, r) {
    const circle = []
    for (let i = 0; i < 360; i++) {
        const rad = i * Math.PI / 180
        circle.push([
            Math.round(x + r * Math.cos(rad)),
            Math.round(y + r * Math.sin(rad))
        ])
    }
    return circle.map(([x, y]) => [parseFloat(x), parseFloat(y)]) // convert -0 -> 0
}

console.log(bomb([[0, 0, 72.886], [0, 50, 72.886], [25, 25, 72.886]])); // [25, 25]
console.log(bomb([[0, 50, 145.773], [50, 50, 206.154], [50, 0, 145.773]])); // [0, 0]
console.log(bomb([[5, 8, 48.872], [12, 21, 35.107], [24, 20, 22.203]])); // [21, 13]
console.log(bomb([[18, 42, 35.558], [39, 16, 106.004], [7, 24, 32.202]])); // [8, 35]