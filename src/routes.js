const express = require('express');
const route = express.Router();

const HomeController = require('./app/controllers/HomeController');


route.get('/' ,  HomeController.index );

route.get('*', (req,res) => {
  res.render('pages/404/index', {title: "Error 404"});
})
module.exports = route;

