const express= require('express');
const path = require('path');
const exphbs= require('express-handlebars');
const morgan = require('morgan');
const handlebars = require('handlebars');
//Initializations
const app = express()


//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname ,'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
   // helpers: require('./helpers'),
    extname: '.hbs',
    handlebars: handlebars
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Routes
app.use(require('./routes/main.routes'));
//Static Files
app.use(express.static(path.join(__dirname ,'public')));

module.exports = app;