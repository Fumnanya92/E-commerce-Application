// app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(bodyParser.json());

// Sample product catalog
let products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Smartphone', price: 499 },
  { id: 3, name: 'Headphones', price: 99 },
];

// Cart to store user-selected products
let cart = [];

// Route to display all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Route to add a product to the cart
app.post('/cart', (req, res) => {
  const productId = req.body.productId;
  const product = products.find(p => p.id === productId);

  if (product) {
    cart.push(product);
    res.status(200).json({ message: 'Product added to cart', cart });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Route to view the cart
app.get('/cart', (req, res) => {
  res.json(cart);
});

// Route to checkout (clear the cart)
app.post('/checkout', (req, res) => {
  if (cart.length > 0) {
    const totalAmount = cart.reduce((acc, product) => acc + product.price, 0);
    cart = []; // Clear the cart
    res.json({ message: 'Checkout successful', totalAmount });
  } else {
    res.status(400).json({ message: 'Cart is empty' });
  }
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
