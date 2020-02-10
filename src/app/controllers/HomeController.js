const homeModel = require('../models/home');

exports.index = (req , res ) => {
  res.render('pages/home/index' , {
    title: 'Primeira pagina',
    description: `Esta é uma pagina de modelo de como trabalhar com o nodejs de forma full stack, este modelo contem <br>{ "nodemon": "^2.0.2",
    "@babel/cli", "@babel/core","@babel/preset-env", "babel-loader", "autoprefixer", "css-loader", "exports-loader", "node-sass": "^4.13.1",
    "postcss-loader", "sass-loader", "style-loader", "webpack" ,"webpack-cli", "@fortawesome/fontawesome-free", "bootstrap", "connect-flash",
    "connect-mongo", "core-js", "csurf", "dotenv", "ejs", "express", "express-session", "helmet", "jquery", "mongoose", "popper.js", "regenerator-runtime" }`
  });
};