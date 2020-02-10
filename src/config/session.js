const mongoose = require('mongoose');
const session = require('express-session');
const mongoSession = require('connect-mongo')(session);

const sessionOptions = session({
  secret: process.env.APP_SESSION_SECRET,
  store: new mongoSession({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized:false,
  cookie: {
    maxAge: 1000*60*60*24*parseInt(process.env.APP_SESSION_EXPIRATION_TIME),
    httpOnly:true
  }
});

module.exports = sessionOptions;