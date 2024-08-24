import joi from 'joi';

export const post_put_productValidationSchema = joi.object({
  title: joi.string().trim().min(3).max(30).required().messages({
    'string.min': 'El título debe tener al menos 3 caracteres',
    'string.max': 'El título debe tener menos de 30 caracteres',
    'any.required': 'El título es obligatorio',
    '*': "revisa el campo 'title' ",
  }),
  imageUrl: joi.string().trim().min(3).uri().required().messages({
    'string.uri': "El campo 'imageUrl' debe tener una url valida",
    'any.required': "El campo 'imageUrl' es obligatorio",
    '*': "revisa el campo 'imageUrl' ",
  }),
  content: joi.string().trim().min(3).max(500).required().messages({
    'string.min': "El campo 'content' debe tener al menos 3 caracteres",
    'string.max': "El campo 'content' debe tener menos de 500 caractere",
    'any.required': "El campo 'content' es obligatorio",
    '*': "revisa el campo 'content' ",
  }),
});
