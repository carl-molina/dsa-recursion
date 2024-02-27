/** everyOther: return a string with every other letter. */

function everyOther(str: string): string {

  //Base case: string is empty
  if(str === '') return '';

  //h //e\\
  return str.slice(0, 1) + everyOther(str.slice(2));
}

export { everyOther };