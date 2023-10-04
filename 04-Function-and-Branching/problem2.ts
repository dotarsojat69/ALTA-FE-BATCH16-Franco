function palindrome(word: string): boolean {
  // your code here
  word = word.replace(/\W/g, "").toLowerCase();

  // Jika panjang string kurang dari 2, maka string tersebut adalah palindrome
  if (word.length < 2) {
    return true;
  }

  // Bandingkan karakter pertama dengan karakter terakhir dari string
  for (let i = 0, j = word.length - 1; i < j; i++, j--) {
    if (word[i] !== word[j]) {
      return false;
    }
  }

  // Jika semua karakter dalam string sama, maka string tersebut adalah palindrome
  return true;
}

console.log(palindrome("civic")); // true
console.log(palindrome("katak")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("kupu-kupu")); // false
console.log(palindrome("lion")); // false

export default palindrome;
