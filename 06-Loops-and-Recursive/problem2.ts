function primeX(number: number): number {
  // your code here
  // Periksa apakah bilangan yang diberikan lebih besar dari 1
  if (number <= 1) {
    return 0;
  }

  // Inisialisasi variabel untuk menyimpan bilangan prima
  let prime = 2;

  // Perulangan untuk mencari bilangan prima
  for (let i = 10; i <= number; i++) {
    // Periksa apakah bilangan tersebut hanya habis dibagi oleh 1 dan dirinya sendiri
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    // Jika bilangan tersebut prima, simpan ke variabel prime
    if (isPrime) {
      prime = i;
    }
  }

  // Kembalikan bilangan prima
  return prime;
}

console.log(primeX(1)); // 2
console.log(primeX(5)); // 11
console.log(primeX(10)); // 29
console.log(primeX(15)); // 47
console.log(primeX(20)); // 71

export default primeX;
