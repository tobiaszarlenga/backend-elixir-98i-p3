import HttpCodes from 'http-status-codes';

export const validateBody = (req, res, next, validationSchema) => {
  const { body } = req;

  const { error } = validationSchema.validate(body);

  if (error) {
    // ERROR DE VALIDACION
    res.status(HttpCodes.BAD_REQUEST).json({
      data: null,
      message:
        error.details[0].message || 'Ocurrió un error al validar los campos',
    });
    return;
  }

  next();
};
