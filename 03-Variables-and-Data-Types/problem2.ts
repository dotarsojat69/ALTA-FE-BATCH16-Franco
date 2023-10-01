// input
let T = 20
let r = 4

// kode di bawah sini

// Konstanta
const pi = 3.14

// Luas alas tabung
const luasAlas = pi * Math.pow(r, 2)

// Luas selimut tabung
const luasSelimut = 2 * pi * r * T

// Luas permukaan tabung
const luasPermukaan = 2 * luasAlas + luasSelimut

// Tampilkan hasil
console.log("Luas permukaan tabung adalah:", luasPermukaan)
