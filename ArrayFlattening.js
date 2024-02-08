/*Objective: Write a function that flattens an array of 
arbitrarily nested arrays of integers into a flat array of integers. 
This means you should take an array that contains nested arrays and return 
a single array with no nested arrays, containing all the elements. */

// Example:
// Input: [1, [2, 3,], [4, [5, 6]], 7]
// Output: [1, 2, 3, 4, 5, 6, 7]

//My Solution:
const arr1 = [1, [2, 3,], [4, [5, 6]], 7];

const arr2 = (arr1.flat());

console.log(arr2.flat());

// correct Solution:

/*
The .flat() method can take an argument specifying the depth to which it should flatten; w
ithout an argument, .flat() defaults to a depth of 1.

If you want to flatten an array of arbitrary depth using .flat(), you can pass Infinity as 
an argument to flatten nested arrays regardless of their depth:
*/

const arr3 = [1, [2, 3], [4, [5, 6]], 7];
const flattened_Array = arr1.flat(Infinity);

console.log(flattened_Array);

/* But in  in an interview setting, the interviewer might be interested in seeing your ability to 
implement such logic manually, without relying on built-in methods. */

function flattenArray(arr) {
    let result = []; // This will hold the flattened array

    // Loop through each element in the array
    arr.forEach(element => {
        if (Array.isArray(element)) {
            // If the element is an array, recursively flatten it and then add its elements to the result
            result = result.concat(flattenArray(element));
        } else {
            // If the element is not an array, just add it to the result
            result.push(element);
        }
    });

    return result;
}

// Example usage:
const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7]