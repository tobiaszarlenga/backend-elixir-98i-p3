import express from 'express';

import { contactRouter } from './routers/contactRouters.js';

export const mainRouter = express.Router();

mainRouter.use('/contact', contactRouter);
