const express = require('express')
const app = express()
const path = require('path')
const PORT = 3010

app.use(express.static(__dirname + '/public'))

app.listen(PORT, () => console.log("Servidor corriendo en el puerto " + PORT))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/cart', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/cart.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get("/productDetail", (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'))
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
});
app.get("/createProduct", (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/createProduct.html'))
});