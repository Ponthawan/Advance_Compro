function removeDuplicates (inputArray)
{
    let outputArray = [];
    let seenItems = new Set();

    for (let item of inputArray) {
        if(!seenItems.has(item)) {
            outputArray.push(item);
            seenItems.add(item);
        }
    }

    return outputArray;
}

const input1 = [1, 0, 1, 0];
const output1 = removeDuplicates(input1);
console.log(output1);

const input2 = ["The", "big", "cat"];
const output2 = removeDuplicates(input2);
console.log(output2);
