const express = require('express');
const router = express.Router();
const UserModel = require('../Models/User');
const ensureAuthenticated = require('../Middlewares/Auth');

router.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;