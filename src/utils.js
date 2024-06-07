// Your code here

export function isPalindrome(word) {
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("Invalid input");
  }
  return word.toLowerCase() === word.split("").reverse().join("").toLowerCase();
}
