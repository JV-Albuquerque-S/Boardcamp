import Joi from "joi";

export  function verifyCustomer(req, res, next) {
    const customer = req.body;

    const customerSchema = Joi.object({
        name: Joi.string().required(),
        phone: Joi.string().min(10).max(11).required(),
        cpf: Joi.string().length(11).required(),
        birthday: Joi.date().iso().required(),
    });

    const validation = customerSchema.validate(customer);
    if(validation.error) {
        res.status(400).send(validation.error.details);
        return;
    }
    
    next();
}