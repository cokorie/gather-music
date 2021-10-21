const Event = require('../models/event');
const Artist = require('../models/artist');

module.exports = {
  index,
  new: newEvent,
  create,
  show,
  delete: deleteEvent,
  addToEvent,
  edit,
  update,
  removeArtist,
  addArtistOnEditPage
};

function addArtistOnEditPage(req, res) {
  Event.findById(req.params.id, function (err, eventInfo) {
    console.log(req.params.id);
    eventInfo.artists.push(req.body.artistId);
    eventInfo.save(function (err) {
      res.redirect(`/events/${eventInfo._id}/edit`);
    });
  });
}

function addToEvent(req, res) {
  Event.findById(req.params.id, function (err, eventInfo) {
    console.log(req.params.id);
    eventInfo.artists.push(req.body.artistId);
    eventInfo.save(function (err) {
      res.redirect(`/events/${eventInfo._id}`);
    });
  });
}

function index(req, res) {
  Event.find({}).populate('artists').sort('date').exec(function (err, events) {
    res.render('events/index', { title: 'All Events', events });
  })
}

function newEvent(req, res) {
  res.render('events/new', { title: 'Add Event' });
}

function create(req, res) {
  let event = new Event(req.body);
  event.user = req.user._id;
  event.save(function (err) {
    res.redirect('/events');
  });
}

function show(req, res) {
  Event.findById(req.params.id).populate('artists').exec(function (err, eventInfo) {
    Artist.find({ _id: { $nin: eventInfo.artists } }, function (err, artists) {
      console.log(artists);
      res.render('events/show', {
        title: 'Event Info',
        eventInfo, artists
      });
    });
  });
}

function deleteEvent(req, res) {
  Event.findByIdAndDelete({ _id: req.params.id, user: req.user._id }, function (err) {
    res.redirect('/events');
  });
}

function edit(req, res) {
  Event.findById({ _id: req.params.id, user: req.user._id }).populate('artists').exec(function (err, event) {
    Artist.find({ _id: { $nin: event.artists } }, function (err, artists) {
      if (err) {
        res.redirect(`/events/${req.params.id}`);
      }
      res.render('events/edit', {
        event,
        title: "Edit Event",
        artists,
        eventDate: event.date.toISOString().slice(0, 16),
      });
    });
  });
}

function update(req, res) {
  Event.findByIdAndUpdate(req.params.id, req.body, function (err, event) {
    if (err) {
      res.render('events/edit', { event, venue: "Update Event" });
    }
    res.redirect(`/events/${req.params.id}`);
  });
}

function removeArtist(req, res) {
  Event.findById(req.params.eventId, function(err, event) {
    event.artists.remove(req.params.artistId);
    event.save(function(err) {
      res.redirect(`/events/${event._id}/edit`);
    });
  });
}