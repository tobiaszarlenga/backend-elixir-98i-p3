import Joi from 'joi';

export const post_productSchema = Joi.object({
  name: Joi.string().required().trim().min(3).max(30).messages({
    'string.empty': 'El campo "name" no puede estar vacío',
    'string.min': 'El campo "name" debe tener al menos 3 caracteres',
    'string.max': 'El campo "name" debe tener máximo 30 caracteres',
    'any.required': 'El campo "name" es obligatorio',
    '*': 'Revisa el campo "name"',
  }),
  price: Joi.number().required().min(1).max(1000000).messages({
    'number.empty': 'El campo "price" no puede estar vacío',
    'number.min': 'El campo "price" debe ser mayor a 0',
    'number.max': 'El campo "price" debe ser menor a 1000000',
    'any.required': 'El campo "price" es obligatorio',
    '*': 'Revisa el campo "price"',
  }),
  description: Joi.string().required().trim().min(3).max(100).messages({
    'string.empty': 'El campo "description" no puede estar vacío',
    'string.min': 'El campo "description" debe tener al menos 3 caracteres',
    'string.max': 'El campo "description" debe tener máximo 100 caracteres',
    'any.required': 'El campo "description" es obligatorio',
    '*': 'Revisa el campo "description"',
  }),
  imageUrl: Joi.string().required().trim().min(5).max(1000).uri().messages({
    'string.empty': 'El campo "imageUrl" no puede estar vacío',
    'string.min': 'El campo "imageUrl" debe tener al menos 5 caracteres',
    'string.max': 'El campo "imageUrl" debe tener máximo 1000 caracteres',
    'string.uri': 'El campo "imageUrl" debe ser una URL válida',
    'any.required': 'El campo "imageUrl" es obligatorio',
    '*': 'Revisa el campo "imageUrl"',
  }),
  category: Joi.string().required().trim().messages({
    'string.empty': 'El campo "category" no puede estar vacío',
    'any.required': 'El campo "category" es obligatorio',
    '*': 'Revisa el campo "category"',
  }),
  available: Joi.string().required().trim().messages({
    'string.empty': 'El campo "available" no puede estar vacío',
    'any.required': 'El campo "available" es obligatorio',
    '*': 'Revisa el campo "available"',
  }),
  optionsFree: Joi.string().required().trim().messages({
    'string.empty': 'El campo "optionsFree" no puede estar vacío',
    'any.required': 'El campo "optionsFree" es obligatorio',
    '*': 'Revisa el campo "optionsFree"',
  }),
  isActive: Joi.boolean().default(true).messages({
    '*': 'Revisa el campo "isActive"',
  }),
}).messages({
  'object.unknown': 'El campo "{#key}" no está permitido',
  '*': 'Formato del body incorrecto',
});

export const put_productSchema = Joi.object({
  name: Joi.string().trim().min(3).max(30).messages({
    'string.empty': 'El campo "name" no puede estar vacío',
    'string.min': 'El campo "name" debe tener al menos 3 caracteres',
    'string.max': 'El campo "name" debe tener máximo 30 caracteres',
    '*': 'Revisa el campo "name"',
  }),
  price: Joi.number().min(1).max(1000000).messages({
    'number.empty': 'El campo "price" no puede estar vacío',
    'number.min': 'El campo "price" debe ser mayor a 0',
    'number.max': 'El campo "price" debe ser menor a 1000000',
    '*': 'Revisa el campo "price"',
  }),
  description: Joi.string().trim().min(3).max(100).messages({
    'string.empty': 'El campo "description" no puede estar vacío',
    'string.min': 'El campo "description" debe tener al menos 3 caracteres',
    'string.max': 'El campo "description" debe tener máximo 100 caracteres',
    '*': 'Revisa el campo "description"',
  }),
  imageUrl: Joi.string().trim().min(5).max(1000).uri().messages({
    'string.empty': 'El campo "imageUrl" no puede estar vacío',
    'string.min': 'El campo "imageUrl" debe tener al menos 5 caracteres',
    'string.max': 'El campo "imageUrl" debe tener máximo 1000 caracteres',
    'string.uri': 'El campo "imageUrl" debe ser una URL válida',
    '*': 'Revisa el campo "imageUrl"',
  }),
  category: Joi.string().trim().messages({
    'string.empty': 'El campo "category" no puede estar vacío',
    '*': 'Revisa el campo "category"',
  }),
  available: Joi.string().trim().messages({
    'string.empty': 'El campo "available" no puede estar vacío',
    '*': 'Revisa el campo "available"',
  }),
  optionsFree: Joi.string().trim().messages({
    'string.empty': 'El campo "optionsFree" no puede estar vacío',
    '*': 'Revisa el campo "optionsFree"',
  }),
  isActive: Joi.boolean().default(true).messages({
    '*': 'Revisa el campo "isActive"',
  }),
})
  .custom((value, helpers) => {
    const {
      name,
      price,
      description,
      imageUrl,
      category,
      available,
      optionsFree,
    } = value;

    if (
      !name &&
      !price &&
      !description &&
      !imageUrl &&
      !category &&
      !available &&
      !optionsFree
    ) {
      return helpers.message(
        'Al menos un campo debe estar presente en el body',
      );
    }

    return true;
  })
  .messages({
    'object.unknown': 'El campo "{#key}" no está permitido',
    '*': 'Formato del body incorrecto',
  });

export const get_params_productSchema = Joi.object({
  id: Joi.string().required().length(24).messages({
    'string.empty': 'El parámetro "id" no puede estar vacío',
    'string.length': 'El parámetro "id" debe ser un id válido',
    'any.required': 'El parámetro "id" es obligatorio',
    '*': 'Revisa el parámetro "id"',
  }),
});

export const put_params_productSchema = get_params_productSchema;
export const delete_params_productSchema = get_params_productSchema;
