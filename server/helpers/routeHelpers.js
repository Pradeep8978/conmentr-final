const Joi = require('joi');

module.exports = {
  validateBody: (schema) => {
    return (req, res, next) => {
      const result = Joi.validate(req.body, schema);
      if (result.error) {
        return res.status(400).json(result.error);
      }

      if (!req.value) { req.value = {}; }
      req.value['body'] = result.value;
      next();
    }
  },

  validateParams: (schema) => {
    return (req, res, next) => {
      const params = {...req.params, ...req.query}
      const result = Joi.validate(params, schema);
      if (result.error) {
        return res.status(400).json(result.error);
      }
      next();
    }
  },

  schemas: {
    authSchema: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      name: Joi.string(),
      role: Joi.array()
    }),
    queryUser: Joi.object().keys({
      role: Joi.string()
    })
  }
}