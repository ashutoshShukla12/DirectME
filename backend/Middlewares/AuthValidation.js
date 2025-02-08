const Joi = require('joi');

const signupValidation = (req,res,next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(12).required(),
        type: Joi.string().valid('Shelter Admin', 'Volunteer', 'Person-in-need').required(),
        phone: Joi.string().min(10).max(10).required(),
        joinedDate: Joi.date().default(Date.now),
        role: Joi.string().valid('user', 'admin').default('user')
    });

    const { error } = schema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    next();
}

const loginValidation = (req,res,next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(12).required()
    });

    const { error } = schema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    next();
}

module.exports = {
    signupValidation,
    loginValidation
}