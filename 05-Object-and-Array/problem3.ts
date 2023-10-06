function removeDuplicates(array: number[]): number {
  // your code here
  const uniqueSet = new Set<number>();

  // Iterate over the array and add each element to the set.
  for (const element of array) {
    uniqueSet.add(element);
  }

  // Return the size of the set, which is the number of unique elements in the array.
  return uniqueSet.size;
}


console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9])); // 4
console.log(removeDuplicates([2, 3, 4, 5, 6, 9, 9])); // 6
console.log(removeDuplicates([2, 2, 2, 11])); // 2
console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4])); // 4
console.log(removeDuplicates([1, 2, 3, 11, 11])); // 4

export default removeDuplicates;
