const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
  title:{ type: String , required: true },
  description: String
})

module.exports = mongoose.model( 'home' , homeSchema );