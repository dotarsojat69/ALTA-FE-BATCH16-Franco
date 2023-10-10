"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function primaSegiEmpat(wide, high, start) {
    // your code here
    // Buat array untuk menyimpan bilangan prima
    var array = [];
    var primes = [2, 3, 5, 7];
    while (array.length !== wide * high) {
        start++;
        if (primes.includes(start) ||
            (start % 2 !== 0 && start % 3 !== 0 && start % 5 !== 0 && start % 7 !== 0)) {
            array.push(start);
        }
    }
    var up = 0;
    var low = wide;
    var s = "";
    for (var i = 0; i < high; i++) {
        s += array.slice(up, low).join(" ") + "\n";
        up += wide;
        low += wide;
    }
    s += array.reduce(function (a, b) { return a + b; }, 0);
    console.log(s);
}
console.log(primaSegiEmpat(2, 3, 13));
/*
17 19
23 29
31 37
156
*/
console.log(primaSegiEmpat(5, 2, 1));
/*
2  3  5  7 11
13 17 19 23 29
129
*/
exports.default = primaSegiEmpat;
