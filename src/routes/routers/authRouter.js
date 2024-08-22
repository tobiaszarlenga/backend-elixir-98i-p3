import express from 'express';

import { Auth } from '../../controllers/auth/index.js';
import { validateBody } from '../../middlewares/validateBody.js';
// import { isAuthenticated } from '../../middlewares/isAuthenticated.js';
// import { isAdmin } from '../../middlewares/isAdmin.js';

import { post_loginValidationSchema } from '../../helpers/validationSchemas/authValidationSchema.js';

export const authRouter = express.Router();

// GET ----------------------------
// userRouter.get('/', isAuthenticated, isAdmin, Users.GetController.getUsers);

// POST ----------------------------
// /api/v1/auth/login
authRouter.post(
  '/login',
  (req, res, next) => validateBody(req, res, next, post_loginValidationSchema),
  Auth.PostController.postLogin,
);
