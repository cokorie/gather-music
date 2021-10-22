const Event = require('../models/event');

module.exports = {
    addLike
}

function addLike(req, res) {
    Event.findById(req.params.id, function(err, event) {
    //   if (event.like.id(req.user._id)) return res.redirect('/events');
    if (err) return res.redirect('/events');
    if(event.like.some(l => l.equals(req.user._id))) return res.redirect('/events');
      event.like.push(req.user._id);
      event.save(function(err) {
        res.redirect(`/events/${event._id}`);
      });
    });
  }