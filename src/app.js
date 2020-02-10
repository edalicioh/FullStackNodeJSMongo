require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const helmet = require('helmet');
const csrf = require('csurf');

const session = require('./config/session');
const routes = require('./routes');
const { csrfTokenError , csrfMiddleware} = require('./app/middlewares/middlewares');

const app = express();

mongoose.connect(
  process.env.APP_MONGO_CONNECTION, 
  { 
    useNewUrlParser: true ,
    useUnifiedTopology: true 
  } 
).then(() => app.emit('start'))


app.use(session);
app.use(flash());
app.use(helmet());
app.use(csrf());
app.use(csrfTokenError);
app.use(csrfMiddleware);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname , '..' , 'public')));
app.set('views', path.resolve(__dirname, 'app' , 'views'));
app.set('view engine', 'ejs');


app.use(routes);
module.exports = app