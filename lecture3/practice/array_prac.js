
let array1 = ['Apple', 1, false];
let array2 = ['Fries', 2, true];
let array3 = ['Mars', 9, 'Apple'];

console.log("Arr1, Arr2:", array1.filter((element ) => array2.includes(element)).join
(","))
console.log("Arr1, Arr3:", array1.filter((element) => array3.includes(element)).join
(","))
console.log("Arr2, Arr3:", array2.filter((element) => array3.includes(element)).join
(","))



