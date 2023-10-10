"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function largestNumber(array) {
    // your code here
    // Jika array hanya memiliki satu elemen, maka elemen tersebut adalah nilai terbesar.
    if (array.length === 1) {
        return array[0];
    }
    // Jika array memiliki lebih dari satu elemen, maka fungsi akan memanggil dirinya sendiri dengan array yang dipotong satu elemen.
    var max = largestNumber(array.slice(1));
    // Bandingkan nilai terbesar dari array yang dipotong dengan elemen pertama dari array asli.
    return array[0] > max ? array[0] : max;
}
console.log(largestNumber([5, 2, 67, 37, 85, 19, 10])); // 85
console.log(largestNumber([5, 10, 20, 3, 98, 95])); // 98
console.log(largestNumber([20, 22, 18, 25, 75, 62, 88])); // 88
console.log(largestNumber([6, 23, 9, 5])); // 23
console.log(largestNumber([70, 44, 28, 18, 55, 68, 11])); // 70
exports.default = largestNumber;
