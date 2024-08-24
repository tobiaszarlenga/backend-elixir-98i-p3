import express from 'express';
import { Products } from '../../controllers/products/index.js';
import { validateBody } from '../../middlewares/validateBody.js';
import {
    post_productSchema,
    put_productSchema,
} from '../../helpers/validationSchemas/productsValidator.js';

export const productsRouter = express.Router();

productsRouter.get('/', Products.GetController.getProducts);
productsRouter.post(
  '/',
  (req, res, next) => validateBody(req, res, next, post_productSchema),
  Products.PostController.postProduct,
);
productsRouter.put(
  '/:id',
  (req, res, next) => validateBody(req, res, next, put_productSchema),
  Products.PutController.updateProduct,
);
productsRouter.delete('/:id', Products.DeleteController.deleteProduct);
