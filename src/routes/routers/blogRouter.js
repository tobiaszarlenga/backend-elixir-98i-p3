import express from 'express';
import { blogs } from '../../controllers/blogs/index.js';

export const blogRouter = express.Router();

// get-------------
blogRouter.get('/', blogs.GetController.getBlogs);

// post------------
// /api/v1/blog/
blogRouter.post('/', blogs.PostController.postBlog);
// put-------------

// delete-------------
