/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr: number[], val: number, left = 0, right = arr.length): boolean {

  if (left >= right) {
    return false;
  }

  const mid = Math.floor((left + right - 1) / 2);

  const guess = arr[mid];
  if (guess === val) {
    return true;
  } else {
    if (val < guess) {
      right = mid - 1;
    } else if (val > guess) {
      left = mid + 1;
    }
  }

  return binarySearch(arr, val, left, right);
}

export { binarySearch };
