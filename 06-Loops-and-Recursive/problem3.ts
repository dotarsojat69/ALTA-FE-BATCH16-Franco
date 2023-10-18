function primaSegiEmpat(wide: number, high: number, start: number): void {
  // your code here
  // Buat array untuk menyimpan bilangan prima
  const array: number[] = [];
  const primes: number[] = [2,3,5,7];

  while(array.length !== wide * high) {
    start++;
    if (
      primes.includes(start) ||
      (start % 2 !== 0 && start % 3 !== 0 && start % 5!== 0 && start % 7!== 0)
    ) {
    array.push(start);
    }
    }

  let up: number = 0;
  let low: number = wide;
  let s: string = "";

  for (let i: number = 0; i < high; i++) {
    s += array.slice(up, low).join(" ") + "\n";
    up += wide;
    low += wide;
  }

  s += array.reduce((a, b) => a + b, 0);
  console.log(s);

}

console.log(primaSegiEmpat(2, 3, 13));
/*
17 19
23 29
31 37
156
*/
console.log(primaSegiEmpat(5, 2, 1));
/*
2  3  5  7 11
13 17 19 23 29
129
*/

export default primaSegiEmpat;
