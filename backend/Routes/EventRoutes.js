const ensureAuthenticated = require('../Middlewares/Auth');
const EventModel = require('../Models/Event');

const router = require('express').Router();

router.get('/events', async (req, res) => {
    try {
        const events = await EventModel.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/events', async (req, res) => {
    const event = new EventModel({
        Name: req.body.name,
        Location: req.body.location,
        Date: req.body.date
    });

    try {
        const newEvent = await event.save();
        res.status(201).json(newEvent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;