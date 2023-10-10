"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function primeX(number) {
    // your code here
    var prime = 2;
    var array = [];
    while (array.length < number) {
        var num = 0;
        for (var i = 2; i <= Math.sqrt(prime); i++) {
            if (prime % i === 0) {
                num++;
                break;
            }
        }
        if (num === 0) {
            array.push(prime);
        }
        prime++;
    }
    return array[array.length - 1];
}
console.log(primeX(1)); // 2
console.log(primeX(5)); // 11
console.log(primeX(10)); // 29
console.log(primeX(15)); // 47
console.log(primeX(20)); // 71
exports.default = primeX;
