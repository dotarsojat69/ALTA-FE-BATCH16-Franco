// input
var T = 20;
var r = 4;
// kode di bawah sini
// Konstanta
var pi = 3.14;
// Luas alas tabung
var luasAlas = pi * Math.pow(r, 2);
// Luas selimut tabung
var luasSelimut = 2 * pi * r * T;
// Luas permukaan tabung
var luasPermukaan = 2 * luasAlas + luasSelimut;
// Tampilkan hasil
console.log("Luas permukaan tabung adalah:", luasPermukaan);
