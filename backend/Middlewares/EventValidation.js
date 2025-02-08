const Joi = require('joi');

const eventValidation = (req,res,next) => {
    const schema = Joi.object({
        Name: Joi.string().min(3).max(100).required(),
        Location: Joi.string().min(3).max(100).required(),
        Date: Joi.date().required(),
    });

    const { error } = schema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    next();
}

module.exports = eventValidation