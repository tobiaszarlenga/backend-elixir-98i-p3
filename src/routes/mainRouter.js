import express from 'express';

import { productRouter } from './routers/productRouter.js';
import { userRouter } from './routers/userRouter.js';
import { authRouter } from './routers/authRouter.js';
import { cartRouter } from './routers/cartRouter.js'; // Importar el router del carrito

export const mainRouter = express.Router();

mainRouter.use('/products', productRouter);
mainRouter.use('/users', userRouter);
mainRouter.use('/auth', authRouter);
mainRouter.use('/cart', cartRouter);
