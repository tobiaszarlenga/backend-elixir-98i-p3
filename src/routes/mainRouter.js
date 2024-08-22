import express from 'express';

import { blogRouter } from './routers/blogRouter.js';
import { userRouter } from './routers/userRouter.js';
import { authRouter } from './routers/authRouter.js';

export const mainRouter = express.Router();

mainRouter.use('/blogs', blogRouter);
mainRouter.use('/users', userRouter);
mainRouter.use('/auth', authRouter);
