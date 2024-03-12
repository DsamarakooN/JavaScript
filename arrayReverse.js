function arrayReverse(arr) {
    let arrLength = arr.length;
    let reversedArr = [];

    for (let i = 0; i < arrLength; i++) {
        reversedArr.push(arr.pop());
    }
    return reversedArr;
}

console.log(arrayReverse([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]