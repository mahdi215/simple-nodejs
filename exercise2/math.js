/// Function -> math.js
// Buat fungsi yang menghitung luas lingkaran berdasarkan jari-jari yang diberikan.
function luaslingkaran(a) {
    let luas;

    luas = 3.14 * a * a

    return luas;
}

console.log(luaslingkaran(2));

// Buat fungsi yang menerima array angka dan mengembalikan array baru dengan angka-angka yang dikuadratkan.
var number = [3, 6, 7, 8, 15, ]
var number2 = number.map(function(e) {
    return e * 2;
});
console.log(number2.join(' - '));