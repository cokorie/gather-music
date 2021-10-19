const Event = require('../models/event');
const Artist = require('../models/artist');

module.exports = {
    index,
    new: newEvent,
    create,
    show,
    delete: deleteEvent,
    addToEvent
};

function addToEvent(req, res) {
  Artist.findById(req.params.id, function(err, eventInfo) {
    eventInfo.artists.push(req.body.artistId);
    eventInfo.save(function(err) {
      res.redirect(`/events/${eventInfo._id}`);
    });
  });
}

function index(req, res) {
    Event.find({}, function (err, events) {
      res.render('events/index', { title: 'All Events', events });
    }).sort('date');
  }

function newEvent(req, res) {
      res.render('events/new', { title: 'Add Event' });
}

function create(req, res) {
  let event = new Event(req.body);
  event.save(function (err){
    res.redirect('/events');
  });
}

function show(req, res) {
  Event.findById(req.params.id).populate('artists').exec(function(err, eventInfo) {
    Artist.find({_id: {$nin: eventInfo.artists}}, function(err, artists) {
      console.log(artists);
      res.render('events/show', {
        title: 'Event Info',
        eventInfo, artists
      });
    });
  }); 
}

function deleteEvent(req,res) {
  Event.findByIdAndDelete(req.params.id, function (err) {
      res.redirect('/events');
    });
}