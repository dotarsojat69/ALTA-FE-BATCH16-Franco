function simpleEquations(a: number, b: number, c: number): string {
  // your code here
  for (let x = 0; x <= a; x++) {
    for (let y = 0; y <= a; y++) {
      for (let z = 0; z <= a; z++) {
        const req = x + y + z === a && x * y * z === b && x ** 2 + y ** 2 + z ** 2 === c;
        if (req) {
          return `${x} ${y} ${z}`;
        }
      }
    }
  }
  return "no solution";
}

console.log(simpleEquations(1, 2, 3)); // no solution
console.log(simpleEquations(6, 6, 14)); // 1 2 3

export default simpleEquations;
