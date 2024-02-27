import { LLNodeStr } from "../common/ll";

/** longest: return length of longest word in a linked list of words. */

function longest(words: LLNodeStr | null): number {

  // ["hi", "hello", "hola"]
  if(words === null) return 0;

  const currLength = words.val.length; //hi //hello //hola

  const nextWordLength = longest(words.next)

  return Math.max(currLength, nextWordLength);
}

export { longest };
