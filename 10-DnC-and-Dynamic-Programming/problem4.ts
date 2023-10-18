function romanNumerals(value: number): string {
  // your code here
  const simbol: string[] = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  // Daftar nilai angka Romawi
  const nilai: number[] = [
    1000,
    900,
    500,
    400,
    100,
    90,
    50,
    40,
    10,
    9,
    5,
    4,
    1,
  ];

  // Hasil konversi
  let hasil = "";

  // Iterasi melalui simbol angka Romawi
  for (let i = 0; i < simbol.length; i++) {
    // Cek apakah angka lebih besar dari nilai simbol
    while (value >= nilai[i]) {
      // Tambahkan simbol ke hasil
      hasil += simbol[i];
      // Kurangi value dengan nilai simbol
      value -= nilai[i];
    }
    // Periksa apakah simbol sebelumnya dapat digunakan untuk mengurangi angka
    if (i > 0 && value >= nilai[i - 1] * 2) {
      hasil += simbol[i - 1];
      hasil += simbol[i - 1];
      value -= nilai[i - 1] * 2;
  }
}

  // Kembalikan hasil
  return hasil;
}
console.log(romanNumerals(6)); // VI
console.log(romanNumerals(9)); // IX
console.log(romanNumerals(23)); // XXIII
console.log(romanNumerals(2021)); // MMXXI
console.log(romanNumerals(1646)); // MDCXLVI

export default romanNumerals;
