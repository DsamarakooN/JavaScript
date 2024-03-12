// function for palindrome checker

function palindrome(str) {
  // remove non-alphanumeric characters
  processedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

  strLength = processedStr.length;

    for (let i = 0; i < strLength / 2; i++) {
      if (processedStr[i] !== processedStr[strLength - 1 - i]) {
        return false;
      }
    }
    return true;
  
}

console.log(palindrome("eye")); // true
console.log(palindrome(" 2_A3*3#A2"));
console.log(palindrome("Apple")); // false