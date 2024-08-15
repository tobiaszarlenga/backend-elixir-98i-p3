import express from 'express';
import { Blogs } from '../../controllers/blogs/index.js';

export const blogRouter = express.Router();

// get-------------
blogRouter.get('/', Blogs.GetController.getBlogs);

// post------------
// /api/v1/blog/
blogRouter.post('/', Blogs.PostController.postBlog);
// put-------------
blogRouter.put('/:id', Blogs.PutController.putBlog);

// delete-------------
blogRouter.delete('/:id', Blogs.DeleteController.deleteBlog);
