const  ensureAuthenticated  = require('../Middlewares/Auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    res.status(200).json([
        {"location": "Admin Dashboard"}
    ]);
});

module.exports = router;