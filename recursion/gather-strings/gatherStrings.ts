/** gatherStrings: given an object, return array of all the string values. */

function gatherStrings(obj: Record<string, any>): string[] {

  //base case: don't actually need this!
  // if(Object.keys(obj).length === 0) return [];

  const strArray = [];

  for(let key in obj){
    //for readability, assign variable to value of obj[key]
    const val = obj[key];
    if(typeof obj[key] === "string"){
      strArray.push(obj[key]);
    }else if(typeof obj[key] === "object"){
      strArray.push(...gatherStrings(obj[key]));
    }
  }


  return strArray;
}

export { gatherStrings };
