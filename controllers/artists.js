const Artist = require('../models/artist');

module.exports = {
    index,
    new: newArtist,
    create
}

function index(req, res) {
    Artist.find({}, function (err, artists) {
      res.render('artists/index', { title: 'All Artists', artists });
    });
  }

function newArtist(req, res) {
  res.render('artists/new', { title: 'Add Artist' });
}

function create(req, res) {
  Artist.create(req.body, function(err, artist) {
    console.log(err);
    res.redirect('/events');
  });
}