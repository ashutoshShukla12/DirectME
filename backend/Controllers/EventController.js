const EventModel = require('../Models/Event');

const addEvent = async (req, res) => {
    let date;
    try {
        date = new Date(req.body.date);
        if (isNaN(date.getTime())) {
            throw new Error('Invalid date format');
        }
    } catch (err) {
        return res.status(400).json({ message: 'Invalid date format' });
    }

    const event = new EventModel({
        name: req.body.name,
        location: req.body.location,
        date: date.toISOString() // Convert date to ISO string format
    });

    try {
        const newEvent = await event.save();
        res.status(201).json(newEvent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getEvents = async (req, res) => {
    try {
        const events = await EventModel.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { addEvent, getEvents };