const Event = require('../models/event');

module.exports = {
  index,
  allEvents
};

function index(req, res) {
  Event.find({}).populate('artists').exec(function (err, events) {
    res.render('searches/index', { title: 'All Searches', events: [] });
  });
}

function allEvents(req, res) {
  let eventQuery = req.body.city ? { city: new RegExp(req.body.city, 'i') } : {};
  Event.find(eventQuery).populate('artists').exec(function (err, events) {
    res.render('searches/index', {
      events,
      citySearch: req.body.city
    });
  });
}
