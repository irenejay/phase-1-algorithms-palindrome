function isPalindrome(word) {
  // Convert the word to lowercase for case-insensitivity
  const lowercaseWord = word.toLowerCase();

  // Compare the original word with its reversed version
  return lowercaseWord === lowercaseWord.split('').reverse().join('');
}

/* 
  Pseudocode:
  1. Convert the input word to lowercase to make the comparison case-insensitive.
  2. Create a reversed version of the word by splitting, reversing, and joining the characters.
  3. Check if the original word is equal to its reversed version.
  4. Return true if they are equal, indicating that the word is a palindrome; otherwise, return false.

  Written Explanation:
  The function takes a word as input and converts it to lowercase to ensure case-insensitivity. 
  It then creates a reversed version of the word using the split, reverse, and join operations. 
  Finally, it compares the original word with its reversed version. If they are equal, the function returns true, indicating that the word is a palindrome; otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
