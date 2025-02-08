const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VolunteerSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    } ,
});

const VolunteerModel = mongoose.model('volunteers', VolunteerSchema);
module.exports = VolunteerModel;