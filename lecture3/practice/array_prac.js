
let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 9, 'Apple'];


if (values1.some((element) => values2.includes(element) || values3.includes(element))) {
  if (values2.some((element) => values1.includes(element) || values3.includes(element))) {
    if (values3.some((element) => values1.includes(element) || values2.includes(element))) {
      console.log("values1 is similar to values3");
    } else {
      console.log("values1 is similar to values2");
    }
  } else {
    console.log("values1 is similar to values3");
  }
} else if (values2.some((element) => values1.includes(element) || values3.includes(element))) {
  console.log("values2 is similar to values3");
} else {
  console.log("No arrays are similar.");
}
