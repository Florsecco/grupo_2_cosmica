const express = require('express')
const app = express()
const path = require('path')
const PORT = 3010

const mainRouter = require('./routes/main.js');
const userRouter = require('./routes/user.js');
const productRouter = require('./routes/product.js');

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

app.listen(PORT, () => console.log("Servidor corriendo en el puerto " + PORT))

app.use('/',mainRouter);
app.use('/',userRouter);
app.use('/',productRouter);









