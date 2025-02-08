const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShelterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    }
});

const ShelterModel = mongoose.model('shelters', ShelterSchema);
module.exports = ShelterModel;