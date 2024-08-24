import express from 'express';
import { Products } from '../../controllers/products/index.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { isAuthenticated } from '../../middlewares/isAuthenticated.js';

import { post_put_productValidationSchema } from '../../helpers/validationSchemas/productsValidationSchemas.js';
import { isAdmin } from '../../middlewares/isAdmin.js';

export const productRouter = express.Router();

// get-------------
productRouter.get('/', Products.GetController.getProducts);
productRouter.get('/:id', Products.GetController.getProduct);

// post------------
// /api/v1/product/
productRouter.post(
  '/',
  isAuthenticated,
  isAdmin,
  (req, res, next) =>
    validateBody(req, res, next, post_put_productValidationSchema),
  Products.PostController.postProduct,
);
// put-------------
productRouter.put(
  '/:id',
  isAuthenticated,
  isAdmin,
  (req, res, next) =>
    validateBody(req, res, next, post_put_productValidationSchema),
  Products.PutController.putProduct,
);

// delete-------------
productRouter.delete(
  '/:id',
  isAuthenticated,
  isAdmin,
  Products.DeleteController.deleteProduct,
);
