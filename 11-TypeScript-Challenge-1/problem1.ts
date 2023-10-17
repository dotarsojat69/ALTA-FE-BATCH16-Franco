function playWithAsterik(n: number): void {
  // your code here
  let hasil: string = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      hasil += "*";
    }
    hasil += "\n";
  }
  console.log(hasil.toString());
}


console.log(playWithAsterik(5));

export default playWithAsterik;
