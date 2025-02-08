const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        required: true,
        default: Date.now
    },
});

const EventModel = mongoose.model('events', EventSchema);
module.exports = EventModel;