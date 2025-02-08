const Joi = require('joi');

const shelterValidation = (req,res,next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        location: Joi.string().min(3).max(100).required(),
        capacity: Joi.number().required()
    });

    const { error } = schema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    next();
}


module.exports = shelterValidation