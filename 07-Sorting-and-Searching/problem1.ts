function maximumBuyProduct(money: number, productPrice: number[]): number {
  // your code here
  let maximum = 0;
  let price = 0;

  for (let i = 0; i < productPrice.length; i++){
    if (price + productPrice[i] < money){
      maximum++;
      price += productPrice[i];
    }
  }
  return maximum;

}

console.log(maximumBuyProduct(50000, [25000, 25000, 10000, 14000])); // 3
console.log(maximumBuyProduct(30000, [15000, 10000, 12000, 5000, 3000])); // 4
console.log(maximumBuyProduct(10000, [2000, 3000, 1000, 2000, 10000])); // 4
console.log(maximumBuyProduct(4000, [7500, 3000, 2500, 2000])); // 1
console.log(maximumBuyProduct(0, [10000, 30000])); // 0

export default maximumBuyProduct;
