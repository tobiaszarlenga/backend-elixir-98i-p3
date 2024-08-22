import express from 'express';

import { contactRouter } from './routers/contactRouters.js';
import { productsRouter } from './routers/productsRouter.js';

export const mainRouter = express.Router();

mainRouter.use('/contact', contactRouter);
mainRouter.use('/products', productsRouter);
