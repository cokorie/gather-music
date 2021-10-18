const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const eventSchema = new mongoose.Schema({
 venue: {
    type: String,
  },
  date: {
    type: Date,
  },
  message: {
    type: String,
  },
  acts: [{type: Schema.Types.ObjectId, ref: 'Artist'}],
}, {
    timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);