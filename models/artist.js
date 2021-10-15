const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const artistSchema = new mongoose.Schema({
 name: {
    type: String,
    type: Schema.Types.ObjectId,
  },
  date: {
    type: Date,
  }
}, {
    timestamps: true
});

module.exports = mongoose.model('Artist', artistSchema);