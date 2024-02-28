/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(
  arr: number[],
  val: number,
  left = 0,
  right = arr.length): number {

  // base case
  if (left >= right) {
    return -1;
  }

  // general case
  const mid = Math.floor((left + right - 1) / 2);
  const guess = arr[mid];

  if (guess === val) {
    return mid;
  } else {
    if (val < guess) {
      right = mid - 1;
    } else if (val > guess) {
      left = mid + 1;
    }
  }

  return binarySearchIndex(arr, val, left, right);
}

export { binarySearchIndex };
