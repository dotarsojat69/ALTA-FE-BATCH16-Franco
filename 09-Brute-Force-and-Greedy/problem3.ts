function isPangram(texts: string): boolean {
  // your code here
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const normalizedTexts = texts.toLowerCase().replace(/[^a-z]/g, "");
  const lettersInTexts = new Set(normalizedTexts);
  return lettersInTexts.size === alphabet.length;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
console.log(isPangram("Public junk dwarves hug my beloved pillow")); // false
console.log(
  isPangram("Jim quickly realized that the beautiful gowns are expensive")
); //true
console.log(isPangram("Back in June we delivered oxygen equipment")); // false

export default isPangram;
