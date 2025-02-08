const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    res.status(200).json([
        {"location": "Person In Need home page"}
    ]);
});

module.exports = router;