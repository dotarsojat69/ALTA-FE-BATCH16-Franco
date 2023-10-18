function binarySearch(array: number[], x: number): number {
  // your code here
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = (low + high) / 2;

    if (array[mid] === x) {
      return mid;
    } else if (array[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}


console.log(binarySearch([1, 1, 3, 5, 5, 6, 7], 3)); // 2
console.log(binarySearch([1, 2, 3, 5, 6, 8, 10], 5)); // 3
console.log(binarySearch([12, 15, 15, 19, 24, 31, 53, 59, 60], 53)); // 6
console.log(binarySearch([12, 15, 15, 19, 24, 31, 53, 59, 60], 100)); // -1

export default binarySearch;
