import express from 'express';
import { Blogs } from '../../controllers/blogs/index.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { isAuthenticated } from '../../middlewares/isAuthenticated.js';

import { post_put_blogValidationSchema } from '../../helpers/validationSchemas/blogsValidationSchemas.js';

export const blogRouter = express.Router();

// get-------------
blogRouter.get('/', Blogs.GetController.getBlogs);

// post------------
// /api/v1/blog/
blogRouter.post(
  '/',
  isAuthenticated,
  (req, res, next) =>
    validateBody(req, res, next, post_put_blogValidationSchema),
  Blogs.PostController.postBlog,
);
// put-------------
blogRouter.put(
  '/:id',
  (req, res, next) =>
    validateBody(req, res, next, post_put_blogValidationSchema),
  Blogs.PutController.putBlog,
);

// delete-------------
blogRouter.delete('/:id', Blogs.DeleteController.deleteBlog);
