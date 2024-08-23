import HttpCodes from 'http-status-codes';
import BlogModel from '../../../models/blogSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class PostController {
  static async postBlog(req, res) {
    // si llegamos aca la info que nos manda el fe ya esta validada

    const { body } = req;
    console.log(body);

    const newBlog = new BlogModel({
      title: body.title,
      imageUrl: body.imageUrl,
      content: body.content,
    });
    try {
      await newBlog.save();
      res.status(HttpCodes.CREATED).json({
        data: null,

        messege: 'blog guardado correctamente',
      });
    } catch (e) {
      internalError(res, e, 'ocurrio un error al guardar el blog');
    }
  }
}
