const express = require('express')
const app = express();
const path = require('path');
const methodOverride = require('method-override')
const morgan = require('morgan');
const cookies = require('cookie-parser');
const session = require('express-session');

const PORT = 3010;

const mainRouter = require('./routes/main.js');
const userRouter = require('./routes/user.js');
const productRouter = require('./routes/product.js');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/../public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(cookies());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
}));

app.listen(PORT, () => console.log("Servidor corriendo en el puerto " + PORT));

app.use('/', mainRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use((req, res, next) => {
  res.status(404).render('not-found');
});











