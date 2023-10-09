function primaSegiEmpat(wide: number, high: number, start: number): void {
  // your code here
  // Buat array untuk menyimpan bilangan prima
  const primes = [];

  // Perulangan untuk mencari bilangan prima
  for (let i = start; i <= Number.MAX_SAFE_INTEGER; i++) {
    if (isPrime(i)) {
      primes.push();
    }
  }

  // Perulangan untuk mencetak bilangan prima pada segiempat
  for (let i = 0; i < high; i++) {
    for (let j = 0; j < wide; j++) {
      console.log(primes[i * wide + j]);
    }
  }

  // Hitung jumlah bilangan prima
  const total = primes.reduce((a, b) => a + b, 0);

  // Cetak jumlah bilangan prima
  console.log(total);
}

function isPrime(n: number): boolean {
  // Cek bilangan genap
  if (n % 2 === 0 && n > 2) {
    return false;
  }

  // Cek bilangan prima lainnya
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
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
