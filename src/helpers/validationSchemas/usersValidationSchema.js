import Joi from 'joi';

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const post_userValidationSchema = Joi.object({
  name: Joi.string().trim().min(3).max(30).required().messages({
    'string.min': "El campo 'name' debe tener como mínimo 3 caracteres",
    'string.max': "El campo 'name' debe tener como máximo 30 caracteres",
    'any.required': "El campo 'name' es requerido",
    '*': "Revisa el campo 'name'",
  }),
  dni: Joi.string().trim().min(7).max(12).required().messages({
    'string.min': "El campo 'dni' debe tener como mínimo 7 caracteres",
    'string.max': "El campo 'dni' debe tener como máximo 12 caracteres",
    'any.required': "El campo 'dni' es requerido",
    '*': "Revisa el campo 'dni'",
  }),
  email: Joi.string().trim().regex(emailRegex).email().required().messages({
    'string.email': "El campo 'email' debe ser un correo electrónico válido",
    'any.required': "El campo 'email' es requerido",
    '*': "Revisa el campo 'email'",
  }),

  password: Joi.string().trim().regex(passwordRegex).required().messages({
    'string.pattern.base':
      "El campo 'password' debe tener una minúscula, una mayúscula, un dígito, y un caracter especial, entre 8 y 15 caracteres",
    'any.required': "El campo 'password' es requerido",
    '*': "Revisa el campo 'password'",
  }),
  coment: Joi.string().trim().max(500).optional().messages({
    'string.max': "El campo 'coment' debe tener como máximo 500 caracteres",
    '*': "Revisa el campo 'coment'",
  }),
});
