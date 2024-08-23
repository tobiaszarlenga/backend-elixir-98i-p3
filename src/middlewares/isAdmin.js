import HttpCodes from 'http-status-codes';

export const isAdmin = (req, res, next) => {
  const { user } = req;
  if (!user.isAdmin) {
    res.status(HttpCodes.FORBIDDEN).json({
      data: null,
      message: 'No tiene permisos para realizar esta acción',
    });
    return;
  }
  next();
};
