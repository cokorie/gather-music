const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const artistSchema = new mongoose.Schema({
    name: String,
    breed: String
  });