const Event = require('../models/event');

module.exports = {
    create,
    delete: deleteMessage
};

async function deleteMessage(req, res) {
    console.log(req.params.id);
    const event = await Event.findOne({ 'messages._id': req.params.id });
    console.log(event);
    const message = event.messages.id(req.params.id);
    if (!message.user.equals(req.user.id)) {
        return res.redirect(`/events/${event._id}`);
    }
    message.remove();
    await event.save();
    res.redirect(`/events/${event._id}`);
}

function create(req, res) {
    Event.findById(req.params.id, function (err, event) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        event.messages.push(req.body);
        event.save(function (err) {
            res.redirect(`/events/${event._id}`);
        });
    });
}