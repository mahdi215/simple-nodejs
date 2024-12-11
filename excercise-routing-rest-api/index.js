const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Route dengan parameter dan query string
app.get('/api/products/:id/posts', (req, res) => {
    const productId = req.params.id;
    const searchQuery = req.query.q;
})

let products = [
    { id: 1, name: 'Playstation', price: 15000000 },
    { id: 2, name: 'Table', price: 400000 }
];

// GET semua produk
app.get('/api/products', (req, res) => {
    res.json(products);
});

// GET produk berdasarkan ID
app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// POST produk baru
app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    newProduct.id = products.length ? products[products.length - 1].id + 1 : 1;
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// PUT update produk
app.put('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        products[productIndex] = { id: productId, ...req.body };
        res.json(products[productIndex]);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// DELETE produk
app.delete('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    products = products.filter(p => p.id !== productId);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server is running at <http://localhost>:${port}`);
});