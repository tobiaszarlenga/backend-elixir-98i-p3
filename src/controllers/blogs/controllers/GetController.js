import BlogsModel from '../../../models/blogSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class GetController {
  static async getBlogs(_, res) {
    try {
      const data = await BlogsModel.find();

      const filterdData = data.map((blog) => {
        return {
          id: blog._doc._id,
          title: blog._doc.title,
          imageUrl: blog._doc.imageUrl,
          content: blog._doc.content,
        };
      });
      res.json({
        data: filterdData,
        message: 'blogs encontrado correctamente',
      });
    } catch (e) {
      internalError(res, e, 'ocurrio un error al leer la lista ');
    }
  }
}
