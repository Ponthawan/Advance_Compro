let num1 = '150';
let flo1 = '1.50';

console.log("********Convertung strings to integer********");
//Convertung strings to integer
console.log(parseInt('100'));
console.log(parseInt(num1));
console.log(parseInt('ABC'));
console.log(parseInt('0xF')); //Hexadecimal number

console.log("********Convertung strings to float********");
//Convertung strings to float
console.log(parseInt('1.25abc'));
console.log(parseInt(flo1));
console.log(parseInt('ABC'));

console.log("********More Conversion Examples********");

console.log(parseInt('1.5'));
console.log(parseInt('1 + 1'));

console.log(parseInt(`${1 + 1}`));

console.log("********Convertung strings to strings********");
console.log(num1.toString());
console.log(flo1.toString());
console.log((100).toString());