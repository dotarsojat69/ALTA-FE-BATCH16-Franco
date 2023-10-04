function meanMedian(numbers: number[]): string {
  // Gabungkan mean dan median menjadi string dan kembalikan
  return `${mean(numbers)} ${median(numbers)}`;
}
function mean(numbers: number[]): number {
  // Jumlahkan semua angka dalam array
  const sum = numbers.reduce((a, b) => a + b, 0);
  // Hitung mean (rata-rata) dengan membagi jumlah dengan panjang array
  const mean = sum / numbers.length;
  // Kembalikan mean
  return mean;
}
function median(numbers: number[]): number {
  // Urutkan array dalam urutan menaik
  numbers.sort((a, b) => a - b);
  // Jika panjang array genap, median adalah rata-rata dari dua angka tengah
  if (numbers.length % 2 === 0) {
    const mid1 = numbers[Math.floor(numbers.length / 2) - 1];
    const mid2 = numbers[Math.floor(numbers.length / 2)];
    const median = (mid1 + mid2) / 2;
    return median;
  }
  // Jika panjang array ganjil, median adalah angka tengah
  else {
    const mid = numbers[Math.floor(numbers.length / 2)];
    return mid;
  }
}

console.log(meanMedian([1, 2, 3, 4])); // 2.5 2.5
console.log(meanMedian([1, 2, 3, 4, 5])); // 3 3
console.log(meanMedian([7, 8, 9, 13, 15])); // 10.4 9
console.log(meanMedian([10, 20, 30, 40, 50])); // 30 30
console.log(meanMedian([15, 20, 30, 60, 120])); // 49 30

export default meanMedian;
