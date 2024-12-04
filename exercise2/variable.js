// Variabel, Tipe Data, dan Operator -> variabel.js
// Buat program yang mendemonstrasikan penggunaan variabel let, const, dan var.
// Buat program yang mencakup semua tipe data primitif dan non-primitif, serta menggunakan operator aritmatika dan perbandingan.

// 1. variable
//makes province in Indonesia
//primitif metode
var country = "Indonesia";
const province = "Aceh";
let city = 5;
let discotic = null;
let serambimekkah = true;
let jakarta = undefined;

//non-primitif metode
Object = { country: "Indonesia", province: "Aceh", city: 5, serambimekkah: true, jakarta: undefined };
Array = [1, 2, 3, 4, 5];

//operator
//aritmatika (+, , , /, %)
let a = 33;
let b = 5;
let sum = a + b; //38
let difference = a - b; // 33
let product = a * b; // 165
let quotient = a / b; // 6.6
let remainder = a % b; // 3

//opertaor perbandingan
//==, ===, !=, !==, <, <=, >, >=
let i = 14;
let s = "7";

console.log(i == s); // false (loose equality)
console.log(i === s); // false (strict equality)
console.log(i != s); //true
console.log(i !== s); // true
console.log(i > 5); // true
console.log(i <= 10); // false