import jwt from 'jsonwebtoken';
import HttpStatus from 'http-status-codes';

import { envs } from '../config/envs.js';

const { JWT_SECRET_KEY } = envs;

const isAuthenticated = (req, res, next) => {
  const { headers } = req;
  const authHeader = headers.authorization; // string

  if (!authHeader) {
    res.status(HttpStatus.UNAUTHORIZED).json({
      data: null,
      message: 'Token no detectado en el header "Authorization"',
    });
    return;
  }

  // Separate the word "Bearer" from the token
  const token = authHeader.split(' ')[1];

  try {
    const tokenInfo = jwt.verify(token, JWT_SECRET_KEY);

    req.user = tokenInfo.user;

    // valid token
    next();
  } catch (err) {
    // invalid token
    console.error('🟥', err);
    res.status(HttpStatus.UNAUTHORIZED).json({
      data: null,
      message: 'Token no valido o expirado',
    });
  }
};

export default isAuthenticated;
