/* Objective: Write a function that checks if a given string is a palindrome. 
A palindrome is a word, phrase, number, or other sequences of characters that 
reads the same forward and backward, ignoring spaces, punctuation, and case sensitivity.*/


// Example Input and Output:

// Input: "Race car" -> Output: true
// Input: "Hello, World!" -> Output: false
// Input: "A man, a plan, a canal, Panama!" -> Output: true

// Instructions:

// Implement this function in JavaScript.
// Normalize the string first by removing all non-alphanumeric characters and converting it to the same case (lowercase or uppercase).
// Then, check if the normalized string is a palindrome.

function isPalindrome ( string ) {
    let normalizedString = string.replace(/[\W_]+/g, '').toLowerCase();

    // Check if the normalized string is equal to its reverse
    const reversedStr = normalizedString.split('').reverse().join('');
    
    return normalizedString === reversedStr;
}

// Testing the function
console.log(isPalindrome("Race car")); // true
console.log(isPalindrome("Hello, World!")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true