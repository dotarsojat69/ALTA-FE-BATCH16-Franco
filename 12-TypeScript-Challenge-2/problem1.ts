function pairSum(arr: number[], target: number): number[] {
  // your code here
  const result: number[] = [];
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (arr[i] + arr[j] === target) {
      result.push(...[i, j]);

      // Maju indeks i
      i++;

      // Maju indeks j
      j--;
    } else if (arr[i] + arr[j] < target) {
      // Maju indeks i
      i++;
    } else {
      // Maju indeks j
      j--;
    }
  }

  // Kembalikan hasil
  return result;
}

console.log(pairSum([1, 2, 3, 4, 6], 6)); // [1, 3]
console.log(pairSum([2, 5, 9, 11], 11)); // [0, 2]
console.log(pairSum([1, 3, 5, 7], 12)); // [2, 3]
console.log(pairSum([1, 4, 6, 8], 10)); // [1, 2]
console.log(pairSum([1, 5, 6, 7], 6)); // [0, 1]

export default pairSum;
