const { required } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['Shelter Admin', 'Volunteer', 'Person-in-need']
    },
    phone: {
        type: String,
        required: true
    },
    joinedDate: {
        type: Date,
        default: Date.now
    },
    role:{
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    },
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;