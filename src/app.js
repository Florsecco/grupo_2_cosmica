const express = require('express')
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const environment = process.env.NODE_ENV || 'development';
dotenv.config({ path: `./src/config/.env.${environment}` });
const methodOverride = require('method-override')
const morgan = require('morgan');
const cookies = require('cookie-parser');
const session = require('express-session');

app.set('env', environment);

const PORT = process.env.PORT;

const mainRouter = require('./routes/main.js');
const userRouter = require('./routes/user.js');
const productRouter = require('./routes/product.js');
const categoryRouter = require('./routes/category.js');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware.js');

app.use(morgan('dev'));
app.use(express.json());
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
app.use(userLoggedMiddleware);

app.listen(PORT, () => console.log("Servidor corriendo en el puerto " + PORT));

console.log(app.get('env'));
if (app.get('env') === 'development') {
  // Configuraciones específicas para el entorno de desarrollo
  console.log('La aplicación está en modo de desarrollo');
} else if (app.get('env') === 'production') {
  // Configuraciones específicas para el entorno de producción
  console.log('La aplicación está en modo de producción');
}
else if (app.get('env') === 'testing') {
  console.log('La aplicación está en modo de testing');
}

app.use('/', mainRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/categories', categoryRouter);
app.use((req, res, next) => {
  res.redirect('/');
  // res.status(404).render('not-found');
});











