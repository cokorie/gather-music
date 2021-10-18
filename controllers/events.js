const Event = require('../models/event');
const Artist = require('../models/artist');

module.exports = {
    index,
    new: newEvent,
    create,
    show,
    delete: deleteEvent
};

function index(req, res) {
    Event.find({}, function (err, events) {
      res.render('events/index', { title: 'All Events', events });
    });
  }

function newEvent(req, res) {
    Artist.find({}, function(err, artists) {
      res.render('events/new', { title: 'Add Event', artists });
    });
}

function create(req, res) {
  let event = new Event(req.body);
  event.save(function (err){
    res.redirect('/events');
  });
}

function show(req, res) {
  Event.findById(req.params.id).populate('acts').exec(function(err, eventInfo) {
    Artist.find({eventInfo: req.params.id}, function(err, artist) {
      console.log(artist);
      res.render('events/show', {
        title: 'Event Info',
        eventInfo, artist
      });
    });
  }); 
}

function deleteEvent(req,res) {
  Event.findByIdAndDelete(req.params.id, function (err) {
      res.redirect('/events');
    });
}