import Joi from 'joi';
import { emailRegex } from './usersValidationSchema';

export const post_loginValidationSchema = Joi.object({
  email: Joi.string().trim().regex(emailRegex).email().required().messages({
    'string.email': "El campo 'email' debe ser un correo electrónico válido",
    'any.required': "El campo 'email' es requerido",
    '*': "Revisa el campo 'email'",
  }),
  password: Joi.string().trim().min(3).required().messages({
    'string.min': "El campo 'password' debe tener al menos 3 caracteres",
    'any.required': "El campo 'password' es requerido",
    '*': "Revisa el campo 'password'",
  }),
});
