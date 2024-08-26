import express from 'express';
import { Auth } from '../../controllers/auth/index.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { post_loginValidationSchema } from '../../helpers/validationSchemas/authValidationSchema.js';
import { post_userValidationSchema } from '../../helpers/validationSchemas/usersValidationSchema.js';

export const authRouter = express.Router();

// Ruta para el inicio de sesión
authRouter.post(
  '/login',
  (req, res, next) => validateBody(req, res, next, post_loginValidationSchema),
  Auth.PostController.postLogin,
);

// Ruta para el registro de usuario
authRouter.post(
  '/register',
  (req, res, next) => validateBody(req, res, next, post_userValidationSchema),
  Auth.PostController.register,
);

// Ruta para cambiar contraseña
authRouter.post(
  '/change-password',
  (req, res, next) => validateBody(req, res, next, post_loginValidationSchema), // Aquí puedes decidir si usar un esquema más estricto como `post_userValidationSchema` si lo deseas
  Auth.PostController.changePassword,
);
