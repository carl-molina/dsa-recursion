/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr: number[], val: number, left = 0, right = arr.length): boolean {

  if (left >= right) {
    return false;
  }

  const mid = Math.floor((left + right) / 2);
  //change varibale name
  const guess = arr[mid];
  //remove one level of nesting in else statement
  if (guess === val) {
    return true;
  } else {
    if (val < guess) {
      //can call binary search here with mid-1 as right
      right = mid - 1;
    } else if (val > guess) {
      left = mid + 1;
    }
  }

  return binarySearch(arr, val, left, right);
}

export { binarySearch };
