const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const messageSchema = new Schema({
  content: String,
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

const eventSchema = new mongoose.Schema({
 venue: {
    type: String,
  },
  date: {
    type: Date,
  },
  messages: [messageSchema],
  artists: [{type: Schema.Types.ObjectId, ref: 'Artist'}]
}, {
    timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);