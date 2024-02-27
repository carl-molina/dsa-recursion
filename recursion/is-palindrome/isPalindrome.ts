/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str: string): boolean {

  // base case
  if (str.length === 0) return true;
  if (str.length === 1) return true;

  // general case
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  } else {
    return false;
  }
}

export { isPalindrome };
