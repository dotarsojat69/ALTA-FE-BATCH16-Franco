function findMaxSumSubArray(k: number, arr: number[]): number {
  // your code here
  let result = 0;
  let currSum = 0;

  for (let i = 0; i < k; i++) {
    result += arr[i];
  }

  
  for (let i = k; i < arr.length; i++) {
    currSum += arr[i] - arr[i - k];

      result = Math.max(result, currSum);
  }

    return result;
}

console.log(findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2])); // 9
console.log(findMaxSumSubArray(2, [2, 3, 4, 1, 5])); // 7
console.log(findMaxSumSubArray(2, [2, 1, 4, 1, 1])); // 5
console.log(findMaxSumSubArray(3, [2, 1, 4, 1, 1])); // 7
console.log(findMaxSumSubArray(4, [2, 1, 4, 1, 1])); // 8

export default findMaxSumSubArray;




