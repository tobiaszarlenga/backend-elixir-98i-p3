import HttpCodes from 'http-status-codes';

export const validateBody = (req, res, next, validationShema) => {
  const { body } = req;
  const { error } = validationShema.validate(body);
  if (error) {
    // error de validacion
    res.status(HttpCodes.BAD_REQUEST).json({
      data: null,
      message: error.details[0].message || 'error de validacion',
    });
    return;
  }
  next();
};
