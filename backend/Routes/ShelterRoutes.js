const  ensureAuthenticated  = require('../Middlewares/Auth');
const ShelterModel = require('../Models/Shelters');

const router = require('express').Router();

router.get('/shelters', async (req, res) => {
    try {
        const shelters = await ShelterModel.find();
        res.json(shelters);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/shelters',  async (req, res) => {
    const shelter = new ShelterModel({
        name: req.body.name,
        location: req.body.location,
        capacity: req.body.capacity
    });

    try {
        const newShelter = await shelter.save();
        res.status(201).json(newShelter);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;