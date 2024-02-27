/** findIndex: return index of val in arr (or -1 if val is not present). */

function findIndex(arr: number[], val: number): number {
  //[1, 2, 3] -> 2  //[2, 3] -> 1 //[3]-> 0


  //base case:
  if(arr.length === 0) return -1;
  if(arr[0] === val) return 0;

  //[1, 2, 3]

  const indexOfRest = findIndex(arr.slice(1), val); //

  if(indexOfRest !== -1){
    return indexOfRest + 1;
  }

  return -1;
}

export { findIndex };