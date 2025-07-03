import Joi from 'joi';

export const postValidation = Joi.object({
  title: Joi.string().min(3).required(),
  content: Joi.string().min(10).required(),
  category: Joi.string().required(),
});
