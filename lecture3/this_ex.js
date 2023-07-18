const cat = {
    name: "Pipey",
    age: 8,
    whatName() {
        return this.name;
    },
};

console.log(cat.whatName());
// Output: Pipey
cat.name = "Nezzer";
console.log(cat.whatName());