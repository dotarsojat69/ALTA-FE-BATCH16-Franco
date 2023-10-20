function cetakTablePerkalian(number: number): void {
  // Your Solution Code Here
  // Cek apakah input valid
  if (number < 1) {
    throw new Error("Input harus lebih dari 0");
  }

  let result = "";
  
  // Isi tabel
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number; j++) {
      result += j * i;
      result += " ";
    } 
    result += "\n";
  }

  console.log(result);
}

cetakTablePerkalian(9);
// 1  2  3  4  5  6  7  8  9
// 2  4  6  8  10 12 14 16 18
// 3  6  9  12 15 18 21 24 27
// 4  8  12 16 20 24 28 32 36
// 5  10 15 20 25 30 35 40 45
// 6  12 18 24 30 36 42 48 54
// 7  14 21 28 35 42 49 56 63
// 8  16 24 32 40 48 56 64 72
// 9  18 27 36 45 54 63 72 81

export default cetakTablePerkalian;
