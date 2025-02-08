const VolunteerModel = require('../Models/Volunteer');


const addVolunteer = async (req, res) => {
    const volunteer = new VolunteerModel({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    });

    try {
        const newVolunteer = await volunteer.save();
        res.status(201).json(newVolunteer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getVolunteers = async (req, res) => {
    try {
        const volunteers = await VolunteerModel.find();
        res.json(volunteers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};  

module.exports = { addVolunteer, getVolunteers };