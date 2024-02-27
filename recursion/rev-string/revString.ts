/** revString: return a copy of a string, but in reverse. */

function revString(str: string): string {

  let out = str[str.length - 1];

  // base case
  if (str.length === 0) {
    return str;
  }

  // general case
  const char = revString(str.slice(0, -1));
  console.log('This is char after revString:', char);

  console.log('This is out before inserting char:', out);
  return out += char;

}

export { revString };