const http = require('http');

// Port untuk server
const PORT = 3000;

// Membuat server
const server = http.createServer((req, res) => {
    // Menyiapkan respons
    res.statusCode = 200; // Kode status HTTP sukses
    res.setHeader('Content-Type', 'text/plain'); // Header respons
    res.end('Hello, World i"m mahdi!\n'); // Isi respons
});

// Menjalankan server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});