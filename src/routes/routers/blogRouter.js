import express from 'express';
import { Blogs } from '../../controllers/blogs/index.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { isAuthenticated } from '../../middlewares/isAuthenticated.js';

import { post_put_blogValidationSchema } from '../../helpers/validationSchemas/blogsValidationSchemas.js';
import { isAdmin } from '../../middlewares/isAdmin.js';

export const blogRouter = express.Router();

// get-------------
blogRouter.get('/', Blogs.GetController.getBlogs);
blogRouter.get('/:id', Blogs.GetController.getBlog);

// post------------
// /api/v1/blog/
blogRouter.post(
  '/',
  isAuthenticated,
  isAdmin,
  (req, res, next) =>
    validateBody(req, res, next, post_put_blogValidationSchema),
  Blogs.PostController.postBlog,
);
// put-------------
blogRouter.put(
  '/:id',
  isAuthenticated,
  isAdmin,
  (req, res, next) =>
    validateBody(req, res, next, post_put_blogValidationSchema),
  Blogs.PutController.putBlog,
);

// delete-------------
blogRouter.delete(
  '/:id',
  isAuthenticated,
  isAdmin,
  Blogs.DeleteController.deleteBlog,
);
