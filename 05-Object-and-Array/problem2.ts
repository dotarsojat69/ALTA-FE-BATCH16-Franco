function joinArrayRemoveDuplicate(
  arrayA: string[],
  arrayB: string[]
): string[] {
  // your code here
  const arrayGabung: string[] = [];

  // Looping arrayA
  for (const item of arrayA) {
    // Jika item tidak ada di arrayGabung, tambahkan ke arrayGabung
    if (!arrayGabung.includes(item)) {
      arrayGabung.push(item);
    }
  }

  // Looping arrayB
  for (const item of arrayB) {
    // Jika item tidak ada di arrayGabung, tambahkan ke arrayGabung
    if (!arrayGabung.includes(item)) {
      arrayGabung.push(item);
    }
  }

  // Return array gabungan
  return arrayGabung;
}

console.log(
  joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"])
); // ["apel", "anggur", "lemon", "leci", "nanas"]
console.log(
  joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"])
); // ["samsung", "apple", "sony", "xiaomi"]
console.log(
  joinArrayRemoveDuplicate(
    ["football", "basketball"],
    ["basketball", "football"]
  )
); // [“football”, “basketball”]

export default joinArrayRemoveDuplicate;
