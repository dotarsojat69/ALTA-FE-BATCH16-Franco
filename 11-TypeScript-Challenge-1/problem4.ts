function caesarCipher(offset: number, input: string): string {
  // your code here
  const indexAscii = offset % 26;
  let outputStr = "";

  for (const char of input) {
    const character = char.charCodeAt(0) + indexAscii;
    if (character <= 122) {
      outputStr += String.fromCharCode(character);
    } else {
      outputStr += String.fromCharCode((character % 122) + 96);
    }
  }

  return outputStr;
}

console.log(caesarCipher(3, "abc")); // def
console.log(caesarCipher(2, "alta")); // cnvc
console.log(caesarCipher(10, "alterraacademy")); // kvdobbkkmknowi
console.log(caesarCipher(1, "abcdefghijklmnopqrstuvwxyz")); // bcdefghijklmnopqrstuvwxyza
console.log(caesarCipher(1000, "abcdefghijklmnopqrstuvwxyz")); // mnopqrstuvwxyzabcdefghijkl

export default caesarCipher;
