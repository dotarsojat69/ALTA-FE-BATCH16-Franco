function ubahHuruf(sentence: string): string{
  // your code here
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const katakata = sentence.split("");
  const resultArr: string[] = new Array;

  katakata.forEach((word) => {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
      const newIndex = (alphabet.indexOf(word[i]) + 10) % 26;
      newWord += alphabet[newIndex];
    }
    resultArr.push(newWord);
  });

  return resultArr.join(" ");
}



console.log(ubahHuruf("SEPULSA OKE")); // COZEVCK YUO
console.log(ubahHuruf("ALTERRA ACADEMY")); // KVDOBBK KMKNOWI
console.log(ubahHuruf("INDONESIA")); // SXNYXOCSK
console.log(ubahHuruf("GOLANG")); // QYVKXQ
console.log(ubahHuruf("PROGRAMMER")); // ZBYQBKWWOB

export default ubahHuruf;
