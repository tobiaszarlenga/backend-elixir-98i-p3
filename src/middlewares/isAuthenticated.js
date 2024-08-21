import jwt from 'jsonwebtoken';

export const isAuthenticated = (req, res, next) => {
  const { headers } = req;

  const authorizationHeader = headers.Authorization;

  if (!authorizationHeader) {
    res.status(401).json({
      data: null,
      message: 'No se encontro un token en la peticion',
    });
    return;
  }
  // si el header esta tiene el valor "Bearer Token"
  const token = authorizationHeader.split(' ')[1];
  try {
    const data = jwt.verify(token, process.env.SECRET_KEY);
    // agregamos el campo "user a la request para futuro uso "
    req.user = data.user;
    next();
  } catch (_) {
    res.status(401).json({
      data: null,
      message: 'Token invalido',
    });
  }
};
