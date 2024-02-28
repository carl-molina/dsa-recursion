/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str: string): boolean {

  // base case //if len < 2
  if (str.length < 2) return true;
  //this is also a base case!
  if (str[0] !== str[str.length - 1]) return false;

  // general case
  return isPalindrome(str.slice(1, -1));

}

export { isPalindrome };
