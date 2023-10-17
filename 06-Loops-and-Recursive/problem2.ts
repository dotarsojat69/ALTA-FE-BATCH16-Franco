function primeX(number: number): number {
  // your code here
let prime: number = 2;
let array: number[] = [];

while (array.length < number) {
  let num: number = 0;
  for (let i = 2; i <= Math.sqrt(prime); i++){
    if (prime % i === 0){
      num++
      break;
  }
}
if (num === 0) {
  array.push(prime);
}
prime++;
}
return array[array.length-1];
}

console.log(primeX(1)); // 2
console.log(primeX(5)); // 11
console.log(primeX(10)); // 29
console.log(primeX(15)); // 47
console.log(primeX(20)); // 71

export default primeX;
