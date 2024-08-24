import joi from 'joi';

export const post_put_productValidationSchema = joi.object({
  nameP: joi.string().trim().min(3).max(30).required().messages({
    'string.min': 'El nombre debe tener al menos 3 caracteres',
    'string.max': 'El nombre debe tener menos de 30 caracteres',
    'any.required': 'El nombre es obligatorio',
    '*': "revisa el campo 'nameP' ",
  }),
  img: joi.string().trim().min(3).uri().required().messages({
    'string.uri': "El campo 'img' debe tener una URL válida",
    'any.required': "El campo 'img' es obligatorio",
    '*': "revisa el campo 'img' ",
  }),
  price: joi.number().positive().required().messages({
    'number.base': "El campo 'price' debe ser un número válido",
    'number.positive': "El campo 'price' debe ser un número positivo",
    'any.required': "El campo 'price' es obligatorio",
    '*': "revisa el campo 'price' ",
  }),
  content: joi.string().trim().min(3).max(500).required().messages({
    'string.min': "El campo 'content' debe tener al menos 3 caracteres",
    'string.max': "El campo 'content' debe tener menos de 500 caracteres",
    'any.required': "El campo 'content' es obligatorio",
    '*': "revisa el campo 'content' ",
  }),
  existens: joi.boolean().required().messages({
    'any.required': "El campo 'existens' es obligatorio",
    '*': "revisa el campo 'existens' ",
  }),
  veganas: joi.boolean().messages({
    '*': "revisa el campo 'veganas' ",
  }),
  celiac: joi.boolean().messages({
    '*': "revisa el campo 'celiac' ",
  }),
  vegetarian: joi.boolean().messages({
    '*': "revisa el campo 'vegetarian' ",
  }),
  category: joi.string().trim().min(3).max(30).required().messages({
    'string.min': "El campo 'category' debe tener al menos 3 caracteres",
    'string.max': "El campo 'category' debe tener menos de 30 caracteres",
    'any.required': "El campo 'category' es obligatorio",
    '*': "revisa el campo 'category' ",
  }),
});
