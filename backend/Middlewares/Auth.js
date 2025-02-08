const jwt = require('jsonwebtoken');
const ensureAuthenticated = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if(!bearerHeader) return res.status(403).json({message: 'Unauthorized'});
    try{
        const decoded = jwt.verify(bearerHeader, process.env.JWT_SECRET);
        req.user = decoded;

        next();
    }
    catch(err){
        res.status(403).json({message: 'invalid token ' + err.message});
    }
}

module.exports = ensureAuthenticated;