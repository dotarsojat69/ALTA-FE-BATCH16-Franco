function dragonOfLoowater(
  dragonHead: number[],
  knightHeight: number[]
): number | string {
  // your code here
  const PalaNaga = dragonHead.sort((a, b) => a - b);
  const Ksatria = knightHeight.sort((a, b) => a - b);

  let total = 0;

  for (const knight of Ksatria) {
    if (knight < PalaNaga[0]) {
      return "knight fall";
    }

    PalaNaga.shift();
    total += knight;

    if (PalaNaga.length === 0){
      return total;
    }
  }

  return "knight fall";
}

console.log(dragonOfLoowater([5, 4], [7, 8, 4])); // 11
console.log(dragonOfLoowater([5, 10], [5])); // knight fall
console.log(dragonOfLoowater([7, 2], [4, 3, 1, 2])); // knight fall
console.log(dragonOfLoowater([7, 2], [2, 1, 8, 5])); // 10

export default dragonOfLoowater;
