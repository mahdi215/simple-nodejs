const fs = require('fs');

// Nama file yang akan dibaca
const fileName = 'test.txt';

// Membaca file secara asynchronous
fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        // Menangani error jika file tidak ditemukan atau ada masalah lain
        console.error(err);
        return;
    }

    // Mencetak isi file ke konsol
    console.log(data);
});