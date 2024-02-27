/** find: return t/f is val is in arr. */

function find(arr: number[], val: number): boolean {
  console.log("arr.length", arr.length)
  if(arr.length === 0) return false;

  if(arr[0] !== val){
    return find(arr.slice(1), val)
  }
  return true;
}

export { find };