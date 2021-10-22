const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const artistSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  genre: {
    type: String,
    enum: ['Alternative', 'Blues', 'Classical', 'Country', 'Electronic', 'Gospel', 'Hip-Hop/Rap', 'Jazz', 'Pop', 'R&B', 'Rock', 'Soul/Funk', 'Urbano Latino', 'N/A'],
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Artist', artistSchema);